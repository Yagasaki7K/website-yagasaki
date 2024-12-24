import "@/styles/globals.css";
import SnowEffect from "@/components/SnowEffect";

import type { AppProps } from "next/app";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
      <Toaster richColors position="top-right" />
      <SnowEffect />
  </>;
}
