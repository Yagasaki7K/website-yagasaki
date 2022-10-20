import Link from 'next/link'
import CurriculumDetails from '/src/components/CurriculumDetails'

function Curriculum() {

    return (
        <CurriculumDetails>
            <div className="LeftContent">
                <a href="/"><img className="firstImage" src="https://github.com/Yagasaki7k.png" /></a>

                <div className="ContentText">
                    <h4>Anderson Marlon // 葛城 矢ヶ崎</h4>
                    <ul>
                        <li>Software Developer @ Stone / Eccaplan / Kalify Inc</li>
                    </ul>

                    <p>Developer with experiences in Javascript, React, NextJS, Typescript, Styled Components, SASS, Firebase, Sanity.io, GraphQL & Docker</p>
                </div>

                <footer>
                    <Link href="https://twitter.com/Yagasaki7K">
                        <a target="_blank" rel="noreferrer">
                            <i className="uil uil-twitter"></i>
                            <p>Twitter</p>
                            <i className="uil uil-external-link-alt"></i>
                        </a>
                    </Link>

                    <Link href="https://github.com/Yagasaki7K">
                        <a target="_blank" rel="noreferrer">
                            <i className="uil uil-github"></i>
                            <p>GitHub</p>
                            <i className="uil uil-external-link-alt"></i>
                        </a>
                    </Link>

                    <Link href="https://www.linkedin.com/in/andersonmarlon/">
                        <a target="_blank" rel="noreferrer">
                            <i className="uil uil-linkedin"></i>
                            <p>Linkedin</p>
                            <i className="uil uil-external-link-alt"></i>
                        </a>
                    </Link>
                </footer>
            </div>

            <div className="RightContent">
                {/* Github Projects */}
                <div className="content">
                    <h1 className="title">Personal Affirmation</h1>
                    <p className="description">Experienced Software Development Analyst and Front-end Developer building scalable systems and applications in the Financial Technology (Fintech), Affiliate System, Brewery, Healthcare, Journalism, Sustainability, Sales/Entrepreneurship, Podcasts and Sports Electronic.</p>

                    <Link href="/curriculo"><a className="curriculum">Click here to see Portuguese Resume</a></Link>
                    {/* <br/><br/>
                    <a href="/src/docs/AndersonMarlonENUS.pdf" className="curriculum" target="_blank">Curriculum's Download (PDF)</a> */}
                </div>

                <div className="content">
                    <h1 className="title">Professional Experiences</h1>
                    <strong>SOFTWARE DEVELOPER</strong> <br /> at Linx/Stone Pagamentos S.A.
                    <p>October 2022 — Currently</p>

                    <p>Working in A.I. and e-commerce applications. Using: React, NextJS, TypeScript, NodeJS, GraphQL, Hasura, UI/UX, Storybook, Figma, ChakraUI, CI/CD, Unit and Integration Tests, AWS Cloud, and Postgress</p>
                </div>

                <div className="content">
                    <strong>SYSTEMS DEVELOPMENT ANALYST</strong> <br /> at Cenário Capital
                    <p>April 2021 — September 2021</p>
                    <i>Letter of Recommendation by Alexandre Carvalho Rezende (CEO) can be requested</i>

                    <p>Cenário Capital https://cenariocapital.com.br/ is a Brazilian company Founded in 2008 with expertise in digital marketing and analytical focus on different types of digital business. We help Brazilians to make the best decisions, with information and digital solutions, through their various brands of the group!</p>

                    <ul>
                        <li>Responsible for the website development and e-mails marketing of the project.</li>
                        <li>New features and homepage development</li>
                        <li>Development of customer review questionnaire system using NextJS and Typescript</li>
                        <li>Push notification development using Javascript via Google Developers</li>
                        <li>Scrum / Kabam during development and project completion</li>
                        <li>Installation and repair of Google Analytics / Facebook Ads in marketing team monitoring</li>
                        <li>DevOps in system installation, building and caching (DigitalOcean).</li>
                        <li>Project available at <Link href="https://credits.com.br/"><a target="_blank" rel="noreferrer">https://credits.com.br/</a></Link></li>
                    </ul>
                </div>

                <div className="content">
                    <hr />
                    <strong>JUNIOR MARKETING ASSISTANT / DEVELOPMENT FRONT END </strong> <br />
                    at Marry Perry Paris
                    <p>July 2020 – October 2020</p>

                    <p>
                        I was responsible for the development of several landing pages for the company, including the main website, how to use each product website and several other segments for customer communication.

                        I was assigned as a Junior Developer during the creation of a system that lasted only two months until the end of the contract, the project would be an affiliate platform for the company that was later discontinued, using MVC Architecture, MySQL and NodeJS – later the project was changed to Laravel
                    </p>

                    <ul>
                        <li>Sales landing page development</li>
                        <li>Website development</li>
                        <li>Landing page on how to use each pharmaceutical product</li>
                        <li>Affiliate platform development using Laravel and MySQL</li>
                        <li>Development of the improved version of the platform using NodeJS and React</li>
                    </ul>
                </div>

                <div className="content">
                    <hr />
                    <strong>DEVELOPMENT FRONT END</strong> <br />
                    at Shawee no Hackathon AMBEV - Flexible and Sustainable Brewery
                    <p>December 2020</p>

                    <ul>
                        <li>Landing page development</li>
                        <li>Presentation of the project in the brewery area</li>
                        <li>Beer raw material replacement solution for an economical and sustainable reactor</li>
                        <li>Third place in the AMBEV event (Hopyeast Team).</li>
                    </ul>
                    <hr />
                </div>

                <div className="content">
                    <h1 className="title">Service Provision {`&`} Personal Projects</h1>
                    <strong>Founder {`&`} CTO</strong> <br /> at Kalify Inc
                    <p>August 2013 — Until Today</p>

                    <ul>
                        <li>New features and homepage development with React, NextJS and Vite</li>
                        <li>Database building with Firebase and Sanity.io</li>
                        <li>Password generator for users with encryption</li>
                        <li>UI creation following Figma wireframe</li>
                        <li>Creating BOTs for Discord</li>
                        <li><s>Encyclopedia for Beginner Developers (4chell)</s></li>
                        <li>Developer community management / Kalify Community</li>
                        <li>Creating events and helping the community</li>
                        <li>Development of the first consumer page of the Filipe Deschamps Newsletter</li>

                        <li>Project available on <Link href="https://kalifyinc.vercel.app/"><a target="_blank" rel="noreferrer">https://kalifyinc.vercel.app/</a></Link></li>

                        <li>Project available on <a href="https://findyourpet.vercel.app/" target="_blank" rel="noreferrer">https://findyourpet.vercel.app/</a></li>

                        <li>Project available on <a href="https://newsletterchamps.vercel.app/" target="_blank" rel="noreferrer">https://newsletterchamps.vercel.app/</a></li>

                        <li>Project available on <a href="https://webessentials.com.br/" target="_blank" rel="noreferrer">https://webessentials.com.br/</a></li>
                    </ul>
                </div>

                <div className="content">
                    <hr />
                    <strong>DEVELOPER FRONT-END</strong> <br /> at Eccaplan
                    <p>September 2022 — Until Today</p>

                    <ul>
                        <li>Resource creation and development of portal/dashboard/landing pages</li>
                        <li>Feature change and UX/UI improvement</li>
                        <li>Search bar and filter data coming from the API</li>
                        <li>Building Eccaplan's blockchain and tradecenter (Carbon Fair)</li>
                    </ul>
                </div>

                <div className="content">
                    <hr />
                    <strong>DEVELOPER FRONT-END</strong> <br /> at 2BEBOT
                    <p>May 2022 — August 2022</p>

                    <ul>
                        <li>New features and portal development</li>
                        <li>Feature change and UX improvement</li>
                        <li>Search bar and filter data coming from API</li>
                        <li>HTML to PDF Conversion</li>
                    </ul>
                </div>

                <div className="content">
                    <hr />
                    <strong>DEVELOPER FRONT-END</strong> <br /> at ABREF
                    <p>March 2020 — May 2020</p>

                    <ul>
                        <li>New features and homepage development</li>
                        <li>Installation and repair in Google Analytics / Facebook Ads in the monitoring of the marketing team</li>
                        <li>DevOps in system installation, building and caching</li>
                    </ul>
                </div>

                <div className="content">
                    <hr />
                    <strong>DEVELOPER FRONT-END</strong> <br /> at YouConnectStart
                    <p>March 2020 — May 2020</p>

                    <ul>
                        <li>New features and homepage development</li>
                        <li>Installation and repair in Google Analytics / Facebook Ads in the monitoring of the marketing team</li>
                        <li>DevOps in system installation, building and caching</li>
                    </ul>
                    <hr />
                </div>

                <div className="content">
                    <h1 className="title">Certificates</h1>
                    <p>
                        <strong>Modern Web with Javascript + Projects (JS/Typescript/React/Node/ESNext) </strong>
                        by COD3R - August 2022
                    </p>
                    <p>
                        <strong>Workshop Figma </strong>
                        by Design Culture - April 2022
                    </p>
                    <p>
                        <strong>Introduction and Complete Course in Computer Science </strong>
                        by Harvard - March 2022
                    </p>
                    <p>
                        <strong>Participation, Proud Tech </strong>
                        by Softplan - March 2022
                    </p>
                    <p>
                        <strong>Participation, Agile Days </strong>
                        by Instituto de Gestão e Tecnologia da Informação (IGTI) - November 2021
                    </p>
                    <p>
                        <strong>Participation, Masterclass Github Actions </strong>
                        by Azure na Prática - January 2021
                    </p>
                    <p>
                        <strong>Participation, Hackathon </strong>
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
                        <strong>Facebook Blueprint from Basic to Advanced </strong>
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
                        <strong>Getting Started with Github and Essential Commands </strong>
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
        </CurriculumDetails>
    )
}

export default Curriculum
