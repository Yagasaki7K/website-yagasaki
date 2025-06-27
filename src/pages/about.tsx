import Copyright from '@/components/Copyright'
import HomeArticlesDetails from '@/components/HomeArticlesDetails'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const about = () => {
    return (
        <>
            <Head>
                <title>Yagasaki | mid-level software developer using JS and TS</title>
                <link rel="icon" type="image/png" href="https://github.com/Yagasaki7K.png" />
            </Head>

            <div className="overlay" />

            <HomeArticlesDetails>
                <div className="header-about poppins">
                    <Link className="backToHome" href={'/'}><i className="uil uil-arrow-left"> Back To Home</i></Link>
                </div>

                <div className="about poppins">
                    <h2>I&apos;m Anderson "Yagasaki" Marlon,</h2>
                    <h1>
                        Software Developer from São Paulo, Brazil
                    </h1>

                    <p>
                        Software Developer, Fullstack Developer and Front-end Developer with experience in Javascript, Typescript, React.js, Next.js, Vite, Sass, Redux, RegEx, UI/UX, Responsive Design, Firebase, Supabase, Hasura, SQL Lite, MySQL, PostgreSQL, GraphQL, Jest, Node.js, Express, Fastify, NestJS, Bun.js, Whatsapp API, Rocketchat, Serverless, Microservices and more …
                    </p>
                    <p>
                        Technology Enthusiast, Specialized in Web and Self-taught.
                    </p>

                    <div className="projects">
                        <h3>My Relevant Projects</h3>
                        <p>
                            <Link href="https://onigirihardcore.com.br" target="_blank" rel="noreferrer">Onigiri Hardcore:</Link> It's a news portal for the nerd world, bringing news involving anime, games, films, series and technology. It was built using Next.js, <s>Firebase</s>, Styled Components, DayJS, Gray Matter, Framer Motion, Marked, Million, Next-SEO, Redis, Sonner and Markdown.
                        </p>
                        <p>
                            <Link href="https://webessentials.com.br" target="_blank" rel="noreferrer">Essentials or Web Essentials:</Link> It's an application for you to easily find applications that are useful for your computer after formatting, making your life easier and bringing things closer to you - it only works on the desktop - it was developed using ReactJS, NextJS, Javascript, JSON and Styled Components.
                        </p>
                        <p>
                            <Link href="https://steamfolio.vercel.app" target="_blank" rel="noreferrer">Steamfolio:</Link> Imagine having a development portfolio for yourself that looks like Steam and is completely personalized, with updated data straight from Github? That's the idea, Steamfolio is a simple and configurable project to make everything look like your professional, combined with Steam.
                        </p>
                        <p>You can see more projects on my <Link href="https://github.com/yagasaki7k" target="_blank" rel="noreferrer">Github</Link> or <Link href="#projects">above in Projects</Link>.</p>
                    </div>

                    <div className="languages">
                        <h3>Skills and expertise</h3>
                        <p>
                            <strong>Languages:</strong> Javascript / Typescript, Python
                        </p>
                        <p>
                            <strong>Frontend:</strong> React.js, Next.js & Vite
                        </p>
                        <p>
                            <strong>Backend:</strong> Node.js, Bun, Express, Fastify & Nest.js
                        </p>
                        <p>
                            <strong>Database:</strong> Prisma, Hasura, Firebase, Supabase, MySQL, PostgreSQL & SQL Lite
                        </p>
                        <p>
                            <strong>Testing:</strong> Node.js, Bun.js, Storybook & Jest
                        </p>
                        <p>
                            <strong>DevOps:</strong> Docker, Vercel, CI/CD & Github Actions
                        </p>
                        <p>
                            <strong>Design:</strong> Figma, Adobe XD, Photoshop & UX/UI
                        </p>
                        <p>
                            <strong>Other:</strong> Git, Serverless, Google Cloud, Docusaurus, etc...
                        </p>
                    </div>

                    <div className="positions">
                        <h3>Positions</h3>
                        <h4>Software Developer</h4>
                        <p>
                            <strong>Astriia Co.</strong> | <i>September 2024 — May 2025</i>
                        </p>
                        <p>
                            Working on A.I. of communication with astrology using Whatsapp API.
                        </p>

                        <li>Development of an application with astrology and AI (OpenAI).</li>
                        <li>Database in communication with the user and OpenAI using Firebase.</li>
                        <li>Vercel Cron to schedule notifications and personalized alerts.</li>
                        <li>Use of Facebook Blueprint to send templates and manage WhatsApp API.</li>
                        <li>Construction of an interactive feedback landing page.</li>
                        <li>Communication with webhook through Discord for logging purposes.</li>
                        <li>Use of Vercel Blob to generate Astral Map images.</li>
                        <li>Use of AstrologyAPI for queries and analysis together with OpenAI.</li>
                        <li>Setup and checkout system using Stripe</li>
                        <li>Documentation and all detailed functionality for technical purposes using Docusaurus.</li>

                        <p>
                            Using Firebase, Next.js, React.js, Node.js (Express), Bun.js (Express), Typescript, WhatsApp API, Vercel Blob / Vercel Cron, OpenAI API, Discord Webhook, AstrologyAPI, Excalidraw, Docusaurus, Facebook Business, Facebook Blueprint, Facebook Developers Jest, Stripe and Github Projects (SCRUM).
                        </p>

                        <hr />

                        <h4>Software Developer</h4>
                        <p>
                            <strong>Stone Co. / Linx S.A.</strong> | <i>October 2022 — June 2023</i>
                        </p>
                        <p>
                            Working on A.I. of communication with e-commerce applications.
                        </p>

                        <li>Responsible to use DialogFlow and build new routines to communicate with the app.</li>
                        <li>Construction of project documentation, tests and their functionalities.</li>
                        <li>Integration via AI on new routines using Rocketchat and Whatsapp and communication with the customer.</li>
                        <li>Construction of the responsivity website for the product and its presentation of solutions and functionalities using the app with ecommerce and the customer’s needs.</li>
                        <li>Manufacturing and testing new routines, templates and communication behaviors.</li>
                        <li>Responsible to developer a payment method using Stripe.</li>
                        <li>Responsible to develop and delivery the settings and functionally of Rocketchat and integrate with iframe of company together with ecommerce solution.</li>
                        <li>Build and develop a jQuery Single Page Application quiz for client and suggest a better way to find a solution for the customer based on the problem and redirect them to a specialized communication department.</li>

                        <p>
                            Using jQuery, Firebase, Google Cloud Platform, Firebase Logging, React, NextJS, TypeScript, NodeJS, GraphQL, Hasura, UI/UX, Storybook, Figma, ChakraUI, CI/CD, Docusaurus, Integration and Unit Testing with Jest, AWS Cloud, NestJS, GPT Integration, Stripe and Postgress.
                        </p>

                        <hr />

                        <h4>Junior Marketing Assistant / Front-end Developer / Systems Development Analyst</h4>
                        <p>
                            <strong>Cenário Capital</strong> |{" "}
                            <i>October 2020 — September 2021</i>
                        </p>

                        <li>Construction of the responsivity website for the solution of the company.</li>
                        <li>Construction of the quiz to find a better way to customer to find a better way to request a service based in your needs.</li>
                        <li>Construction of push notification method using Javascript and Google Developers to advice the customer about new features.</li>
                        <li>Manufacturing Digital Ocean Solutions to give a better DevOps system to our project.</li>

                        <p>
                            I was responsible for the development of several landing pages for the company, including the main website, how to use each product website and several other segments for customer communication using MVC Architecture, MySQL and NodeJS – later the project was changed to Laravel.
                        </p>

                        <p>
                            Cenário Capital is a Brazilian company Founded in 2008 with
                            expertise in digital marketing and analytical focus on different
                            types of digital business. We&apos;re using technologies like NextJS,
                            Typescript, Push Notification using Javascript via Google
                            Developers, Scrum and Kabam during development, Google Analytics,
                            Facebook Ads and using Digital Ocean to DevOps our system.
                        </p>

                        <hr />
                    </div>

                    <div className="certificates" id="awards">
                        <h3>Certificates</h3>

                        <p>
                            <strong>NestJS{" "}</strong>by Jornada do Dev - April 2025
                        </p>

                        <p>
                            <strong>Technical Leadership (Tech Lead){" "}</strong>by Sérgio Fiorotti in Rocketseat - February 2025
                        </p>

                        <p>
                            <strong>How to build a Micro SasS with Next.js, Firebase, Google Analytics and Stripe{" "}</strong>by Rocketseat - January 2025
                        </p>

                        <p>
                            <strong>Build a web API with Node.js and Express{" "}</strong>by Microsoft Ignite - November 2024
                        </p>

                        <p>
                            <strong>NLW Journey - GO{" "}</strong>by Rocketseat - July 2024
                        </p>

                        <p>
                            <strong>NLW Journey - NodeJS{" "}</strong>by Rocketseat - July 2024
                        </p>

                        <p>
                            <strong>NLW Journey - Java{" "}</strong>by Rocketseat - July 2024
                        </p>

                        <p>
                            <strong>NLW Journey - Python{" "}</strong>by Rocketseat - July 2024
                        </p>

                        <p>
                            <strong>NLW Journey - React (Tailwind, React){" "}</strong>by Rocketseat - July 2024
                        </p>

                        <p>
                            <strong>Web Development with Python: Python, Django, Pytest & OOP{" "}</strong>by IBM SkillsBuild - June 2024
                        </p>

                        <p>
                            <strong>Firebase: Realtime Database, Cloud, Auth and Security{" "}</strong>by Gabriel Barreto - May 2024
                        </p>

                        <p>
                            <strong>NLW Unite (Node, Typescript, Fastify, Prisma, Zod & Swagger){" "}</strong>by Rocketseat - April 2024
                        </p>

                        <p>
                            <strong>NLW Unite (React, Vite, TypeScript, Styled Components, Unicons & Dayjs){" "}</strong>by Rocketseat - April 2024
                        </p>

                        <p>
                            <strong>NLW Expert (Node, TS, Fastify, Prisma, Docker, PostgreSQL, Redis, Zod & WebSocket){" "}</strong>by Rocketseat - February 2024
                        </p>

                        <p>
                            <strong>NLW Expert (React, TS, Vite, TailwindCSS, Web Storage & Web Speech){" "}</strong>by Rocketseat - February 2024
                        </p>

                        <p>
                            <strong>1st Kyorugui Arbitration Seminar{" "}</strong>by Nova FETESP - February 2024
                        </p>

                        <p>
                            <strong>4th Kombat Taekwondo Referee Siminar{" "}</strong>by Kombat Taekwondo - January 2024
                        </p>

                        <p>
                            <strong>TDD – Guided Software Development Tests{" "}</strong>by Instituto Tecnológico de Aeronáutica (Coursera Free) - December 2023
                        </p>

                        <p>
                            <strong>Complete Dialogflow - Master the Creation of Virtual Assistants{" "}</strong>by Universidade Global, Rogerio Guimaraes - November 2023
                        </p>

                        <p>
                            <strong>Modern Web with Projects (JS/Typescript/React/Node){" "}</strong>by COD3R - August 2022
                        </p>

                        <p>
                            <strong>Workshop Figma{" "}</strong>by Design Culture - April 2022
                        </p>

                        <p>
                            <strong>Introduction and Complete Course in Computer Science{" "}</strong>by Harvard - March 2022
                        </p>

                        <p>
                            <strong>Participation, Proud Tech{" "}</strong>by Softplan - March 2022
                        </p>

                        <p>
                            <strong>Agile Days{" "}</strong>by Instituto de Gestão e Tecnologia da Informação (IGTI) - November 2021
                        </p>

                        <p>
                            <strong>Participation, Masterclass Github Actions{" "}</strong>by Azure na Prática - January 2021
                        </p>

                        <p>
                            <strong>Participation, Hackathon (Third Place){" "}</strong>by Shawee, AMBEV Hackathon - December 2020
                        </p>

                        <p>
                            <strong>Linux Terminal{" "}</strong>by Profº Diego Mariano - October 2020
                        </p>

                        <p>
                            <strong>Introduction to the Linux Operation System{" "}</strong>by Profº Diego Mariano - October 2020
                        </p>

                        <p>
                            <strong>Introduction to MySQL Database{" "}</strong>by Profº Diego Mariano - October 2020
                        </p>

                        <p>
                            <strong>Creating Dynamic Web Pages with PHP{" "}</strong>by Profº Diego Mariano - October 2020
                        </p>

                        <p>
                            <strong>Facebook Blueprint - Basic to Advanced{" "}</strong>by Faculdade do Marketing Digital - July 2020
                        </p>

                        <p>
                            <strong>11th Edition - Omnistack Week{" "}</strong>by Rocketseat - March 2020
                        </p>

                        <p>
                            <strong>Introduction to Git and Version Control{" "}</strong>by Digital Innovation One - February 2020
                        </p>

                        <p>
                            <strong>Getting Started with Git and Your Commands{" "}</strong>by Digital Innovation One - February 2020
                        </p>

                        <p>
                            <strong>Arctic Code Vault Contributor{" "}</strong>by Github Archive Program - February 2020
                        </p>

                        <p>
                            <strong>Essential Programming Logic{" "}</strong>by Digital Innovation One - February 2020
                        </p>

                        <p>
                            <strong>Internet programming with HTML5 and CSS3{" "}</strong>by Digital Innovation One - February 2020
                        </p>

                        <p>
                            <strong>Web Programming for Scientific Dissemination{" "}</strong>by Profº Diego Mariano - January 2020
                        </p>

                        <p>
                            <strong>Web Design with PHP, HTML, CSS and JS{" "}</strong>by Udemy - January 2020
                        </p>

                        <p>
                            <strong>Illustration and Graphic Design for the Web{" "}</strong>by Bradesco - May 2017
                        </p>

                        <p>
                            <strong>Web Design and Graphic Design{" "}</strong>by MacPoli Cursos - December 2014
                        </p>
                    </div>

                    <hr />

                    <div className="projects" id="projects">
                        <h3>Projects</h3>
                        <p><strong>game-sintoniasp</strong> - <Link href="https://sintoniasp.vercel.app/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>A FiveM server, city-themed around São Paulo using vRP, MySQL, CodeWalker, OpenIV, Javascript, Discord.js, etc.</p>

                        <p><strong>website-steamfolio</strong> - <Link href="https://github.com/Yagasaki7K/website-steamfolio" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://steamfolio.vercel.app/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>Building a customizable portfolio interface in the style of Steam. Using Bun, React and Vite.</p>

                        <p><strong>website-onigirihardcore</strong> - <Link href="https://github.com/Yagasaki7K/website-onigirihardcore" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://onigirihardcore.vercel.app/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>Onigiri Hardcore is a website about news, games, animes and entertainment</p>

                        <p><strong>app-stream</strong> - <Link href="https://github.com/Yagasaki7K/app-stream" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://thetwitch.vercel.app/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>A player website to watch Twitch.tv without distractions.</p>

                        <p><strong>website-meconta</strong> - <Link href="https://github.com/Yagasaki7K/website-meconta/" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://me-conta.vercel.app/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>MeConta is a financial management app your way, with the possibility of viewing data through graphs.</p>

                        <p><strong>website-essentials</strong> - <Link href="https://github.com/Yagasaki7K/website-essentials" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://webessentials.vercel.app/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>Essentials softwares for your computer</p>

                        <p><strong>website-findyourpet</strong> - <Link href="https://github.com/Yagasaki7K/website-findyourpet" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://findyourpet.vercel.app/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>App to help you rescue, inform and donate your pets with love! 🐶💜🐱</p>

                        <p><strong>feature-notificationpush</strong> - <Link href="https://github.com/Yagasaki7K/feature-notificationpush" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://yagasaki7k.github.io/feature-notificationpush/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>A feature to do a Notification Push without framework or package</p>

                        <p><strong>website-empreguei</strong> - <Link href="https://github.com/Yagasaki7K/website-empreguei" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://empreguei.vercel.app/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>A website to find and send jobs without ads and distractions</p>

                        <p><strong>website-newsletterchamps (deprecated)</strong> - <Link href="https://github.com/Yagasaki7K/website-newsletterchamps" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://newsletterchamps.vercel.app/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>A page on website to display a Newsletter from Filipe Deschamps</p>

                        <p><strong>app-pomodoro</strong> - <Link href="https://github.com/Yagasaki7K/app-pomodoro" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://appomodoro.vercel.app/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>An intuitive timer built with React, following the Pomodoro technique</p>

                        <p><strong>app-speechtotext</strong> - <Link href="https://github.com/Yagasaki7K/app-speechtotext" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://app-speech-to-text.vercel.app/" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>Accurately convert speech into text with an API powered by the best of Google’s AI research and technology.</p>

                        <p><strong>app-notemarkdown</strong> - <Link href="https://github.com/Yagasaki7K/app-notemarkdown" target="_blank" rel='noreferrer'>Source Code</Link> - <Link href="https://notemarkdown.vercel.app" target="_blank" rel='noreferrer'>Demo</Link></p>
                        <p>Easy way to edit and preview a markdown without save and with fast refresh.</p>
                    </div>
                </div>
            </HomeArticlesDetails>
            <Copyright />
        </>
    )
}

export default about
