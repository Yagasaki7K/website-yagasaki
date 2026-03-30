import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const TaekwondoDetails = styled.div`
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
        margin-bottom: 1.5rem;

        @media (max-width: 1024px) {
            font-size: 2rem;
        }

        @media (max-width: 768px) {
            font-size: 1.8rem;
            text-align: center;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
            margin-bottom: 1.25rem;
        }
    }

    .intro {
        margin-bottom: 1.5rem;
        line-height: 1.7;
    }

    .subTitle {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin: 1.25rem 0 0.75rem;
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

    .story {
        margin-bottom: 0.9rem;
        line-height: 1.7;
    }

    .achievementGroup {
        margin-bottom: 1.25rem;

        h3 {
            color: var(--white);
            margin-bottom: 0.4rem;
            font-size: 1rem;
            line-height: 1.5;
        }

        ul {
            margin-left: 1.25rem;
        }

        li {
            margin-bottom: 0.35rem;
            line-height: 1.6;
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

export default function TaekwondoPage() {
    return (
        <>
            <Head>
                <title>Taekwondo - Anderson Marlon</title>
                <link rel="icon" type="image/png" href="/campinasfighters.png" />
            </Head>
            <Navigation />
            <TaekwondoDetails>
                <article>
                    <h1 className="title">1st Dan (Black Belt) at Campinas Fighters</h1>
                    <p className="intro">
                        I am Anderson Marlon (Yagasaki), a Taekwondo athlete from Campinas Fighters Team. This page summarizes my journey in
                        Taekwondo, my technical progression, the championships I competed in, and the goals I continue to pursue in Kyorugui and
                        Poomsae.
                    </p>

                    <section>
                        <h2 className="subTitle">Story</h2>
                        <p className="story">
                            My story started in 2014 at age 17, when I was looking for a sport. Friends suggested Boxing and Muay Thai, but when I
                            discovered Taekwondo I did not want to practice anything else.
                        </p>
                        <p className="story">
                            I started with Master Márcio Eugênio and reached 6th Kup. After that period, I trained with Teacher Anderson Neneco and
                            reached 4th Kup.
                        </p>
                        <p className="story">
                            In 2020, I joined Campinas Fighters, led by Master Sérgio Pacheco and Master Alberto Iha, with continuity and authorization
                            from Master Márcio Eugênio.
                        </p>
                        <p className="story">
                            In my early competitive years, I had important results in Copa América, Liga do Vale and Campeonato Paulista. Today, my
                            focus remains on the current Kyorugui and Poomsae categories, evolving as an athlete while also developing as a referee
                            and coach.
                        </p>
                    </section>

                    <section>
                        <h2 className="subTitle">Achievements &amp; Goals</h2>

                        <div className="achievementGroup">
                            <h3>Campeonato Paulista de Taekwondo - Third Stage</h3>
                            <ul>
                                <li>Second Place | Campinas Fighters | 2024</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Arnold Sports - Double Match</h3>
                            <ul>
                                <li>Third Place | Campinas Fighters | 2024</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Campinas Fighters</h3>
                            <ul>
                                <li>Certificate of Attendance for 1st Kyorugui Arbitration Seminar by Nova FETESP | 2024</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Campinas Fighters</h3>
                            <ul>
                                <li>Referee Certificate by Kombat Taekwondo | 2024</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Campinas Fighters</h3>
                            <ul>
                                <li>Coach Certificate by Paulista Taekwondo Federation (FTP) | 2024</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Campinas Fighters</h3>
                            <ul>
                                <li>
                                    Black Belt (1st Dan) | 2023 -{" "}
                                    <Link href="https://yagasaki.dev/article/taekwondo-black-belt" target="_blank">
                                        See article
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>São Roque International</h3>
                            <ul>
                                <li>First Place | Campinas Fighters | 2023</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Copa América de Taekwondo</h3>
                            <ul>
                                <li>Second Place | Campinas Fighters | 2023</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Campinas Fighters</h3>
                            <ul>
                                <li>Red w/ Black Belt (1st Kup) | 2023</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Campeonato Paulista de Taekwondo - Third Stage</h3>
                            <ul>
                                <li>Second Place | Campinas Fighters | 2023</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Campeonato Paulista de Taekwondo - Second Stage</h3>
                            <ul>
                                <li>First Place | Campinas Fighters | 2023</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Campeonato Paulista de Taekwondo - First Stage</h3>
                            <ul>
                                <li>Third Place | Campinas Fighters | 2023</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Festival Liga Vale</h3>
                            <ul>
                                <li>First Place | Campinas Fighters | 2022</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Copa América de Taekwondo</h3>
                            <ul>
                                <li>First Place | Campinas Fighters | 2022</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Campinas Fighters</h3>
                            <ul>
                                <li>Red Belt (2nd Kup) | 2023</li>
                                <li>Blue w/ Red Belt (3th Kup) | 2022</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Teacher Anderson Neneco</h3>
                            <ul>
                                <li>Blue Belt (4th Kup) | 2016</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Master Márcio Eugênio</h3>
                            <ul>
                                <li>Green Belt (6th Kup) | 2015</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Badboy Campinas - OTC</h3>
                            <ul>
                                <li>Second Place | Márcio Eugênio | 2014</li>
                            </ul>
                        </div>

                        <div className="achievementGroup">
                            <h3>Master Márcio Eugênio</h3>
                            <ul>
                                <li>Yellow Belt (8th Kup) | 2014</li>
                                <li>White Belt (10th Kup) | 2014</li>
                            </ul>
                        </div>
                    </section>
                </article>
            </TaekwondoDetails>
            <Footer />
        </>
    );
}
