import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import styled from "styled-components";
import { anime } from "../../content/anime";
import { movie } from "../../content/movie";
import { game } from "../../content/game";
import { book } from "../../content/book";
import { useState } from "react";

const AboutDetails = styled.div`
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
    }

    p {
        margin-top: 1rem;
    }

    .buttons {
        margin-top: 1rem;
    }

    button {
        font-family: "DM Mono";
        background: var(--background);
        padding: 0.5rem 0.8rem;
        border: none;
        font-size: 1rem;
        color: var(--white);
        cursor: pointer;
    }

    .anime, .movie, .game, .book {
        background: var(--white);
        color: var(--background);
    }

    tr {
        max-width: 40rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--gray-transparent);
        padding: 1rem 0 0rem 0;

        td {
            font-family: "DM Mono";
            font-size: 0.9rem;
        }
    }
`;

export default function AboutPage() {
	const [tag, setTag] = useState("anime");
	return (
		<>
			<Navigation />
			<AboutDetails>
				<article>
					<h1 className="title">Media Consumption</h1>
					<p>
						One’s life span is around 29,000 days, or 696,000 hours. Media consumption is a rather large chunk of my life, that more or less shapes the view I have today. While
						we can’t live every lifestyle we dream of or experience everything we desire, media offers us a window into different stories and ways of life.
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
			</AboutDetails>
			<Footer />
		</>
	);
}
