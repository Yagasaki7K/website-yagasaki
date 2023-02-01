import React from "react";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import style from "../css/content.scss";

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
                <meta
                    name="twitter:title"
                    content={"Anderson Marlon // Yagasaki7K"}
                />
                <meta
                    name="twitter:description"
                    content={"Software Developer @ Stone Co."}
                />
                <meta
                    name="twitter:image"
                    content={"https://i.imgur.com/1ypU0Xs.png"}
                />
            </Head>
            <div className="LeftContent">
                <h2>Anderson Marlon</h2>
                <h4>Software Developer @ Stone Co.</h4>

                <div className="ContentText">
                    <p>
                        I build solutions from Internet at Kalify building
                        projects like Kalify Community and Web Essentials using
                        Javascript and love for web development. I also share
                        what I learn and my experiences in the web on my blog
                        and my curriculum.
                    </p>
                    <p>フロントエンド開発者</p>
                </div>

                <div className="summary">
                    <h4>Summary</h4>
                    <a href="#github">
                        <p>
                            EVA <b>00</b> | Projects
                        </p>
                        <hr />
                    </a>
                    <a href="#blog">
                        <p>
                            EVA <b>01</b> | Articles
                        </p>
                        <hr />
                    </a>
                    <a href="#twitter">
                        <p>
                            EVA <b>02</b> | References
                        </p>
                        <hr />
                    </a>
                    <a href="/curriculum">
                        <p>
                            EVA <b>03</b> | Curriculum
                        </p>
                        <hr />
                    </a>
                </div>

                <footer>
                    <img
                        src="https://github.com/Yagasaki7k.png"
                        alt="Anderson Marlon"
                    />
                    <Link
                        href="https://twitter.com/Yagasaki7K"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="uil uil-twitter"></i>
                        <p>Twitter</p>
                        <i className="uil uil-external-link-alt"></i>
                    </Link>

                    <Link
                        href="https://github.com/Yagasaki7K"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="uil uil-github"></i>
                        <p>GitHub</p>
                        <i className="uil uil-external-link-alt"></i>
                    </Link>
                </footer>
            </div>

            <div className="RightContent">
                {/* Github Projects */}
                <h1 id="github">Github Projects</h1>

                <Link
                    href="https://github.com/Yagasaki7K/website-essentials"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="boxGithub">
                        <h3>NextJS/Typescript</h3>
                        <h2>Yagasaki7K/website-essentials</h2>
                        <p>List of softwares essentials for your computer.</p>
                        <div className="star">
                            <i className="uil uil-star"></i>
                            <p className="starnumber"> 7</p>
                        </div>
                    </div>
                </Link>

                <Link
                    href="https://github.com/Yagasaki7K/website-findyourpet"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="boxGithub">
                        <h3>React/Styled Components</h3>
                        <h2>Yagasaki7K/website-findyourpet</h2>
                        <p>
                            App to help you rescue, inform and donate your pets
                            with love! 🐶💜🐱
                        </p>
                        <div className="star">
                            <i className="uil uil-star"></i>
                            <p className="starnumber"> 4</p>
                        </div>
                    </div>
                </Link>

                <Link
                    href="https://github.com/Yagasaki7K/website-newsletterchamps"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="boxGithub">
                        <h3>Javascript</h3>
                        <h2>Yagasaki7K/website-newsletterchamps</h2>
                        <p>
                            A page on website to display a Newsletter from
                            Filipe Deschamps
                        </p>
                        <div className="star">
                            <i className="uil uil-star"></i>
                            <p className="starnumber"> 2</p>
                        </div>
                    </div>
                </Link>

                {/* Articles */}
                <h1 id="blog">Blog - Portuguese</h1>

                <Link href="/blog/configurando-o-seo-do-head-com-nextjs">
                    <div className="boxGithub">
                        <h2>
                            Configurando o SEO do Head com Next.js
                        </h2>
                        <p>
                            Em 2013, eu havia criado o Onigiri Hardcore, um blog de notícias sobre animes, jogos e tudo que envolve a cultura nerd como um todo. Ano passado, depois de nove anos, eu tinha decidido restaurar ele e desenvolvê-lo, mas com outras tecnologias ...
                        </p>
                        <div className="star">
                            <p>
                                Acessar a matéria{" "}
                                <i className="uil uil-external-link-alt"></i>
                            </p>
                        </div>
                    </div>
                </Link>

                <Link href="/blog/quando-decidir-se-e-melhor-trabalhar-em-um-monorepo-ou-repositorios-individuais">
                    <div className="boxGithub">
                        <h2>
                            Quando decidir se é melhor trabalhar em um monorepo ou repositórios individuais?
                        </h2>
                        <p>
                            Eu estava em uma reunião da empresa que trabalho e o assunto era sobre o monorepo, o que é, como funciona e quando é melhor utilizar. A discussão foi muito boa e acredito que todos os envolvidos saíram com uma visão diferente sobre o assunto...
                        </p>
                        <div className="star">
                            <p>
                                Acessar a matéria{" "}
                                <i className="uil uil-external-link-alt"></i>
                            </p>
                        </div>
                    </div>
                </Link>

                <Link href="/blog/removendo-o-twitter-analytics-do-feed">
                    <div className="boxGithub">
                        <h2>
                            Removendo o Twitter Analytics do Feed
                        </h2>
                        <p>
                            Hoje mais cedo estava navegando no Twitter
                            como de costume e o usuário Thiago havia publicado uma dica,
                            uma solução de nossos problemas.
                        </p>
                        <div className="star">
                            <p>
                                Acessar a matéria{" "}
                                <i className="uil uil-external-link-alt"></i>
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Twitter Feed */}
                <h1 id="twitter">References on Twitter</h1>

                <Link
                    href="https://twitter.com/Yagasaki7K"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="boxTwitter">
                        <div className="twitterImage">
                            <img
                                src="https://github.com/Yagasaki7K.png"
                                alt="Twitter"
                            />
                        </div>
                        <div className="twitterContent">
                            <blockquote>
                                <h3>@Yagasaki7K</h3>
                                <p>Software Developer @ Stone / Kalify Inc</p>
                                <p>Taekwondo Fighter @ Campinas Fighters</p>
                            </blockquote>
                        </div>
                    </div>
                </Link>

                <Link
                    href="https://twitter.com/sseraphini"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="boxTwitter">
                        <div className="twitterImage">
                            <img
                                src="https://github.com/sibelius.png"
                                alt="Twitter"
                            />
                        </div>
                        <div className="twitterContent">
                            <blockquote>
                                <h3>@Sseraphini</h3>
                                <p>
                                    Abstraction Engineer
                                    http://patreon.com/sibelius I Bet on
                                    People/Startups - send me your Pitch Deck to
                                    get funded
                                    http://sibelius.github.io/zettelkasten/
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </Link>

                <Link
                    href="https://twitter.com/WonderWanny"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="boxTwitter">
                        <div className="twitterImage">
                            <img
                                src="https://github.com/WonderWanny.png"
                                alt="Twitter"
                            />
                        </div>
                        <div className="twitterContent">
                            <blockquote>
                                <h3>@WonderWanny</h3>
                                <p>
                                    Community Manager, SQL Dev & DBA. Digital
                                    nomadic nerd, antifa, hyperactive, obsessed
                                    with Flamingos and Wonder Woman. 🦩 From
                                    Brazil. 🇧🇷
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </Link>

                <Link
                    href="https://twitter.com/punktsx"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="boxTwitter">
                        <div className="twitterImage">
                            <img
                                src="https://github.com/pamellafernandes.png"
                                alt="Twitter"
                            />
                        </div>
                        <div className="twitterContent">
                            <blockquote>
                                <h3>@Punktsx</h3>
                                <p>
                                    Frontend Developer 👩🏻‍💻🌐📱 || Amante de
                                    Astronomia 🔭 || Science 🧬
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}