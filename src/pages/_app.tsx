import SnowOverlay from "@/components/SnowOverlay";
import "@/styles/globals.css";
import { Inter, Poppins, DM_Mono } from "next/font/google";
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-poppins" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-dm-mono" });

type MyAppProps = {
    Component: any;
    pageProps: any;
};

export default function App({ Component, pageProps }: MyAppProps) {
    return (
        <div className={`${inter.variable} ${poppins.variable} ${dmMono.variable}`}>
            <Component {...pageProps} />
            <Toaster position="top-right" richColors={true} />
            <SnowOverlay />
        </div>
    );
}
