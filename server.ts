import 'zone.js/dist/zone-node';
import 'zone.js/dist/zone-patch-rxjs';
import '@angular/fire/firestore-protos';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { environment } from 'src/environments/environment';
import { createGzip } from 'zlib';
import { routes } from 'src/app/app-routing.module';
import Variables from 'variables';
// The Express app is exported so that it can be used by serverless Functions.
export function appLang(lang: string): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/criminal-wiki/browser', lang);
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}
export function app(): express.Express {
  const { SitemapStream } = require('sitemap');
  const server = express();

  server.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    res.header('Content-Encoding', 'gzip');

    try {
      const sitemapStream = new SitemapStream({
        // This is required because we will be adding sitemap entries using relative URLs
        hostname: environment.baseUrl,
      });
      const pipeline = sitemapStream.pipe(createGzip());

      for (const route of routes) {
        sitemapStream.write({
          priority: 1,
          url: route.path,
        });
      }

      // Add any other sitemap items for other pages of your site

      sitemapStream.write({
        priority: 1,
        url: '',
      });

      // Stream write the response
      sitemapStream.end();
      pipeline.pipe(res).on('error', (error: Error) => {
        throw error;
      });
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  });
  server.get('*', (req, res) => {
    const cookie = req.headers.cookie?.split(';').reduce((a, v) => {
      const x = v.trim().split('=');
      return {
        ...a,
        [x[0]]: x[1],
      };
    }, {}) as { [key: string]: string };

    if (cookie?.[Variables.i18nCookie])
      return res.redirect(`/${cookie[Variables.i18nCookie]}`);
    return res.redirect(`/${Variables.languages[0]}`);
  });

  return server;
}

function run(): void {
  const server = express();
  const port = process.env.PORT || 4000;
  // Start up the Node server
  for (const lang of Variables.languages) {
    const AppLang = appLang(lang);
    server.use(`/${lang}`, AppLang);
  }
  const App = app();
  server.use('', App);
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
