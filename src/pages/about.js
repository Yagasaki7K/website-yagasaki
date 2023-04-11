import React from "react";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import style from "../css/content.scss";

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
          content={"Software Developer @ Stone Co."}
        />
        <meta
          name="twitter:image"
          content={"https://i.imgur.com/1ypU0Xs.png"}
        />
      </Head>

      <div className="navigation">
        <div className="navigation_left">
          <Link href="/">
            <img src="https://github.com/Yagasaki7K.png" alt="Yagasaki7K" />
            <h2>Yagasaki/Dev</h2>
          </Link>
        </div>
        <div className="navigation_right">
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="https://github.com/Yagasaki7K">GitHub</Link>
          <Link href="https://twitter.com/Yagasaki7K">Twitter</Link>
          <Link href="/taekwondo">TKD</Link>
        </div>
      </div>

      <div className="navigation_mobile">
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="https://github.com/Yagasaki7K">GitHub</Link>
        <Link href="https://twitter.com/Yagasaki7K">Twitter</Link>
      </div>

      <div className="content-about">
        <h2>I'm Yagasaki,</h2>
        <h2>
          Frontend / Full Stack Software Developer (Typescript, React.js,
          Node.js) at Stone Co. from Campinas, Brazil
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
            <strong>Stone Co.</strong> | <i>October 2022 — Currently</i>
          </p>
          <p>
            Working in A.I. and e-commerce applications. Using: React, NextJS,
            TypeScript, NodeJS, GraphQL, Hasura, UI/UX, Storybook, Figma,
            ChakraUI, CI/CD, Docusaurus, Unit and Integration Tests, AWS Cloud
            and Postgress
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
            Facebook Ads and using Digital Ocean to DevOps our system. <br />
            <br />
            Project available at{" "}
            <Link href="https://credits.com.br/">https://credits.com.br/</Link>
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
            to Laravel
          </p>
        </div>

        <h3>Certificates:</h3>

        <div className="certificates">
          <p>
            <strong>
              Modern Web with Javascript + Projects (JS/Typescript/React/Node){" "}
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
            <strong>Participation, Agile Days </strong>
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

      <div className="footer">
        <div className="footer_left">
          <strong>Copyright</strong>
          <p>
            © {new Date().getFullYear()}{" "}
            <Link href="/">Anderson "Yagasaki" Marlon</Link>
          </p>
        </div>
        <div className="footer_center">
          <strong>Contact</strong>
          <Link href="mailto:anderson18.marlon@gmail.com">Email</Link>
          <Link href="https://linkedin.com/in/andersonmarlon">Linkedin</Link>
          <Link href="https://twitter.com/Yagasaki7K">Twitter</Link>
          <Link href="https://api.whatsapp.com/send?phone=5519998018174">
            Whatsapp
          </Link>
        </div>
        <div className="footer_right">
          <strong>Check my work</strong>
          <Link href="/blog">Blog</Link>
          <Link href="https://github.com/Yagasaki7K">GitHub</Link>
          <Link href="https://behance.net/yagasaki">Behance</Link>
        </div>
      </div>
    </div>
  );
}
