import Link from "next/link";
import styled from "styled-components";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const NavigationDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0 115px 0;
    max-height: 6rem;
    max-width: 48rem;
    margin: 0 auto;

    .leftContent {
        display: flex;
        gap: 25px;
        list-style: none;
        font-family: 'Geist', sans-serif;
        font-weight: 600;
        font-size: 0.9rem;

        @media (max-width: 1024px) {
            gap: 15px;
        }

        @media (max-width: 768px) {
            gap: 10px;
        }

        @media (max-width: 640px) {
            display: none;
        }
    }

    .rightContent {
        display: flex;
        align-items: center;
        gap: 10px;

        svg {
            width: 17px;
            height: 17px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
        }

        .sun {
            &:hover {
                color: var(--gray);
                transform: rotate(-20deg);
            }
        }

        .moon {
                &:hover {
                color: var(--gray);
                transform: rotate(20deg);
            }
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
`;

const Navigation = () => {
    const [isMoon, setIsMoon] = useState(false);

    const toggleTheme = () => {
        const body = document.body;
        if (body.classList.contains("light")) {
            body.classList.remove("light");
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
            body.classList.add("light");
        }
    }

    return (
        <NavigationDetails>
            <div className="leftContent">
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/about">
                    <li>About</li>
                </Link>
                <Link href="/blog">
                    <li>Blog</li>
                </Link>
                <Link href="/photos">
                    <li>Photos</li>
                </Link>
            </div>

            <div className="rightContent">
                {
                    isMoon ? <Sun className="sun" onClick={() => { toggleTheme(); setIsMoon(false) }} /> : <Moon className="moon" onClick={() => { toggleTheme(); setIsMoon(true) }} />
                }
            </div>
        </NavigationDetails>
    );
};

export default Navigation;
