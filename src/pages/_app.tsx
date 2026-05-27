import SnowOverlay from "@/components/SnowOverlay";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import { Toaster } from "sonner";

type MyAppProps = {
    Component: any;
    pageProps: any;
};

export default function App({ Component, pageProps }: MyAppProps) {
    return (
        <div>
            <Component {...pageProps} />
            <Toaster position="top-right" richColors={true} />
            <SnowOverlay />
        </div>
    );
}
