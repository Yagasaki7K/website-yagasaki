import {
    SiBehance,
    SiDiscord,
    SiGithub,
    SiLinkedin,
    SiSitecore,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Copy, Download, Send } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const XLogo = () => {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" className="ml-1">
            <g>
                <path
                    className="fill-zinc-950 dark:fill-zinc-300"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                ></path>
            </g>
        </svg>
    );
};

interface Link {
    name: string;
    description?: string;
    url: string;
    icon?: ReactNode;
}

const externalLinks: Link[] = [
    {
        name: "GitHub",
        description: "steal my code",
        url: "https://github.com/yagasaki7k",
        icon: <SiGithub />,
    },
    {
        name: "LinkedIn",
        description: "follow my career",
        url: "https://linkedin.com/in/andersonmarlon",
        icon: <SiLinkedin className="dark:fill-zinc-300" />,
    },
    {
        name: "Behance",
        description: "see my designs",
        url: "https://be.net/yagasaki",
        icon: <SiBehance className="dark:fill-zinc-300" />,
    },
    {
        name: "Discord",
        description: "share thoughts with me",
        url: "https://discord.gg/jhSepmE7nN",
        icon: <SiDiscord className="dark:fill-zinc-300" />,
    },
    {
        name: "Engide",
        description: "hire us to build your solution",
        url: "https://engide.com.br",
        icon: <SiSitecore className="dark:fill-zinc-300" />,
    },
];

const ExternalLink = (link: Link) => {
    return (
        <a
            key={link.description}
            href={link.url}
            target="_blank"
            className="group flex items-center justify-between p-4 transition-all sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
            <span className="flex items-center gap-4">
                {link.icon} {link.name}
                <span className="-translate-x-4 text-zinc-500 opacity-0 transition-all max-sm:hidden sm:group-hover:translate-x-0 sm:group-hover:opacity-100 dark:text-zinc-400">
                    {link.description}
                </span>
            </span>
            <ArrowUpRight className="size-5 shrink-0 text-zinc-800 transition-all sm:group-hover:rotate-45 dark:text-zinc-300" />
        </a>
    );
};

const date = new Date();
const isMondayOrThursday = [1, 3].includes(date.getDay());
const isAfterSevenPM = date.getHours() >= 19;
const isBeforeElevenPM = date.getHours() < 23;
const isAfterTwoAM = date.getHours() >= 2;
const isBeforeTenAM = date.getHours() < 10;

export default function HomePage() {
    return (
        <div className="flex flex-col gap-6">
            <p className="text-sm">
                São Paulo-based Brazilian. Building for the web for over 5 years — from fullstack apps to developer tools. Next.js and Vercel Evangelist. Taekwondo Black Belt. Drift King. Guitar Hero.
            </p>
            <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
                {externalLinks.map((link: Link) => (
                    <ExternalLink key={link.url} {...link} />
                ))}
            </div>
            <div className="flex justify-center gap-y-6 max-sm:flex-col-reverse sm:justify-between">
                <div className="flex flex-col justify-center gap-y-5 max-sm:items-center">
                    <div className="sm:group relative -m-8 flex items-center gap-3 p-8 transition-all">
                        yagasakiwanderlust@proton.me
                        <div className="inline-flex items-center gap-3 transition-all sm:absolute sm:right-4 sm:opacity-0 sm:group-hover:right-1 sm:group-hover:opacity-100">
                            <a
                                href="mailto:yagasakiwanderlust@proton.me"
                                className="text-zinc-800 dark:text-zinc-300"
                            >
                                <Send className="size-4" />
                            </a>
                        </div>
                    </div>
                    {

                        isMondayOrThursday && isAfterSevenPM && isBeforeElevenPM ?
                            <span className="-mt-2 flex w-fit items-center gap-1.5 rounded-full bg-red-100 px-2 py-0.5 text-sm text-yellow-600 ring-1 ring-yellow-500 dark:bg-transparent dark:text-yellow-500 dark:ring-yellow-500">
                                <div className="size-2 animate-pulse rounded-full bg-yellow-500 dark:bg-yellow-500" />
                                Away
                            </span>
                         : isAfterTwoAM && isBeforeTenAM ?
                            <span className="-mt-2 flex w-fit items-center gap-1.5 rounded-full bg-gray-100 px-2 py-0.5 text-sm text-gray-600 ring-1 ring-gray-500 dark:bg-transparent dark:text-gray-500 dark:ring-gray-500">
                                <div className="size-2 animate-pulse rounded-full bg-gray-500 dark:bg-gray-500" />
                                Offline
                            </span>
                         :
                            <span className="-mt-2 flex w-fit items-center gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-600 ring-1 ring-green-500 dark:bg-transparent dark:text-emerald-500 dark:ring-emerald-500">
                                <div className="size-2 animate-pulse rounded-full bg-green-500 dark:bg-emerald-500" />
                                Online
                            </span>
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <a
                        href="/anderson-marlon-cv.pdf"
                        download="anderson-marlon-cv.pdf"
                        className="flex flex-row items-center justify-center gap-3 rounded bg-purple-300 p-4 text-purple-800 ring-1 ring-purple-500 transition-all sm:hover:bg-purple-400 dark:bg-inherit dark:text-purple-500 dark:ring-purple-500 sm:sm:dark:hover:bg-zinc-800"
                    >
                        <span className="text-nowrap">Download my CV</span>
                        <Download className="size-5 max-sm:hidden" />
                    </a>
                </div>
            </div>
        </div>
    );
}
