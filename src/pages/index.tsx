import "dayjs/locale/pt-br";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import HomeDetails from "@/components/HomeDetails";
import Footer from "@/components/Footer";
import { Globe, Mail, MapPin, Moon, Sun } from "lucide-react";

type GithubProfile = {
    avatar_url: string;
    login: string;
    followers: number;
    following: number;
    public_repos: number;
};

type Repo = { name: string; html_url: string; stargazers_count: number; language: string | null };
type SpotifyTrack = { isPlaying: boolean; name: string; artist: string; image: string; url: string };

export default function Home() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [github, setGithub] = useState<GithubProfile | null>(null);
    const [repos, setRepos] = useState<Repo[]>([]);
    const [events, setEvents] = useState<any[]>([]);
    const [spotify, setSpotify] = useState<SpotifyTrack | null>(null);

    const svgGithub = (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>);

    useEffect(() => {
        const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
        const selected = savedTheme || "dark";
        setTheme(selected);
        document.documentElement.setAttribute("data-theme", selected);
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("portfolio-theme", next);
        document.documentElement.setAttribute("data-theme", next);
    };

    useEffect(() => {
        const token = process.env.NEXT_PUBLIC_VITE_GITHUB_TOKEN || "";
        const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
        Promise.all([
            fetch("https://api.github.com/users/yagasaki7k", { headers }).then((r) => r.json()),
            fetch("https://api.github.com/users/yagasaki7k/repos?sort=updated&per_page=6", { headers }).then((r) => r.json()),
            fetch("https://api.github.com/users/yagasaki7k/events/public?per_page=100", { headers }).then((r) => r.json()),
        ]).then(([profile, ghRepos, ghEvents]) => {
            setGithub(profile);
            setRepos(Array.isArray(ghRepos) ? ghRepos : []);
            setEvents(Array.isArray(ghEvents) ? ghEvents : []);
        });
    }, []);

    useEffect(() => {
        const clientId = process.env.NEXT_PUBLIC_VITE_SPOTIFY_CLIENT_ID || "";
        const clientSecret = process.env.NEXT_PUBLIC_VITE_SPOTIFY_CLIENT_SECRET || "";
        const refreshToken = process.env.NEXT_PUBLIC_VITE_SPOTIFY_REFRESH_TOKEN || "";
        if (!clientId || !clientSecret || !refreshToken) return;

        const auth = btoa(`${clientId}:${clientSecret}`);
        fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
        })
            .then((r) => r.json())
            .then((data) => {
                if (!data.access_token) return null;
                return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
                    headers: { Authorization: `Bearer ${data.access_token}` },
                }).then((r) => (r.status === 204 ? null : r.json()));
            })
            .then((current) => {
                if (current?.item) {
                    setSpotify({
                        isPlaying: Boolean(current?.is_playing),
                        name: current.item.name,
                        artist: current.item.artists?.[0]?.name,
                        image: current.item.album?.images?.[0]?.url,
                        url: current.item.external_urls?.spotify,
                    });
                }
            });
    }, []);

    const heatmap = useMemo(() => {
        const dayMap = new Map<string, number>();
        events.forEach((event: any) => {
            const date = new Date(event.created_at).toISOString().slice(0, 10);
            dayMap.set(date, (dayMap.get(date) || 0) + 1);
        });
        const cells = Array.from({ length: 84 }).map((_, index) => {
            const d = new Date();
            d.setDate(d.getDate() - (83 - index));
            const key = d.toISOString().slice(0, 10);
            const count = dayMap.get(key) || 0;
            return { date: key, count, level: Math.min(4, count) };
        });
        return cells;
    }, [events]);

    return (
        <>
            <Head><title>Anderson Marlon</title></Head>
            <Navigation />
            <HomeDetails>
                <div className="theme-toggle" onClick={toggleTheme}><span>{theme === "dark" ? <Moon /> : <Sun />}</span><small>{theme}</small></div>
                <div className="header"><div className="img"><img src="https://github.com/yagasaki7k.png" alt="Anderson Marlon" /></div><div className="content"><h1>Anderson Marlon</h1><p>Software Engineer · Fullstack Developer</p></div></div>
                <div className="container"><div className="info"><p className="title">Location</p><p className="content"><MapPin />São Paulo, Brazil</p></div><div className="info"><p className="title">Email</p><p className="content"><Mail />yagasakiwanderlust@proton.me</p></div></div>
                <div className="about"><p className="text">I build full-stack products end-to-end with careful attention to motion, typography, and meaningful details. I currently ship with <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</Link>, <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</Link>, <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</Link>, and <Link href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">Styled Components</Link>.</p></div>
                <div className="spotify-widget">
                    {spotify ? <><img src={spotify.image} alt={spotify.name} /><div><span>{spotify.isPlaying ? "Playing" : "Last Played"}</span><h5>{spotify.name}</h5><p>{spotify.artist}</p><Link href={spotify.url} target="_blank" rel="noopener noreferrer">Open on Spotify</Link></div></> : <p>Set NEXT_PUBLIC_VITE_SPOTIFY_CLIENT_ID, NEXT_PUBLIC_VITE_SPOTIFY_CLIENT_SECRET and NEXT_PUBLIC_VITE_SPOTIFY_REFRESH_TOKEN.</p>}
                </div>
                <div className="github">
                    <h4>GitHub Activity</h4>
                    <div className="profile">{github ? <><img src={github.avatar_url} alt={github.login} /><div><h5>@{github.login}</h5><p>{github.followers} followers · {github.following} following · {github.public_repos} repos</p></div></> : <div className="loading">Loading profile...</div>}</div>
                    <div className="heatmap">{heatmap.map((cell) => <span key={cell.date} className={`l${cell.level}`} title={`${cell.date}: ${cell.count} events`} />)}</div>
                    <div className="repo-grid">{repos.slice(0, 4).map((repo) => <a key={repo.name} href={repo.html_url} target="_blank" rel="noreferrer"><h6>{repo.name}</h6><p>{repo.language || "Code"} · ★ {repo.stargazers_count}</p></a>)}</div>
                </div>
                <div className="featured"><h4>Featured Projects</h4><div className="cards">
                    <div className="card"><img src="/projects/meuboi.png" alt="MeuBoi" /><div className="overlay"><h1>MeuBoi</h1><p>A cattle management platform focused on farm operations and profitability.</p><div className="tech-tags"><span>TypeScript</span><span>Go</span><span>Next.js</span></div><div className="actions"><Link href="https://meuboi.com.br" target="_blank" rel="noopener noreferrer"><Globe /></Link></div></div></div>
                    <div className="card"><img src="/projects/steamfolio.png" alt="Steamfolio" /><div className="overlay"><h1>Steamfolio</h1><p>Customizable developer portfolio with strong visual identity and interaction depth.</p><div className="tech-tags"><span>TypeScript</span><span>Vite</span><span>GitHub API</span></div><div className="actions"><Link href="https://github.com/yagasaki7k/website-steamfolio" target="_blank" rel="noopener noreferrer">{svgGithub}</Link><Link href="https://steamfolio.vercel.app" target="_blank" rel="noopener noreferrer"><Globe /></Link></div></div></div>
                </div></div>
                <div className="experience"><h4>Experience</h4><div className="content"><div className="timeline-dot" /><div><div className="title"><p>May 2026 - Present</p><div className="role"><h1>Founder & Developer</h1><p>Remote · Full-Time</p></div></div><div className="description"><p>Founded and scaled a web studio, leading architecture, delivery, and optimization for multiple client products.</p><li>Worked with 30+ clients end to end, from strategy and design to production deployment.</li><li>Improved conversion rates through performance tuning, SEO, and UX iteration.</li></div></div></div></div>
            </HomeDetails>
            <Footer />
        </>
    );
}
