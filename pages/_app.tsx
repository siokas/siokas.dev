import "../styles/globals.css";
import React from "react";
import { AppProps } from "next/app";
import { ReactElement } from "react";
import ThemeProvider from "./../utils/ThemeContext";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
