import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import styled from "styled-components";
import { anime } from "../../content/anime";
import { movie } from "../../content/movie";
import { game } from "../../content/game";
import { book } from "../../content/book";
import { useState } from "react";
import Head from "next/head";

const MediaDetails = styled.div`
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
        margin-bottom: 2rem;

        @media (max-width: 1024px) {
            font-size: 2rem;
            margin-bottom: 1.75rem;
        }

        @media (max-width: 768px) {
            font-size: 1.8rem;
            text-align: center;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }
    }

    p {
        margin-top: 1rem;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--gray);

        @media (max-width: 1024px) {
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            text-align: center;
            font-size: 0.9rem;
        }

        @media (max-width: 480px) {
            font-size: 0.85rem;
            line-height: 1.5;
        }
    }

    .buttons {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: center;

        @media (max-width: 768px) {
            margin-top: 0.75rem;
            gap: 0.5rem;
        }

        @media (max-width: 480px) {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
    }

    button {
        font-family: "DM Mono";
        background: var(--background);
        padding: 0.5rem 0.8rem;
        border: none;
        font-size: 1rem;
        color: var(--white);
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;

        &:hover {
            filter: brightness(1.2);
        }

        @media (max-width: 1024px) {
            font-size: 0.95rem;
            padding: 0.45rem 0.75rem;
        }

        @media (max-width: 768px) {
            font-size: 0.9rem;
            padding: 0.4rem 0.7rem;
        }

        @media (max-width: 480px) {
            width: 80%;
            font-size: 0.85rem;
            padding: 0.4rem 0.6rem;
        }
    }

    .anime,
    .movie,
    .game,
    .book {
        background: var(--white);
        color: var(--background);

        &:hover {
            filter: brightness(0.9);
        }
    }

    tr {
        max-width: 40rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--gray-transparent);
        padding: 1rem 0 0rem 0;
        width: 100%;
        flex-wrap: wrap;

        td {
            font-family: "DM Mono";
            font-size: 0.9rem;
            color: var(--white);

            @media (max-width: 1024px) {
                font-size: 0.85rem;
            }

            @media (max-width: 768px) {
                font-size: 0.8rem;
            }

            @media (max-width: 480px) {
                font-size: 0.75rem;
                width: 100%;
                text-align: center;
                padding-bottom: 0.25rem;
            }
        }

        @media (max-width: 1024px) {
            max-width: 36rem;
        }

        @media (max-width: 768px) {
            max-width: 90%;
            padding: 0.75rem 0;
        }

        @media (max-width: 480px) {
            max-width: 100%;
            flex-direction: column;
            align-items: center;
            padding: 0.5rem 0;
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

export default function MediaPage() {
    const [tag, setTag] = useState("anime");
    return (
        <>
            <Head>
                <title>Media - Anderson Marlon</title>
                <link rel="icon" type="image/png" href="/campinasfighters.png" />
            </Head>
            <Navigation />
            <MediaDetails>
                <article>
                    <h1 className="title">Media Consumption</h1>
                    <p>
                        One’s life span is around 29,000 days, or 696,000 hours. Media consumption is a rather large chunk of my life, that more or
                        less shapes the view I have today. While we can’t live every lifestyle we dream of or experience everything we desire, media
                        offers us a window into different stories and ways of life.
                    </p>
                    <p>I wanted to list them out, for myself, for share, or just for the record.</p>

                    <div className="buttons">
                        <button className={tag === "anime" ? "anime" : ""} onClick={() => setTag("anime")}>
                            anime
                        </button>
                        <button className={tag === "movie" ? "movie" : ""} onClick={() => setTag("movie")}>
                            movie
                        </button>
                        <button className={tag === "game" ? "game" : ""} onClick={() => setTag("game")}>
                            game
                        </button>
                        <button className={tag === "book" ? "book" : ""} onClick={() => setTag("book")}>
                            book
                        </button>
                    </div>

                    <div className="list">
                        {(() => {
                            const dataMap: Record<string, any[]> = {
                                anime,
                                movie,
                                game,
                                book,
                            };

                            const list = dataMap[tag] ?? [];

                            // Ordem de prioridade desejada
                            const statusOrder = {
                                Watching: 4,
                                Playing: 4,
                                Reading: 4,
                                Completed: 3,
                                Planning: 2,
                                Dropped: 1,
                            };

                            // Ordena a lista com base na prioridade
                            const sortedList = list
                                .slice()
                                .sort((a, b) => {
                                    const orderA = statusOrder[a.status as keyof typeof statusOrder] ?? 999;
                                    const orderB = statusOrder[b.status as keyof typeof statusOrder] ?? 999;
                                    return orderA - orderB;
                                })
                                .reverse();

                            return sortedList.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        {item.title} {item.status ? `(${item.status})` : null}
                                    </td>
                                    <td>{item.author}</td>
                                </tr>
                            ));
                        })()}
                    </div>

                    <p>These are ones I enjoyed, not exhaustive. And not necessarily recommendations.</p>
                </article>
            </MediaDetails>
            <Footer />
        </>
    );
}
