import FloatingButton from "@/components/BtnFloating";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
      <Toaster richColors position="top-right" />
      <FloatingButton />
  </>;
}
