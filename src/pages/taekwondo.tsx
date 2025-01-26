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

                <div className="tkd poppins">
                    <img
                        src="https://pbs.twimg.com/media/FtcDfyDacAIAzpg?format=jpg&name=large"
                        alt="Campinas Fighters"
                    />
                    <h1>1st Dan (Black Belt) at Campinas Fighters</h1>

                    <p>
                        Hi, my name is Anderson Marlon, AKA Yagasaki. <br /> In this section I'll
                        talk about my story, experience in Taekwondo, my achievements and my
                        goals together with <strong>Campinas Fighters Team</strong>.
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
                        I'm currently an athlete at Campinas Fighters, 1st Dan fighting in the
                        63kg and 68kgs category. My intention is to conquer the São Paulo Team and Brazilian Team
                        and continue with the conquests and victories that await me.
                    </p>


                    <div className="positions">
                        <h3>Achievements & Goals:</h3>
                        <h4>Campeonato Paulista de Taekwondo - Third Stage</h4>
                        <p>
                            <strong>🥈 Second Place</strong> | <strong>Campinas Fighters</strong>{" "}
                            | <i>2024</i>
                        </p>

                        <h4>Arnold Sports - Double Match</h4>
                        <p>
                            <strong>🥉 Third Place</strong> | <strong>Campinas Fighters</strong>{" "}
                            | <i>2024</i>
                        </p>

                        <h4>Campinas Fighters</h4>
                        <p>
                            <strong>📝 Certificate of Attendance for 1st Kyorugui Arbitration Seminar by Nova FETESP</strong> | <i>2024</i>
                        </p>

                        <h4>Campinas Fighters</h4>
                        <p>
                            <strong>📝 Referee Certificate by Kombat Taekwondo</strong> | <i>2024</i>
                        </p>

                        <h4>Campinas Fighters</h4>
                        <p>
                            <strong>📝 Coach Certificate by Paulista Taekwondo Federation (FTP)</strong> | <i>2024</i>
                        </p>

                        <h4>Campinas Fighters</h4>
                        <p>
                            <strong>🥋 Black Belt (1st Dan)</strong> | <i>2023</i> - <Link href="https://yagasaki.dev/article/taekwondo-black-belt">Link to Course Completion (PT-BR)</Link>
                        </p>

                        <h4>São Roque International</h4>
                        <p>
                            <strong>🎖️ First Place</strong> | <strong>Campinas Fighters</strong>{" "}
                            | <i>2023</i>
                        </p>

                        <h4>Copa América de Taekwondo</h4>
                        <p>
                            <strong>🥈 Second Place</strong> | <strong>Campinas Fighters</strong>{" "}
                            | <i>2023</i>
                        </p>

                        <h4>Campinas Fighters</h4>
                        <p>
                            <strong>🥋 Red w/ Black Belt (1st Kup)</strong> | <i>2023</i>
                        </p>

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

                            <strong>🥋 Red Belt (2nd Kup)</strong> | <i>2023</i> <br />
                            <strong>🥋 Blue w/ Red Belt (3th Kup)</strong> | <i>2022</i>
                        </p>

                        <h4>Teacher Anderson Neneco</h4>
                        <p>
                            <strong>🥋 Blue Belt (4th Kup)</strong> | <i>2016</i>
                        </p>

                        <h4>Master Márcio Eugênio</h4>
                        <p>
                            <strong>🥋 Green Belt (6th Kup)</strong> | <i>2015</i>
                        </p>

                        <h4>Badboy Campinas - OTC</h4>
                        <p>
                            <strong>🥈 Second Place</strong> | <strong>Márcio Eugênio</strong> |{" "}
                            <i>2014</i>
                        </p>

                        <h4>Master Márcio Eugênio</h4>
                        <p>
                            <strong>🥋 Yellow Belt (8th Kup)</strong> | <i>2014</i> <br />
                            <strong>🥋 White Belt (10th Kup)</strong> | <i>2014</i>
                        </p>
                    </div>
                </div>
            </HomeArticlesDetails>
        </>
    )
}

export default about
