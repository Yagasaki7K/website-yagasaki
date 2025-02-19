import styled from "styled-components";

const ArticleDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5rem;

    .text {
        font-family: "Inter", sans-serif;
    }

    .card {
        width: 50rem;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;

        @media (max-width: 1024px) {
            width: 50rem;
        }

        @media (max-width: 768px) {
            width: 94%;
        }

        .details {
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: space-between;

            @media (max-width: 768px) {
                flex-direction: column;
            }

            .tags {
                display: flex;
                flex-direction: row;
                gap: 0.5rem;

                @media (max-width: 768px) {
                    display: none;
                }

                span {
                    background: var(--background-alt);
                    border: 1px solid var(--border);
                    padding: 0.5rem;
                    border-radius: 0.2rem;
                    color: var(--font);
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    padding: 0.5rem 1rem;

                    @media (max-width: 768px) {
                        width: 100%;
                    }
                }
            }

            .date {
                p {
                    font-size: 1rem;
                    color: var(--font);

                    span {
                        font-weight: bold;
                    }
                }
            }
        }

        .docs {
            pre {
                background: var(--background-alt);
                color: var(--white);
            }
        }

        .backToHome {
            text-decoration: none;
            display: flex;
            justify-content: space-between;

            i {
                font-style: normal;
            }

            a {
                color: var(--red);

                &:hover {
                    color: var(--pink);
                }
            }

            span {
                margin-left: 1rem;
                color: var(--pink);
                cursor: pointer;
                text-decoration: underline;
            }

            .on {
                color: var(--pink);
                text-decoration: none;
            }

            .off {
                color: var(--font);
            }
        }

        .minRead {
            text-transform: uppercase;
            color: var(--red);
            font-weight: bold;
            margin-top: 1rem;
            text-align: center;
        }

        h1 {
            margin-top: 1rem;
            font-weight: 800;
            color: var(--header);
            font-size: 2.5rem;
            line-height: 1.35;

            @media (max-width: 768px) {
                font-size: 2.5rem;
            }
        }

        .post-title {
            font-size: 2.5rem;
            position: relative;
            z-index: 1;
            text-align: center;
            line-height: 1.35;
            color: var(--header);
            margin-bottom: 1rem;
            margin-top: 2rem;
            font-weight: normal;
            font-family: "Pacifico", cursive;
        }

        .stylish {
            font-size: clamp(2rem, 6vw, 6rem);
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            font-family: "Luckiest Guy", cursive;
            opacity: 0.3;
            color: var(--red);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
        }

        .title {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 0rem;
        }

        .post-body {
            hr {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 20rem;
                margin: 2rem 0;
                border: 1px solid var(--border);
            }
        }

        h2 {
            font-size: 1.875em;
            line-height: 1.35;
            color: var(--header);
            margin-top: 2rem;
        }

        h3 {
            font-size: 1.5rem;
            line-height: 1.35;
            color: var(--header);
            margin-top: 2rem;
            margin-bottom: 0.5rem;
        }

        h4 {
            font-size: 1.5rem;
            line-height: 1.35;
            color: var(--red);
            margin-top: 2rem;
            margin-bottom: 0.5rem;
        }

        img {
            margin-left: -12rem;
            width: 1200px;
            object-fit: cover;
            border-radius: 0.5rem;

            @media (max-width: 1024px) {
                margin-left: -3rem;
                width: 900px;
            }

            @media (max-width: 768px) {
                width: 100%;
                margin-left: 0rem;
            }
        }

        iframe {
            margin-left: -12rem;
            width: 1200px;
            object-fit: cover;
            border-radius: 0.5rem;
            margin-top: 1rem;

            @media (max-width: 1024px) {
                margin-left: -3rem;
                width: 900px;
            }

            @media (max-width: 768px) {
                width: 100%;
                margin-left: 0rem;
            }
        }

        p {
            font-size: 18px;
            line-height: 1.5;
            color: var(--font);
            margin-top: 2rem;

            @media (max-width: 768px) {
                font-size: 1.1rem;
            }
        }

        aside {
            color: var(--font);
            background: var(--background-alt);
            padding: 1rem;
            border-radius: 15px;
            font-size: 18px;
            margin: 1rem 0;
            line-height: 1.8;

            em,
            li {
                font-size: 16px;
            }
        }

        em {
            text-decoration: underline;
        }

        a {
            color: var(--red);
            text-decoration: underline;
        }

        pre {
            margin: 0; /* Remove o espaçamento extra do pre */
        }

        code {
            position: relative;
            background-color: var(--dracula-bg);
            color: var(--pink);
            border-radius: 8px;
            margin: 1rem 0;
            padding: 0rem 0.5rem;
            font-family: "JetBrains Mono", monospace;
            font-size: 14px;
            line-height: 1.4;
            overflow: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 2rem;
            margin-bottom: 2rem;
            font-size: 1.1rem;
            color: var(--font);

            @media (max-width: 768px) {
                font-size: 1.1rem;
            }

            th,
            td {
                border: 1px solid var(--border);
                padding: 0.5rem;
            }

            tr:nth-child(even) {
                background-color: var(--background-alt);
            }

            th {
                background: var(--background-alt);
            }
        }

        li {
            margin-bottom: 1rem;
            margin-top: 1rem;
            font-size: 18px;
            line-height: 1.5;
            color: var(--font);
            margin-left: 1rem;

            @media (max-width: 768px) {
                font-size: 1.1rem;
            }
        }

        .touch {
            display: flex;
            padding: 2rem 2rem 1rem 2rem;

            @media (max-width: 768px) {
                flex-direction: column;
                padding: 3rem 2rem;
                text-align: center;
            }

            background: var(--background-alt);
            border-radius: 15px;
            margin: 2rem;
            align-items: center;
            justify-content: center;

            @media (max-width: 768px) {
                flex-direction: column;
            }

            .leftContent {
                width: 60%;

                h2 {
                    margin-top: 0rem;
                }

                p {
                    font-size: 1rem;
                    color: var(--font);
                    margin-top: 1rem;
                }
            }

            .rightContent {
                margin-left: 2rem;

                @media (max-width: 768px) {
                    margin-left: 0rem;
                }

                a {
                    color: var(--white);
                    text-decoration: none;
                }

                span {
                    font-size: 1.3rem;
                    background: var(--background);
                    color: var(--white);
                    border-radius: 25px;
                    padding: 1rem 2rem;
                    border: none;

                    &:hover {
                        filter: brightness(1.2);
                    }
                }
            }
        }

        .buymeacoffee {
            width: 100%;
            background: var(--advice-bg);
            text-align: center;
            padding: 1rem 0;
            border-radius: 5px;

            p {
                margin-top: 0rem;
                color: var(--advice-font);
            }

            a {
                text-decoration: none;

                &:hover {
                    filter: brightness(1.2);
                }
            }
        }
    }
`;

export default ArticleDetails;
