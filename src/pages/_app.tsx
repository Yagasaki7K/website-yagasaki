import SnowOverlay from "@/components/SnowOverlay";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import { Toaster } from "sonner";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Component {...pageProps} />
            <Toaster position="top-right" richColors={true} />
            <SnowOverlay />
        </div>
    );
}
