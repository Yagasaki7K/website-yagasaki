import "@/styles/globals.css";
import SnowEffect from "@/components/SnowEffect";

import type { AppProps } from "next/app";
import ReactScan from "@/components/ReactScan";

export default function App({ Component, pageProps }: AppProps) {
    return(
    <>
        <Component {...pageProps} />
        <SnowEffect />
        <ReactScan />
    </>
    )
}
