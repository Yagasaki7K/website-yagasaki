import SnowOverlay from "@/components/SnowOverlay";
import "@/styles/globals.css";
import { Toaster } from "sonner";

type MyAppProps = {
    Component: any;
    pageProps: any;
};

export default function App({ Component, pageProps }: MyAppProps) {
    return (
        <>
            <Component {...pageProps} />
            <Toaster position="top-right" richColors={true} />
            <SnowOverlay />
        </>
    );
}
