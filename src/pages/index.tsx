import "dayjs/locale/pt-br";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import HomeDetails from "@/components/HomeDetails";
import Footer from "@/components/Footer";
import StackIcon from "@/components/StackIcon";
import { ArrowRight, ArrowUpRight, Calendar, CircleCheckBig, Clock, Globe, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
    const subTitle = ['Software Engineer', 'Curious Builder', 'Fullstack Developer', 'Net Runner', 'Software Tinkerer']
    const statusSpotify = ['Now Playing', 'Last Played']

    const svgTwitter = (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>)

    const svgGithub = (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>)

    const svgSpotify = (
        <svg viewBox="0 0 168 168"><path fill="#1DB954" d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"></path></svg>
    );

    const [spotify, setSpotify] = useState({
        isPlaying: false,
        name: "",
        artist: "",
        image: "",
        url: "",
    });

    const spotify1 = "a19deafb087d482"
    const spotify2 = "5a06abaa9e268f30c"
    const spotifysec1 = "e39514042122434"
    const spotifysec2 = "e81c34057ea313d10"

    useEffect(() => {
        const clientId = spotify1 + spotify2;
        const clientSecret = spotifysec1 + spotifysec2;
        const refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

        if (!clientId || !clientSecret || !refreshToken) return;

        const auth = btoa(`${clientId}:${clientSecret}`);

        const fetchSpotify = async () => {
            try {
                const tokenResponse = await fetch(
                    "https://accounts.spotify.com/api/token",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Basic ${auth}`,
                            "Content-Type":
                                "application/x-www-form-urlencoded",
                        },
                        body: new URLSearchParams({
                            grant_type: "refresh_token",
                            refresh_token: refreshToken,
                        }),
                    }
                );

                const tokenData = await tokenResponse.json();

                if (!tokenData.access_token) return;

                const currentResponse = await fetch(
                    "https://api.spotify.com/v1/me/player/currently-playing",
                    {
                        headers: {
                            Authorization: `Bearer ${tokenData.access_token}`,
                        },
                    }
                );

                if (currentResponse.status === 204) return;

                const current = await currentResponse.json();

                if (!current?.item) return;

                setSpotify({
                    isPlaying: current.is_playing,
                    name: current.item.name,
                    artist:
                        current.item.artists
                            ?.map((artist: { name: string }) => artist.name)
                            .join(", ") || "",
                    image:
                        current.item.album?.images?.[0]?.url || "",
                    url:
                        current.item.external_urls?.spotify || "",
                });
            } catch (error) {
                console.error("Spotify error:", error);
            }
        };

        fetchSpotify();
    }, []);

    const [contactName, setContactName] = useState("");
    const [contactMail, setContactMail] = useState("");
    const [message, setMessage] = useState("");

    const number = "1509989367987306546"
    const code = "fVHMnyn-E-Hzbl_qyJ29oAZL3M_-XtVqOEQLLJwJcFWTkPyYGjCR9Ghp-naQgcWoYNma"

    const postDiscordPayload = async (body: Record<string, unknown>): Promise<void> => {
        const response = await fetch(`https://discord.com/api/webhooks/${number}/${code}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            keepalive: true
        });

        if (!response.ok) {
            throw new Error(`Webhook falhou com status ${response.status}`);
        }
    };

    const sendCartAbandonmentLog = async (): Promise<void> => {
        await postDiscordPayload({
            embeds: [
                {
                    title: `entrou em contato!`,
                    color: 0x9b59b6,
                    description: [
                        `**Contato:** ${contactName}`,
                        `**Email:** ${contactMail}`,
                        `**Mensagem:** ${message}`,
                    ].join('\n')
                }
            ]
        });
    };

    return (
        <>
            <Head>
                <title>Anderson Marlon</title>
                <link rel="icon" type="image/png" href="https://github.com/yagasaki7k.png" />
            </Head>

            <Navigation />

            <HomeDetails>
                <div className="header">
                    <div className="img">
                        <img src="https://github.com/Yagasaki7K.png" alt="Anderson Marlon" />
                    </div>
                    <div className="content">
                        <h1>Anderson Marlon</h1>
                        <p>{subTitle[0]}</p>
                    </div>
                </div>

                <div className="container">
                    <div className="info">
                        <p className="title">
                            Location
                        </p>
                        <p className="content">
                            <MapPin />
                            São Paulo, Brazil
                        </p>
                    </div>
                    <div className="info">
                        <p className="title">
                            Email
                        </p>
                        <p className="content mail" onClick={() => window.open("mailto:yagasakiwanderlust@proton.me", "_blank")}>
                            <Mail />
                            yagasakiwanderlust@proton.me
                        </p>
                    </div>
                </div>

                <div className="about">
                    <p className="text">I build full-stack web products end-to-end, obsessing over small details that make software feel right to use. Currently working with <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</Link>, <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</Link>, <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</Link>, and <Link href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">Styled Components</Link>.</p>

                    <p className="spotify">
                        {svgSpotify}

                        {spotify.isPlaying ? statusSpotify[0] : statusSpotify[1]} — <Link href={spotify.url} target="_blank" rel="noopener noreferrer">{spotify.artist}  ·  {spotify.name}</Link>
                    </p>

                    <div className="social">
                        <Link href="https://twitter.com/Yagasaki7K" target="_blank" rel="noopener noreferrer">
                            {svgTwitter}
                        </Link>

                        <Link href="https://github.com/Yagasaki7K" target="_blank" rel="noopener noreferrer">
                            {svgGithub}
                        </Link>

                        <Link href="https://yagasaki.vercel.app" rel="noopener noreferrer">
                            <Globe />
                        </Link>

                        <Link href="mailto:yagasakiwanderlust@proton.me" target="_blank" rel="noopener noreferrer">
                            <Mail />
                        </Link>
                    </div>
                </div>

                <div className="tech">
                    <h4>Tech Stack</h4>

                    <div className="stacks">
                        <StackIcon src="/stack/react.svg" alt="React" />
                        <StackIcon src="/stack/next-light.png" alt="Next.js" />
                        <StackIcon src="/stack/vite.png" alt="Vite" />
                        <StackIcon src="/stack/typescript.svg" alt="TypeScript" />
                        <StackIcon src="/stack/js.svg" alt="JavaScript" />
                        <StackIcon src="/stack/python.svg" alt="Python" />
                        <StackIcon src="/stack/go.png" alt="Go" />
                        <StackIcon src="/stack/nodejs.svg" alt="Node.js" />
                        <StackIcon src="/stack/bun.svg" alt="Bun" />
                        <StackIcon src="/stack/firebase.png" alt="Firebase" />
                        <StackIcon src="/stack/express.png" alt="Express" />
                        <StackIcon src="/stack/git.svg" alt="Git" />
                        <StackIcon src="/stack/github.png" alt="Git" />
                        <StackIcon src="/stack/postman.webp" alt="Postman" />
                    </div>

                    <div className="stacks">
                        <StackIcon src="/stack/mongodb.svg" alt="MongoDB" />
                        <StackIcon src="/stack/supabase.webp" alt="Supabase" />
                        <StackIcon src="/stack/mysql.svg" alt="MySQL" />
                        <StackIcon src="/stack/socket_io.svg" alt="Socket.IO" />
                        <StackIcon src="/stack/cursor-ai.png" alt="Cursor AI" />
                        <StackIcon src="/stack/chatgpt.png" alt="ChatGPT" />
                    </div>
                </div>

                <div className="featured">
                    <h4>Featured Projects</h4>

                    <div className="cards">
                        <div className="card">
                            <img src="/projects/meuboi.png" alt="Steamfolio" />

                            <div className="title">
                                <h1>MeuBoi</h1>

                                <div className="share">
                                    <Link href="https://meuboi.vercel.app" target="_blank" rel="noopener noreferrer">
                                        <Globe />
                                    </Link>
                                </div>
                            </div>

                            <div className="description">
                                <p>A cattle management platform that helps farmers track livestock, financial performance, sales, and herd profitability.</p>
                            </div>

                            <div className="stacks">
                                <StackIcon src="/stack/typescript.svg" alt="TypeScript" />
                                <StackIcon src="/stack/bun.svg" alt="Bun" />
                                <StackIcon src="/stack/go.png" alt="Go Lang" />
                                <StackIcon src="/stack/next-light.png" alt="Next.js" />
                                <StackIcon src="/stack/supabase.webp" alt="Supabase" />
                            </div>
                        </div>

                        <div className="card">
                            <img src="/projects/steamfolio.png" alt="Steamfolio" />

                            <div className="title">
                                <h1>Steamfolio</h1>

                                <div className="share">
                                    <Link href="https://github.com/yagasaki7k/website-steamfolio" target="_blank" rel="noopener noreferrer">
                                        {svgGithub}
                                    </Link>
                                    <Link href="https://steamfolio.vercel.app" target="_blank" rel="noopener noreferrer">
                                        <Globe />
                                    </Link>
                                </div>
                            </div>

                            <div className="description">
                                <p>Building a customizable developer portfolio interface in the style of Steam.</p>
                            </div>

                            <div className="stacks">
                                <StackIcon src="/stack/typescript.svg" alt="TypeScript" />
                                <StackIcon src="/stack/vite.png" alt="Vite" />
                                <StackIcon src="/stack/github.png" alt="GitHub" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="experience">
                    <h4>Experience</h4>

                    <div className="job">
                        <div className="content">
                            <div className="title">
                                <div className="role">
                                    <div className="circle">&nbsp;</div>
                                    <h1>MeuBoi @ Software Engineer II</h1>
                                    <p>Dec 2025 - Mar 2026</p>
                                </div>
                                <p>Campinas - SP, Full-Time</p>
                            </div>
                            <div className="description">
                                <p>
                                    A cattle management platform that helps farmers track livestock, financial performance, sales, and herd profitability.
                                </p>
                                <ul>
                                    <li>
                                        I developed a complete livestock management platform (MeuBoi) from scratch using Go (formerly Bun.js) for a
                                        high-performance backend and Next.js for a responsive frontend, handling complex business logic and financial statements.
                                    </li>
                                    <li>
                                        I implemented real-time analytics dashboards and PWA capabilities, enabling offline access and improving data
                                        accessibility for users in areas with limited connectivity.
                                    </li>
                                    <li>
                                        Authored comprehensive technical documentation for system architecture and APIs, ensuring scalability and simplifying
                                        future maintenance for the development team using Swagger and Docusaurus.
                                    </li>
                                    <li>
                                        Managed the development lifecycle using Scrum methodologies and GitHub Projects, improving team collaboration and ensuring
                                        timely delivery of features.
                                    </li>
                                </ul>
                            </div>

                            <div className="stacks">
                                <StackIcon src="/stack/typescript.svg" alt="TypeScript" />
                                <StackIcon src="/stack/react.svg" alt="React" />
                                <StackIcon src="/stack/next-light.png" alt="Next.js" />
                                <StackIcon src="/stack/vite.png" alt="Vite" />
                                <StackIcon src="/stack/python.svg" alt="Python" />
                                <StackIcon src="/stack/swagger.png" alt="Swagger" />
                                <StackIcon src="/stack/discord.jpg" alt="Discord Webhook" />
                            </div>
                        </div>

                        <div className="content">
                            <div className="title">
                                <div className="role">
                                    <div className="circle">&nbsp;</div>
                                    <h1>Astriia @ Software Engineer II</h1>
                                    <p>Sep 2024 - May 2025</p>
                                </div>
                                <p>Remote, Full-Time</p>
                            </div>
                            <div className="description">
                                <p>
                                    Astriia is a tool that uses AI to search for knowledge about astrology and link it to your birth chart, giving you daily tips and predictions.
                                </p>
                                <ul>
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
                                </ul>
                            </div>

                            <div className="stacks">
                                <StackIcon src="/stack/express.png" alt="Express.js" />
                                <StackIcon src="/stack/nodejs.svg" alt="Node.js" />
                                <StackIcon src="/stack/chatgpt.png" alt="OpenAI API" />
                                <StackIcon src="/stack/whatsapp.webp" alt="WhatsApp API" />
                                <StackIcon src="/stack/next-light.png" alt="Next.js" />
                                <StackIcon src="/stack/discord.jpg" alt="Discord Webhook" />
                                <StackIcon src="/stack/stripe.webp" alt="Stripe" />
                                <StackIcon src="/stack/python.svg" alt="Python" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="getTouch">
                    <h4>Let&apos;s Work Together</h4>

                    <div className="cards">
                        <div className="card">
                            <h1>Get in Touch</h1>
                            <p className="subtitle">Choose your preferred method to connect and let&apos;s discuss your project.</p>

                            <div className="option">
                                <Calendar />

                                <div className="description">
                                    <b>Schedule a free call</b>
                                    <p>30-minute strategy session</p>
                                </div>

                                <ArrowUpRight />
                            </div>

                            <div className="option">
                                <Mail />

                                <div className="description">
                                    <b>yagasakiwanderlust@proton.me</b>
                                    <p>Quick inquiries & questions</p>
                                </div>

                                <ArrowUpRight />
                            </div>

                            <div className="option">
                                <Mail />

                                <div className="description">
                                    <b>Connect on X</b>
                                    <p>Follow for updates & insights</p>
                                </div>

                                <ArrowUpRight />
                            </div>

                            <div className="tip">
                                <p className="tips"><Clock /> Replies within 24 hours</p>
                                <p className="tips"><CircleCheckBig /> Open to remote, freelance & full-time</p>
                            </div>
                        </div>

                        <div className="card">
                            <h1>Send a Message</h1>
                            <p className="subtitle">Prefer to write? Fill out the form and I&apos;ll get back to you within 24 hours.</p>

                            <form>
                                <input type="text" placeholder="Full Name" onChange={(e) => setContactName(e.target.value)} />
                                <input type="email" placeholder="Email Address" onChange={(e) => setContactMail(e.target.value)} />
                                <textarea placeholder="Your Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                                <button onClick={() => sendCartAbandonmentLog()}>Send Message <ArrowRight /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </HomeDetails>

            <Footer />
        </>
    );
}
