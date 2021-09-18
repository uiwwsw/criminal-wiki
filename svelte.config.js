import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import sass from 'sass';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer]
		},
		sass: {
			sync: true,
			implementation: sass
		}
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$src: path.resolve('./src')
				}
			},
			mode: process.env.MODE || 'development'
		}
	}
};

export default config;
