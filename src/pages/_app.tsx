import "@/styles/globals.css";
import SnowEffect from "@/components/SnowEffect";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
      <SnowEffect />
  </>;
}
