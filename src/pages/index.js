import React from "react";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import style from "../css/content.scss";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Home() {
    return (
        <div className={style}>
            <Head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
                />
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-39P50954DX"
                />
                <meta name="twitter:card" content={"summary_large_image"} />
                <meta name="twitter:site" content={"@Yagasaki7K"} />
                <meta name="twitter:title" content={"Anderson Marlon // Yagasaki"} />
                <meta
                    name="twitter:description"
                    content={"Software Developer @ Linx"}
                />
                <meta
                    name="twitter:image"
                    content={"https://i.imgur.com/1ypU0Xs.png"}
                />
            </Head>

            <div className="homePage">
                <Navigation />

                <div className="content">
                    <h3><img src="https://github.com/tairosonloa/tairosonloa/raw/main/assets/wave.gif?raw=true" width="25px" /> Hi, I'm Anderson Marlon</h3>
                    <h2>Software <br /> Developer</h2>
                    <h4>ReactJS | NextJS | Typescript | Styled Components | Firebase | Docker</h4>
                </div>

                <Footer />
            </div>
        </div>
    );
}
