import React from "react";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import style from "../css/content.scss";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

export default function About() {
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
                <meta name="twitter:title" content={"Anderson Marlon // Yagasaki7K"} />
                <meta
                    name="twitter:description"
                    content={"Software Developer (Typescript, React.js, NextJS)"}
                />
                <meta
                    name="twitter:image"
                    content={"https://i.imgur.com/1ypU0Xs.png"}
                />
            </Head>

            <div className="homePage">
                <Navigation />

                <div className="content-about">
                    <h2>I'm Yagasaki,</h2>
                    <h2>
                        Software Developer (Typescript, React.js, NextJS) from Campinas,
                        Brazil
                    </h2>
                    <div className="quote">
                        <p>
                            <b>❝</b> <u>Science</u> without results is just <u>witchcraft</u>
                            <b>❞</b> — Cave Johnson
                        </p>
                    </div>

                    <p>
                        I am a <strong>code enthusiast</strong>, specialized for{" "}
                        <strong>web</strong>. I'm Focused on modern technologies using
                        Javascript and building great products and solutions alone or together
                        with Kalify Inc. Persistent, dedicated and reliable worker, personally
                        very communicative and friendly.
                    </p>

                    <h3>Skills and expertise:</h3>

                    <div className="languages">
                        <p>
                            <strong>Languages:</strong> Javascript (Typescript)
                        </p>
                        <p>
                            <strong>Frontend:</strong> React.js, Next.js
                        </p>
                        <p>
                            <strong>Backend:</strong> Node.js, Express
                        </p>
                        <p>
                            <strong>Database:</strong> Firebase
                        </p>
                        <p>
                            <strong>Testing:</strong> Jest
                        </p>
                        <p>
                            <strong>DevOps:</strong> Docker, CI/CD
                        </p>
                        <p>
                            <strong>Design:</strong> Figma, UX/UI
                        </p>
                        <p>
                            <strong>Other:</strong> Git, Serverless, Vercel, etc...
                        </p>
                    </div>

                    <h3>Positions:</h3>

                    <div className="positions">
                        <h4>Software Developer</h4>
                        <p>
                            <strong>Whatsupper</strong> | <i>August 2023 — December 2023</i>
                        </p>
                        <p>
                            Communication with e-commerce applications, Integration with IA,
                            SigaAntenado Project and more.
                        </p>

                        <p>
                            Using technologies like jQuery, React, TypeScript, NodeJS, CI/CD, Firebase, Rocketchat, Google Cloud Platform, Firebase Logging, integration and unit tests with Jest, NestJS, GPT Integration and Stripe.
                        </p>

                        <h4>Systems Development Analyst</h4>

                        <h4>Software Developer</h4>
                        <p>
                            <strong>Linx S.A.</strong> | <i>October 2022 — June 2023</i>
                        </p>
                        <p>
                            Currently working on A.I. of communication with e-commerce
                            applications.
                        </p>

                        <p>
                            Using React, NextJS, TypeScript, NodeJS, GraphQL, Hasura, UI/UX,
                            Storybook, Figma, ChakraUI, CI/CD, Docusaurus, Integration and Unit
                            Testing with Jest, AWS Cloud, NestJS and Postgress.
                        </p>

                        <h4>Systems Development Analyst</h4>
                        <p>
                            <strong>Cenário Capital</strong> |{" "}
                            <i>April 2021 — September 2021</i>
                        </p>
                        <p>
                            Cenário Capital is a Brazilian company Founded in 2008 with
                            expertise in digital marketing and analytical focus on different
                            types of digital business. We're using technologies like NextJS,
                            Typescript, Push Notification using Javascript via Google
                            Developers, Scrum and Kabam during development, Google Analytics,
                            Facebook Ads and using Digital Ocean to DevOps our system.
                        </p>

                        <h4>Junior Marketing Assistant / Development Frontend</h4>
                        <p>
                            <strong>Marry Perry Paris</strong> | <i>July 2020 – October 2020</i>
                        </p>
                        <p>
                            I was responsible for the development of several landing pages for
                            the company, including the main website, how to use each product
                            website and several other segments for customer communication using
                            MVC Architecture, MySQL and NodeJS – later the project was changed
                            to Laravel.
                        </p>
                    </div>

                    <h3>Certificates:</h3>

                    <div className="certificates">
                        <p>
                            <strong>
                                Complete Dialogflow - Master the Creation of Virtual Assistants{" "}
                            </strong>
                            by Universidade Global, Rogerio Guimaraes - November 2023
                        </p><p>
                            <strong>
                                Modern Web with Projects (JS/Typescript/React/Node){" "}
                            </strong>
                            by COD3R - August 2022
                        </p>
                        <p>
                            <strong>Workshop Figma </strong>
                            by Design Culture - April 2022
                        </p>
                        <p>
                            <strong>
                                Introduction and Complete Course in Computer Science{" "}
                            </strong>
                            by Harvard - March 2022
                        </p>
                        <p>
                            <strong>Participation, Proud Tech </strong>
                            by Softplan - March 2022
                        </p>
                        <p>
                            <strong>Agile Days  </strong>
                            by Instituto de Gestão e Tecnologia da Informação (IGTI) - November
                            2021
                        </p>
                        <p>
                            <strong>Participation, Masterclass Github Actions </strong>
                            by Azure na Prática - January 2021
                        </p>
                        <p>
                            <strong>Participation, Hackathon (Third Place) </strong>
                            by Shawee, AMBEV Hackathon - December 2020
                        </p>
                        <p>
                            <strong>Linux Terminal </strong>
                            by Profº Diego Mariano - October 2020
                        </p>
                        <p>
                            <strong>Introduction to the Linux Operation System </strong>
                            by Profº Diego Mariano - October 2020
                        </p>
                        <p>
                            <strong>Introduction to MySQL Database </strong>
                            by Profº Diego Mariano - October 2020
                        </p>
                        <p>
                            <strong>Creating Dynamic Web Pages with PHP </strong>
                            by Profº Diego Mariano - October 2020
                        </p>
                        <p>
                            <strong>Facebook Blueprint - Basic to Advanced </strong>
                            by Faculdade do Marketing Digital - July 2020
                        </p>
                        <p>
                            <strong>11th Edition - Omnistack Week </strong>
                            by Rocketseat - March 2020
                        </p>
                        <p>
                            <strong>Introduction to Git and Version Control </strong>
                            by Digital Innovation One - February 2020
                        </p>
                        <p>
                            <strong>Getting Started with Git and Your Commands </strong>
                            by Digital Innovation One - February 2020
                        </p>
                        <p>
                            <strong>Arctic Code Vault Contributor </strong>
                            by Github Archive Program - February 2020
                        </p>
                        <p>
                            <strong>Essential Programming Logic </strong>
                            by Digital Innovation One - February 2020
                        </p>
                        <p>
                            <strong>Internet programming with HTMl5 and CSS3 </strong>
                            by Digital Innovation One - February 2020
                        </p>
                        <p>
                            <strong>Web Programming for Scientific Dissemination </strong>
                            by Profº Diego Mariano - January 2020
                        </p>
                        <p>
                            <strong>Web Design with PHP, HTML, CSS and JS </strong>
                            by Udemy - January 2020
                        </p>
                        <p>
                            <strong>Illustration and Graphic Design for the Web </strong>
                            by Bradesco - May 2017
                        </p>
                        <p>
                            <strong>Web Design and Graphic Design </strong>
                            by MacPoli Cursos - December 2014
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
