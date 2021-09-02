import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextPage } from "next";
import { wrapper } from "../core/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
const ServiceStaterApp: NextPage<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <Head>{}</Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(appWithTranslation(ServiceStaterApp));
