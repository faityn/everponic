import "@src/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { RecoilRoot } from "recoil";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default appWithTranslation(App);
