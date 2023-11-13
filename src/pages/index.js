import React from "react";
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

                <meta name="description" content="Front-end & Software Developer" />
                <meta
                    name="keywords"
                    content="Desenvolvedor front-end, Front-end developer, Desenvolvedor web, Web developer, Desenvolvedor de interfaces, Interface developer, Desenvolvedor de UX, UX developer, Desenvolvedor de UI, UI developer, Software developer, Programador, Developer, Engenheiro de software, Software engineer, Desenvolvedor de back-end, Back-end developer, Desenvolvedor full-stack, Full-stack developer, Desenvolvedor de jogos, Game developer, Agência, Agência de desenvolvimento, Web agency, Software agency, Agência de marketing digital, Digital marketing agency, Agência de design, Design agency, Freelance, Desenvolvedor freelancer, Freelance developer, Programador freelancer, Freelance programmer, Engenheiro de software freelancer, Freelance software engineer, react, nextjs, next, typescript, styled, styled components, components, firebase, rocketchat, docker"
                />

                <meta property="og:title" content="Anderson Marlon // Yagasaki" />
                <meta property="og:description" content="Front-end & Software Developer" />
                <meta
                    property="og:keywords"
                    content="Desenvolvedor front-end, Front-end developer, Desenvolvedor web, Web developer, Desenvolvedor de interfaces, Interface developer, Desenvolvedor de UX, UX developer, Desenvolvedor de UI, UI developer, Software developer, Programador, Developer, Engenheiro de software, Software engineer, Desenvolvedor de back-end, Back-end developer, Desenvolvedor full-stack, Full-stack developer, Desenvolvedor de jogos, Game developer, Agência, Agência de desenvolvimento, Web agency, Software agency, Agência de marketing digital, Digital marketing agency, Agência de design, Design agency, Freelance, Desenvolvedor freelancer, Freelance developer, Programador freelancer, Freelance programmer, Engenheiro de software freelancer, Freelance software engineer, react, nextjs, next, typescript, styled, styled components, components, firebase, rocketchat, docker"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://cdn-images-1.medium.com/max/800/0*eBBvNAU5Qz9roeNf.png"
                />
                <meta property="og:site_name" content="Anderson Marlon // Yagasaki" />
                <meta property="og:locale" content="en_US" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Anderson Marlon // Yagasaki" />
                <meta name="twitter:description" content="Front-end & Software Developer" />
                <meta name="twitter:image:alt" content="Anderson Marlon // Yagasaki" />
            </Head>

            <div className="homePage">
                <Navigation />

                <div className="content">
                    <h3><img src="https://github.com/tairosonloa/tairosonloa/raw/main/assets/wave.gif?raw=true" width="25px" /> Hi, I'm Anderson Marlon</h3>
                    <h2>Software <br /> Developer</h2>
                    <h4>ReactJS | NextJS | Typescript | Styled Components | Firebase | Docker | Rocketchat</h4>
                </div>

                <Footer />
            </div>
        </div>
    );
}
