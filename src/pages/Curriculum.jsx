import CurriculumDetails from '../components/CurriculumDetails'

function Curriculum() {

    return (
        <CurriculumDetails>
            <div className="LeftContent">
                <a href="/"><img className="firstImage" src="https://github.com/Yagasaki7k.png" /></a>

                <div className="ContentText">
                    <h4>Anderson Marlon // 葛城 矢ヶ崎</h4>
                    <ul>
                        <li>Front-end Software Developer</li>
                        <li>Systems Development Analyst</li>
                    </ul>

                    <p>Developer with experiences in Javascript, React, NextJS, Typescript, Styled Components, SASS, Firebase, Sanity.io, GraphQL (in development) and Docker</p>
                </div>

                <footer>
                    <a href="https://twitter.com/Yagasaki7K" target="_blank">
                        <i className="uil uil-twitter"></i>
                        <p>Twitter</p>
                        <i className="uil uil-external-link-alt"></i>
                    </a>

                    <a href="https://github.com/Yagasaki7K" target="_blank">
                        <i className="uil uil-github"></i>
                        <p>GitHub</p>
                        <i className="uil uil-external-link-alt"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/andersonmarlon/" target="_blank">
                        <i className="uil uil-linkedin"></i>
                        <p>Linkedin</p>
                        <i className="uil uil-external-link-alt"></i>
                    </a>

                </footer>
            </div>

            <div className="RightContent">
                {/* Github Projects */}
                <div className="content">
                <h1 className="title">Personal Affirmation</h1>
                    <p className="description">Experienced Software Development Analyst and Front-end Developer with experience building scalable systems and applications in the Financial Technology (Fintech), Affiliate System, Brewery, Healthcare, Journalism, Sustainability, Sales/Entrepreneurship, Podcasts and Sports Electronic.</p>
                </div>

                <div className="content">
                <h1 className="title">Profissional Experiences</h1>
                    <strong>SYSTEMS DEVELOPMENT ANALYST</strong> <br/> at Cenário Capital
                    <p>April 2021 — September 2021</p>
                    <i>Letter of Recommendation by Alexandre Carvalho Rezende (CEO) can be requested</i>

                    <ul>
                        <li>New features and homepage development</li>
                        <li>Development of the analysis questionnaire system for the customer using NextJS and Typescript</li>
                        <li>Push notification development using Javascript via Google Developers</li>
                        <li>Scrum / Kabam during development and project completion</li>
                        <li>Installation and repair in Google Analytics / Facebook Ads in the monitoring of the marketing team</li>
                        <li>DevOps in system installation, building and caching</li>
                        <li>Project available on <a href="">https://credits.com.br/</a></li>
                    </ul>
                </div>

                <div className="content">
                    <hr />
                    <strong>JUNIOR MARKETING ASSIST / DEVELOPMENT FRONT END </strong> <br/>
                    at Marry Perry Paris
                    <p>July 2020 – October 2020</p>

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
                    <strong>DEVELOPMENT FRONT END</strong> <br/>
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
                    <h1 className="title">Service Provision</h1>
                    <strong>DEVELOPER FRONT-END</strong> <br/> at 2BeBot
                    <p>May 2021 — Until Today</p>

                    <ul>
                        <li>New features and portal development</li>
                        <li>Feature change and UX improvement</li>
                        <li>Search bar and filter data coming from API</li>
                        <li>HTML to PDF Conversion</li>
                    </ul>
                </div>

                <div className="content">
                    <hr/>
                    <strong>DEVELOPER FRONT-END</strong> <br/> at ABREF
                    <p>April 2020 — March 2020</p>

                    <ul>
                        <li>New features and homepage development</li>
                        <li>Installation and repair in Google Analytics / Facebook Ads in the monitoring of the marketing team</li>
                        <li>DevOps in system installation, building and caching</li>
                    </ul>
                </div>

                <div className="content">
                <hr />
                    <strong>DEVELOPER FRONT-END</strong> <br/> at YouConnectStart
                    <p>April 2020 — March 2020</p>

                    <ul>
                        <li>New features and homepage development</li>
                        <li>Installation and repair in Google Analytics / Facebook Ads in the monitoring of the marketing team</li>
                        <li>DevOps in system installation, building and caching</li>
                    </ul>
                </div>

                <div className="content">
                    <h1 className="title">Certificates</h1>
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
                        by Institute of Management and Information Technology - November 2021
                    </p>
                    <p>
                        <strong>Participation, Masterclass Github Actions </strong>
                        by Azure in Practice - January 2021
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
