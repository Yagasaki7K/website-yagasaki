import HomeArticlesDetails from '@/components/HomeArticlesDetails'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const about = () => {
    return (
        <>
            <Head>
                <title>Anderson Marlon // Yagasaki7K</title>
            </Head>

            <div className="overlay" />

            <HomeArticlesDetails>
                <div className="header-about">
                    <Link className="backToHome" href={'/'}><i className="uil uil-arrow-left"> Back To Home</i></Link>
                </div>

                <div className="about">
                    <h2>I&apos;m Yagasaki,</h2>
                    <h1>
                        Software Developer from São Paulo, Brazil
                    </h1>
                    <div className="quote">
                        <p>
                            <b>❝</b> <u>Science</u> without results is just <u>witchcraft</u>
                            <b>❞</b> — Cave Johnson
                        </p>
                    </div>

                    <p>
                        I am a <strong>code enthusiast</strong>, specialized for{" "}
                        <strong>web</strong>. I&apos;m Focused on modern technologies using
                        Javascript and building great products and solutions alone or together
                        with Kalify Inc, the brazilian community of developers using open source method. Persistent, dedicated and reliable worker, personally
                        very communicative and friendly.
                    </p>


                    <div className="languages">
                        <h3>Skills and expertise:</h3>
                        <p>
                            <strong>Languages:</strong> Javascript / Typescript
                        </p>
                        <p>
                            <strong>Frontend:</strong> React.js, Next.js, Vite & Waku
                        </p>
                        <p>
                            <strong>Backend:</strong> Node.js, Bun, Express, Fastify & Nest
                        </p>
                        <p>
                            <strong>Database:</strong> Prisma, Hasura, Firebase & SQL Lite
                        </p>
                        <p>
                            <strong>Testing:</strong> Node Test, Bun Test, Storybook, Cypress & Jest
                        </p>
                        <p>
                            <strong>DevOps:</strong> Docker, CI/CD & Github Actions
                        </p>
                        <p>
                            <strong>Design:</strong> Figma, Adobe XD, Photoshop & UX/UI
                        </p>
                        <p>
                            <strong>Other:</strong> Git, Serverless, Vercel, etc...
                        </p>
                    </div>


                    <div className="positions">
                        <h3>Positions:</h3>
                        <h4>Software Developer</h4>
                        <p>
                            <strong>WhatsUpper</strong> | <i>August 2023 — December 2023</i>
                        </p>
                        <p>
                            Communication with e-commerce applications, Integration with IA,
                            SigaAntenado Project and more.
                        </p>

                        <p>
                            Using technologies like jQuery, React, TypeScript, NodeJS, CI/CD, Firebase, Rocketchat, Google Cloud Platform, Firebase Logging, integration and unit tests with Jest, NestJS, GPT Integration and Stripe.
                        </p>

                        <h4>Software Developer</h4>
                        <p>
                            <strong>Stone Co. / Linx S.A.</strong> | <i>October 2022 — June 2023</i>
                        </p>
                        <p>
                            Working on A.I. of communication with e-commerce
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
                            types of digital business. We&apos;re using technologies like NextJS,
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

                    <div className="certificates" id="awards">
                        <h3>Certificates:</h3>
                        <p>
                            <strong>
                                NLW Unite (Node, Bun (experimental), Typescript, Fastify, Prisma, Zod & Swagger){" "}
                            </strong>
                            by Rocketseat - April 2024
                        </p>

                        <p>
                            <strong>
                                NLW Unite (React, Vite, TypeScript, Styled Components, Bun, Unicons & Dayjs){" "}
                            </strong>
                            by Rocketseat - April 2024
                        </p>

                        <p>
                            <strong>
                                NLW Expert (Node, TS, Fastify, Prisma, Docker, PostgreSQL, Redis, Zod & WebSocket){" "}
                            </strong>
                            by Rocketseat - February 2024
                        </p>

                        <p>
                            <strong>
                                NLW Expert (React, TS, Vite, TailwindCSS, Web Storage & Web Speech){" "}
                            </strong>
                            by Rocketseat - February 2024
                        </p>

                        <p>
                            <strong>
                                TDD – Guided Software Development Tests{" "}
                            </strong>
                            by Instituto Tecnológico de Aeronáutica (Coursera Free) - December 2023
                        </p>

                        <p>
                            <strong>
                                Complete Dialogflow - Master the Creation of Virtual Assistants{" "}
                            </strong>
                            by Universidade Global, Rogerio Guimaraes - November 2023
                        </p>

                        <p>
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
            </HomeArticlesDetails>
        </>
    )
}

export default about