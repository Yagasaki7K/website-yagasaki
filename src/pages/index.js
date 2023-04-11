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

      <div className="content">
        <h2>
          Hello friend, I would love to build something great together, come and{" "}
          <Link href="mailto:anderson18.marlon@gmail.com">say hi</Link>, build
          with me <Link href="https://kalify.vercel.app/">Kalify Inc</Link>{" "}
          projects or find out more <Link href="/about">about me</Link>
        </h2>
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
