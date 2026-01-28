import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const AboutDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 45rem;
    margin: 0 auto;

    .title {
        font-size: 36px;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 2rem;

        @media (max-width: 1024px) {
            font-size: 2rem;
            margin-bottom: 1.75rem;
        }

        @media (max-width: 768px) {
            font-size: 1.8rem;
            text-align: center;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }
    }

    li {
        margin-left: 1.25rem;
        margin-top: 0.25rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        line-height: 1.6;

        @media (max-width: 1024px) {
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            margin-left: 1rem;
            font-size: 0.9rem;
        }

        @media (max-width: 480px) {
            margin-left: 0.75rem;
            font-size: 0.85rem;
        }
    }

    .subTitle {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin: 1rem 0;
        color: var(--white);

        @media (max-width: 1024px) {
            font-size: 1.15rem;
            line-height: 1.6rem;
        }

        @media (max-width: 768px) {
            font-size: 1.1rem;
            text-align: center;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }

    s {
        color: var(--gray-risked);
    }

    .titleJob {
        margin: 1.5rem 0 1rem 0;

        @media (max-width: 768px) {
            margin: 1.25rem 0 0.75rem 0;
        }

        @media (max-width: 480px) {
            margin: 1rem 0 0.5rem 0;
        }
    }

    .job {
        margin-bottom: 2rem;
        font-size: 1rem;
        line-height: 1.6;

        @media (max-width: 1024px) {
            margin-bottom: 1.75rem;
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
        }

        @media (max-width: 480px) {
            margin-bottom: 1.25rem;
            font-size: 0.85rem;
        }
    }

    .certificate {
        margin-bottom: 1rem;

        strong {
            color: var(--white);
        }

        @media (max-width: 768px) {
            text-align: center;
        }

        @media (max-width: 480px) {
            margin-bottom: 0.75rem;
        }
    }

    .description {
        margin-top: 1rem;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--gray);

        @media (max-width: 1024px) {
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            font-size: 0.9rem;
            text-align: center;
            line-height: 1.5;
        }

        @media (max-width: 480px) {
            font-size: 0.85rem;
            line-height: 1.45;
        }
    }

    @media (max-width: 1280px) {
        max-width: 42rem;
    }

    @media (max-width: 1024px) {
        max-width: 38rem;
    }

    @media (max-width: 820px) {
        max-width: 32rem;
        padding: 0 1rem;
    }

    @media (max-width: 768px) {
        max-width: 90%;
    }

    @media (max-width: 480px) {
        max-width: 100%;
        padding: 0 1rem;
    }

    @media (max-width: 390px) {
        padding: 0 0.75rem;
    }
`;

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About Me - Anderson Marlon</title>
                <link rel="icon" type="image/png" href="/campinasfighters.png" />
            </Head>
            <Navigation />
            <AboutDetails>
                <article>
                    <h1 className="title">About me</h1>
                    <h1>Software Engineer at @R2A</h1>
                    <p>
                        Experience in Javascript, Typescript, React.js, Next.js, Vite, Sass, Redux, Responsive Design, Firebase, Supabase, Hasura,
                        SQLite, MySQL, PostgreSQL, GraphQL, Jest, Node.js, Express, Fastify, Elysia.js, NestJS, Bun.js, Whatsapp API, Rocketchat,
                        Serverless and Microservices
                    </p>

                    <div>
                        <h2 className="subTitle">Skills and expertise</h2>
                        <p>
                            <strong>Languages:</strong> Javascript / Typescript & Python
                        </p>
                        <p>
                            <strong>Frontend:</strong> React.js (Vite) & Next.js
                        </p>
                        <p>
                            <strong>Backend:</strong> Node.js, Bun.js, Express, Fastify, Elysia.js & Nest.js
                        </p>
                        <p>
                            <strong>Database:</strong> Prisma, Hasura, Firebase, Supabase, MySQL, PostgreSQL & SQLite
                        </p>
                        <p>
                            <strong>Testing:</strong> Node:test, Bun:test, Storybook & Jest
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

                    <div id="career">
                        <h2 className="subTitle">Career</h2>
                        <p>
                            Personal projects or those involving self-development will be listed on{" "}
                            <Link href="https://linkedin.com/in/andersonmarlon" target="_blank">
                                Linkedin
                            </Link>
                            .
                        </p>

                        <h3 className="titleJob">
                            <strong>Software Engineer II</strong> @ R2A Cobrança Pecuária | Dec 2025 - Actually
                        </h3>
                        <li>&nbsp;</li>
                        <p className="description">Using Bun.js, Next.js, Discord Webhook, Python, PWA, Supabase & Docusaurus</p>

                        <h3 className="titleJob">
                            <strong>Software Engineer II</strong> @ Astriia | Sep 2024 - May 2025
                        </h3>
                        <li>
                            Led the development of internal platforms using Node.js and React, successfully reducing the execution time of core
                            internal processes by 35%.
                        </li>
                        <li>
                            Engineered AI-powered solutions integrated with the WhatsApp Business API and OpenAI, doubling the accuracy of
                            personalized customer responses.
                        </li>
                        <li>
                            Implemented a Stripe payment system that boosted annual plan conversion by 28% and developed a feedback system that
                            increased customer satisfaction by 40%.
                        </li>
                        <p className="description">
                            Using Express, Node.js, OpenAI API, WhatsApp API, Facebook Business API, Next.js, Discord Webhook, AstrologyAPI, Stripe
                            and Python
                        </p>

                        <h3 className="titleJob">
                            <strong>Software Engineer II</strong> @ WhatsUpper | Aug 2023 - Dec 2023
                        </h3>
                        <li>
                            Specialized in developing and integrating intelligent automation solutions for the WhatsApp Business API, enhancing
                            customer communication workflows.
                        </li>
                        <li>
                            Built and maintained scalable backend services using Node.js to process high volumes of messages and power interactive
                            chatbot experiences.
                        </li>
                        <li>
                            Collaborated with cross-functional teams to design and implement custom features, focusing on improving user engagement
                            and retention through the WhatsApp channel.
                        </li>
                        <p className="description">Using Rocket.chat, Firebase, Next.js, WhatsApp API, Facebook Business API, Twilio and Firebase</p>

                        <h3 className="titleJob">
                            <strong>Software Engineer II</strong> @ Stone | Oct 2022 - Jul 2023
                        </h3>
                        <li>
                            Optimized DialogFlow routines and integrated them with Rocket.Chat, improving chatbot response speed by over 50% and
                            increasing customer retention.
                        </li>
                        <li>
                            Developed an interactive SPA with jQuery to automate customer routing and enable WhatsApp-based checkouts, cutting down
                            queue times by up to 20%.
                        </li>
                        <li>
                            Authored comprehensive documentation for system architectures and internal processes, ensuring scalability and simplifying
                            future maintenance.
                        </li>
                        <p className="description">
                            Using Rocket.chat, Hasura, Next.js, WhatsApp API, Facebook Business API, Twilio, Firebase, DialogFlow and Google Cloud
                            Plataform
                        </p>

                        <h3 className="titleJob">
                            <strong>Systems Development Analyst I/II</strong> @ Cenário Capital | Oct 2020 - Sep 2021
                        </h3>
                        <li>
                            Developed and maintained critical financial systems, contributing to data analysis and process automation to support
                            investment strategies.
                        </li>
                        <li>
                            Collaborated with analysts and stakeholders to gather requirements and translate them into functional software solutions,
                            improving operational efficiency through web quiz.
                        </li>
                        <li>
                            Progressed from a Junior to a Mid-level role by demonstrating strong technical skills in system design, database
                            management, and backend development.
                        </li>
                        <p className="description">Using jQuery, HTML, CSS, Javascript, React, HTML for Email Marketing and Next.js</p>

                        <h3 className="titleJob">
                            <strong>Front-end Developer I / Jr. Marketing</strong> @ Marry Perry | Feb 2020 - Sep 2020
                        </h3>
                        <li>
                            Developed and enhanced the user interface (UI) of the e-commerce platform, focusing on creating a responsive and intuitive
                            shopping experience.
                        </li>
                        <li>Implemented front-end features and optimizations that contributed to improved user engagement and conversion rates.</li>
                        <li>
                            Assisted the marketing team with technical tasks, including landing page creation, email template coding, tracking
                            analytics and afiliates system.
                        </li>
                        <p className="description">Using HTML, CSS, Javascript, Node.js, Express, MySQL and Python.</p>

                        <h3 className="titleJob">
                            <strong>Soldier</strong> @ Brazilian Army | Mar 2016 - Apr 2017
                        </h3>
                        <li>
                            Developed strong discipline, resilience, and the ability to perform effectively in high-pressure, structured environments.
                        </li>
                        <li>
                            Mastered teamwork and communication skills through collaborative daily operations and mission-critical exercises with a
                            diverse team.
                        </li>
                        <li>
                            Demonstrated a high degree of responsibility and commitment while managing assigned communication equipment and executing
                            duties with precision.
                        </li>
                    </div>

                    <div id="awards">
                        <h2 className="subTitle">Certificates</h2>

                        <p className="certificate">
                            <strong className="text-gray-50">React</strong> by Gustavo Sales in Rocketseat - November 2025
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">React Fundamentals</strong> by Gustavo Sales in Rocketseat - November 2025
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Introduction to automation with n8n</strong> by Enzzo Panarotto in Rocketseat - September
                            2025
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">NestJS</strong> by Jornada do Dev - April 2025
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Technical Leadership (Tech Lead) </strong>
                            by Sérgio Fiorotti in Rocketseat - February 2025
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">How to build a Micro SasS with Next.js, Firebase, Google Analytics and Stripe </strong>
                            by Rocketseat - January 2025
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Build a web API with Node.js and Express </strong>
                            by Microsoft Ignite - November 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">NLW Journey - GO</strong> by Rocketseat - July 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">NLW Journey - NodeJS</strong> by Rocketseat - July 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">NLW Journey - Java</strong> by Rocketseat - July 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">NLW Journey - Python</strong> by Rocketseat - July 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">NLW Journey - React (Tailwind, React) </strong>
                            by Rocketseat - July 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Web Development with Python: Python, Django, Pytest & OOP </strong>
                            by IBM SkillsBuild - June 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Firebase: Realtime Database, Cloud, Auth and Security </strong>
                            by Gabriel Barreto - May 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">NLW Unite (Node, Typescript, Fastify, Prisma, Zod & Swagger) </strong>
                            by Rocketseat - April 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">NLW Unite (React, Vite, TypeScript, Styled Components, Unicons & Dayjs) </strong>
                            by Rocketseat - April 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">
                                NLW Expert (Node, TS, Fastify, Prisma, Docker, PostgreSQL, Redis, Zod & WebSocket){" "}
                            </strong>
                            by Rocketseat - February 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">NLW Expert (React, TS, Vite, TailwindCSS, Web Storage & Web Speech) </strong>
                            by Rocketseat - February 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">1st Kyorugui Arbitration Seminar </strong>
                            by Nova FETESP - February 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">4th Kombat Taekwondo Referee Siminar </strong>
                            by Kombat Taekwondo - January 2024
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">TDD – Guided Software Development Tests </strong>
                            by Instituto Tecnológico de Aeronáutica (Coursera Free) - December 2023
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Complete Dialogflow - Master the Creation of Virtual Assistants </strong>
                            by Universidade Global, Rogerio Guimaraes - November 2023
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Modern Web with Projects (JS/Typescript/React/Node) </strong>
                            by COD3R - August 2022
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Workshop Figma </strong>by Design Culture - April 2022
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Introduction and Complete Course in Computer Science </strong>
                            by Harvard - March 2022
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Participation, Proud Tech </strong>
                            by Softplan - March 2022
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Agile Days </strong>by Instituto de Gestão e Tecnologia da Informação (IGTI) - November
                            2021
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Participation, Masterclass Github Actions </strong>
                            by Azure na Prática - January 2021
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Participation, Hackathon (Third Place) </strong>
                            by Shawee, AMBEV Hackathon - December 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Linux Terminal </strong>by Profº Diego Mariano - October 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Introduction to the Linux Operation System </strong>
                            by Profº Diego Mariano - October 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Introduction to MySQL Database </strong>
                            by Profº Diego Mariano - October 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Creating Dynamic Web Pages with PHP </strong>
                            by Profº Diego Mariano - October 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Facebook Blueprint - Basic to Advanced </strong>
                            by Faculdade do Marketing Digital - July 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">11th Edition - Omnistack Week </strong>
                            by Rocketseat - March 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Introduction to Git and Version Control </strong>
                            by Digital Innovation One - February 2020
                        </p>

                        <p>
                            <strong className="text-gray-50">Getting Started with Git and Your Commands </strong>
                            by Digital Innovation One - February 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Arctic Code Vault Contributor </strong>
                            by Github Archive Program - February 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Essential Programming Logic </strong>
                            by Digital Innovation One - February 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Internet programming with HTML5 and CSS3 </strong>
                            by Digital Innovation One - February 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Web Programming for Scientific Dissemination </strong>
                            by Profº Diego Mariano - January 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Web Design with PHP, HTML, CSS and JS </strong>
                            by Udemy - January 2020
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Illustration and Graphic Design for the Web </strong>
                            by Bradesco - May 2017
                        </p>

                        <p className="certificate">
                            <strong className="text-gray-50">Web Design and Graphic Design </strong>
                            by MacPoli Cursos - December 2014
                        </p>
                    </div>
                </article>
            </AboutDetails>
            <Footer />
        </>
    );
}
