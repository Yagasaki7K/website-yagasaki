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
        <img
          src="https://pbs.twimg.com/media/FtcDfyDacAIAzpg?format=jpg&name=large"
          alt="Campinas Fighters"
        />
        <h2>2rd Kup Belt at Campinas Fighters</h2>

        <p>
          Hi, my name is Anderson Marlon, AKA Yagasaki. In this section I'll
          talk about my story, experience in Taekwondo, my achievements and my
          goals together with <strong>Campinas Fighters Team</strong>..
        </p>

        <h3>Story</h3>
        <p>
          My story start in 2014, when I was 17 years old, I was looking for a
          sport to practice, my friends told me about Boxing, Muay Thai, but
          when I discovered Taekwondo it was my first love.
        </p>

        <p>
          I started practicing Taekwondo together with{" "}
          <strong>Master Márcio Eugênio</strong>, with him I became the 6th Kup,
          after him, Márcio returns to his city (Indaiatuba), and it was up to
          me to find another teacher to teach me more and more. With Anderson
          Neneco, he reached the 4th Kup, but I didn't fight in competition.
        </p>

        <p>
          It was only in 2020 that I found Campinas Fighters with ~ at the time
          Professor ~ and currently <strong>Master Sérgio Pacheco</strong> and{" "}
          <strong>Master Alberto Iha</strong> who accepted me with open arms and
          made me their athlete and their student, with the due authorization of
          Master Márcio Eugênio.
        </p>

        <p>
          Right from the start, I was champion of the America Cup and then
          champion of the Vale League, after that, I was third place in the
          Paulista Championship, challenging myself in the 68kgs competition.
        </p>

        <p>
          I'm currently an athlete at Campinas Fighters, 3rd Kup fighting in the
          63kg category. My intention is to reach 58kgs until I conquer the
          black belt and continue with the conquests and victories that await
          me.
        </p>

        <h3>Achievements & Goals:</h3>
        <div className="positions">
          <h4>Campeonato Paulista de Taekwondo - Third Stage</h4>
          <p>
            <strong>🥈 Second Place</strong> |{" "}
            <strong>Campinas Fighters</strong> | <i>2023</i>
          </p>

          <h4>Campeonato Paulista de Taekwondo - Second Stage</h4>
          <p>
            <strong>🎖️ First Place</strong> | <strong>Campinas Fighters</strong>{" "}
            | <i>2023</i>
          </p>

          <h4>Campeonato Paulista de Taekwondo - First Stage</h4>
          <p>
            <strong>🥉 Third Place</strong> | <strong>Campinas Fighters</strong>{" "}
            | <i>2023</i>
          </p>

          <h4>Festival Liga Vale</h4>
          <p>
            <strong>🏅 First Place</strong> | <strong>Campinas Fighters</strong>{" "}
            | <i>2022</i>
          </p>

          <h4>Copa América de Taekwondo</h4>
          <p>
            <strong>🏅 First Place</strong> | <strong>Campinas Fighters</strong>{" "}
            | <i>2022</i>
          </p>

          <h4>Campinas Fighters</h4>
          <p>
            {/* <strong>Black Belt (1th Dan)</strong> | <i>2023</i> <br />
            <strong>🥋 Red w/ Black Belt (1st Kup)</strong> | <i>2023</i> <br /> */}
            <strong>🥋 Red Belt (2nd Kup)</strong> | <i>2023</i> <br />
            <strong>🥋 Blue w/ Red Belt (3th Kup)</strong> | <i>2022</i> <br />
          </p>

          <h4>Teacher Anderson Neneco</h4>
          <p>
            <strong>🥋 Blue Belt (4th Kup)</strong> | <i>2016</i>
          </p>

          <h4>Master Márcio Eugênio</h4>
          <p>
            <strong>🥋 Green Belt (6th Kup)</strong> | <i>2015</i> <br />
          </p>

          <h4>Badboy Campinas - OTC</h4>
          <p>
            <strong>🥈 Second Place</strong> | <strong>Márcio Eugênio</strong> |{" "}
            <i>2014</i>
          </p>

          <h4>Master Márcio Eugênio</h4>
          <p>
            <strong>🥋 Green Belt (6th Kup)</strong> | <i>2015</i> <br />
            <strong>🥋 Yellow Belt (8th Kup)</strong> | <i>2014</i> <br />
            <strong>🥋 White Belt (10th Kup)</strong> | <i>2014</i> <br />
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
