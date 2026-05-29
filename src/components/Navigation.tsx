import Link from "next/link";
import styled from "styled-components";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const NavigationDetails = styled.nav`
    background: var(--background);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17.5px 0 17.5px 0;
    max-width: 48rem;
    margin: 0 auto;
    z-index: 1000;

    .leftContent {
        display: flex;
        gap: 25px;
        list-style: none;
        font-family: var(--font-geist-sans);
        font-weight: 600;
        font-size: 0.9rem;
        padding: 0;
        margin: 0;
        
        a {
            color: var(--gray);

            &:hover {
                color: var(--black);
                text-decoration: underline;
            }
        }

        @media (max-width: 1024px) {
            gap: 15px;
        }

        @media (max-width: 768px) {
            gap: 10px;
        }
    }

    .rightContent {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .themeToggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        color: var(--gray);
        background: transparent;
        border: 1px solid transparent;
        border-radius: 50%;
        cursor: pointer;
        transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background 0.3s ease-in-out;

        svg {
            width: 17px;
            height: 17px;
            transition: transform 0.3s ease-in-out;
        }

        &:hover .sun {
            transform: rotate(-20deg);
        }

        &:hover .moon {
            transform: rotate(20deg);
        }
    }

    a {
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        font-weight: 500;

        &:hover {
            color: var(--gray);
        }

        @media (max-width: 1024px) {
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }

        @media (max-width: 480px) {
            font-size: 0.85rem;
        }
    }

    @media (max-width: 820px) {
        padding: 28px 1rem 80px 1rem;
    }

    @media (max-width: 640px) {
        padding-bottom: 60px;
    }

    @media (max-width: 390px) {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }
`;

type Theme = "light" | "dark";

const getDocumentTheme = (): Theme => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
};

const Navigation = () => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            setTheme(getDocumentTheme());
        }, 0);

        return () => window.clearTimeout(timeout);
    }, []);

    const toggleTheme = () => {
        const nextTheme: Theme = getDocumentTheme() === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        window.localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
    };

    return (
        <NavigationDetails aria-label="Primary navigation">
            <ul className="leftContent">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/photos">Photos</Link>
                </li>
            </ul>

            <div className="rightContent">
                <button
                    type="button"
                    className="themeToggle"
                    onClick={toggleTheme}
                    aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                    title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                >
                    {theme === "dark" ? <Sun className="sun" aria-hidden="true" /> : <Moon className="moon" aria-hidden="true" />}
                </button>
            </div>
        </NavigationDetails>
    );
};

export default Navigation;
