import styled from "styled-components";

const ArticleDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    .text {
        font-family: "Inter", sans-serif;
    }

    .card {
        width: 50rem;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;

        @media (max-width: 1440px) {
            width: 46rem;
        }

        @media (max-width: 1280px) {
            width: 44rem;
        }

        @media (max-width: 1180px) {
            width: 42rem;
        }

        @media (max-width: 1024px) {
            width: 50rem;
        }

        @media (max-width: 912px) {
            width: 40rem;
        }

        @media (max-width: 820px) {
            width: 96%;
        }

        @media (max-width: 768px) {
            width: 94%;
        }

        @media (max-width: 480px) {
            width: 100%;
        }

        .details {
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: space-between;
            gap: 1rem;

            @media (max-width: 1024px) {
                gap: 0.75rem;
            }

            @media (max-width: 768px) {
                flex-direction: column;
                gap: 0.5rem;
            }

            .tags {
                display: flex;
                flex-direction: row;
                gap: 0.5rem;
                flex-wrap: wrap;

                @media (max-width: 1024px) {
                    gap: 0.4rem;
                }

                @media (max-width: 820px) {
                    gap: 0.35rem;
                }

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

                    @media (max-width: 1024px) {
                        font-size: 0.75rem;
                        padding: 0.4rem 0.8rem;
                    }

                    @media (max-width: 768px) {
                        width: 100%;
                    }
                }
            }

            .views {
                display: flex;
                align-items: center;
                justify-content: center;

                .view-count {
                    font-size: 1rem;
                    color: var(--font);

                    @media (max-width: 1024px) {
                        font-size: 0.95rem;
                    }

                    @media (max-width: 480px) {
                        font-size: 0.9rem;
                    }
                }
            }

            .date {
                p {
                    font-size: 1rem;
                    color: var(--font);

                    @media (max-width: 1024px) {
                        font-size: 0.95rem;
                    }

                    @media (max-width: 480px) {
                        font-size: 0.9rem;
                    }

                    span {
                        font-weight: bold;
                    }
                }
            }
        }

        .minRead {
            color: var(--black);
            font-weight: 400;
            font-size: 1rem;
            text-align: center;

            @media (max-width: 1024px) {
                font-size: 0.95rem;
            }

            @media (max-width: 480px) {
                font-size: 0.9rem;
            }
        }

        h1 {
            margin-top: 1rem;
            font-weight: 800;
            color: var(--header);
            font-size: 2.5rem;
            line-height: 1.35;

            @media (max-width: 1280px) {
                font-size: 2.25rem;
            }

            @media (max-width: 1024px) {
                font-size: 2.1rem;
            }

            @media (max-width: 820px) {
                font-size: 2rem;
            }

            @media (max-width: 768px) {
                font-size: 2.5rem;
            }

            @media (max-width: 480px) {
                font-size: 2rem;
            }
        }

        .post-title {
            font-size: 2.5rem;
            position: relative;
            z-index: 1;
            text-align: center;
            line-height: 1.35;
            color: var(--white);
            margin-bottom: 1rem;
            margin-top: 2rem;
            font-weight: normal;

            @media (max-width: 1280px) {
                font-size: 2.25rem;
            }

            @media (max-width: 1024px) {
                font-size: 2rem;
            }

            @media (max-width: 480px) {
                font-size: 1.75rem;
            }
        }

        .title {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 0rem;

            @media (max-width: 480px) {
                margin-top: 0.5rem;
            }
        }

        .post-body {
            hr {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 20rem;
                margin: 2rem 0;
                border: 1px solid var(--border);

                @media (max-width: 1024px) {
                    width: 16rem;
                }

                @media (max-width: 768px) {
                    width: 12rem;
                }

                @media (max-width: 480px) {
                    width: 8rem;
                }
            }
        }

        h2 {
            font-size: 1.875em;
            line-height: 1.35;
            color: var(--header);
            margin-top: 2rem;

            @media (max-width: 1024px) {
                font-size: 1.7rem;
            }

            @media (max-width: 480px) {
                font-size: 1.5rem;
            }
        }

        h3 {
            font-size: 1.5rem;
            line-height: 1.35;
            color: var(--header);
            margin-top: 2rem;
            margin-bottom: 0.5rem;

            @media (max-width: 1024px) {
                font-size: 1.35rem;
            }

            @media (max-width: 480px) {
                font-size: 1.25rem;
            }
        }

        h4 {
            font-size: 1.5rem;
            line-height: 1.35;
            color: var(--red);
            margin-top: 2rem;
            margin-bottom: 0.5rem;

            @media (max-width: 1024px) {
                font-size: 1.35rem;
            }

            @media (max-width: 480px) {
                font-size: 1.25rem;
            }
        }

        img {
            margin-left: 0rem;
            max-width: 1200px;
            width: 100%;
            object-fit: cover;
            border-radius: 0.5rem;

            @media (max-width: 1440px) {
                margin-left: -8rem;
                max-width: 1050px;
            }

            @media (max-width: 1280px) {
                margin-left: -6rem;
                max-width: 980px;
            }

            @media (max-width: 1180px) {
                margin-left: -4rem;
                max-width: 920px;
            }

            @media (max-width: 1024px) {
                margin-left: -3rem;
                max-width: 900px;
            }

            @media (max-width: 912px) {
                margin-left: -2rem;
                max-width: 720px;
            }

            @media (max-width: 820px) {
                margin-left: -1rem;
            }

            @media (max-width: 768px) {
                width: 100%;
                margin-left: 0rem;
            }

            @media (max-width: 480px) {
                width: 100%;
                margin-left: 0;
            }
        }

        iframe {
            margin-left: -12rem;
            width: 1200px;
            object-fit: cover;
            border-radius: 0.5rem;
            margin-top: 1rem;

            @media (max-width: 1440px) {
                margin-left: -8rem;
                width: 1050px;
            }

            @media (max-width: 1280px) {
                margin-left: -6rem;
                width: 980px;
            }

            @media (max-width: 1180px) {
                margin-left: -4rem;
                width: 920px;
            }

            @media (max-width: 1024px) {
                margin-left: -3rem;
                width: 900px;
            }

            @media (max-width: 912px) {
                margin-left: -2rem;
                width: 720px;
            }

            @media (max-width: 820px) {
                margin-left: -1rem;
                width: 100%;
            }

            @media (max-width: 768px) {
                width: 100%;
                margin-left: 0rem;
            }

            @media (max-width: 480px) {
                width: 100%;
                margin-left: 0;
            }
        }

        p {
            font-size: 18px;
            line-height: 1.5;
            color: var(--font);
            margin-top: 2rem;

            @media (max-width: 1180px) {
                font-size: 1.05rem;
            }

            @media (max-width: 1024px) {
                font-size: 1rem;
            }

            @media (max-width: 820px) {
                font-size: 1rem;
            }

            @media (max-width: 768px) {
                font-size: 1.1rem;
            }

            @media (max-width: 480px) {
                font-size: 1rem;
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

            @media (max-width: 1024px) {
                font-size: 1rem;
                padding: 0.875rem;
            }

            @media (max-width: 480px) {
                font-size: 0.95rem;
                padding: 0.75rem;
            }

            em,
            li {
                font-size: 16px;

                @media (max-width: 480px) {
                    font-size: 0.95rem;
                }
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
            margin: 1rem 0;
            border-radius: 8px;
            overflow: auto;
        }

        pre code {
            display: block;
            padding: 1rem;
            font-family: "JetBrains Mono", monospace;
            font-size: 14px;
            line-height: 1.5;
            white-space: pre;
        }

        :not(pre) > code {
            position: relative;
            background-color: var(--code);
            color: var(--pink);
            border-radius: 8px;
            margin: 1rem 0;
            padding: 0.25rem 0.5rem;
            font-family: "JetBrains Mono", monospace;
            font-size: 14px;
            line-height: 1.4;
            overflow: auto;
            white-space: pre-wrap;
            word-wrap: break-word;

            @media (max-width: 1024px) {
                font-size: 13px;
            }

            @media (max-width: 480px) {
                font-size: 12px;
            }
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 2rem;
            margin-bottom: 2rem;
            font-size: 1.1rem;
            color: var(--font);

            @media (max-width: 1024px) {
                font-size: 1rem;
            }

            @media (max-width: 768px) {
                font-size: 1.1rem;
            }

            @media (max-width: 480px) {
                display: block;
                overflow-x: auto;
                white-space: nowrap;
                font-size: 0.95rem;
            }

            th,
            td {
                border: 1px solid var(--border);
                padding: 0.5rem;

                @media (max-width: 1024px) {
                    padding: 0.45rem;
                }

                @media (max-width: 480px) {
                    padding: 0.4rem 0.5rem;
                }
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

            @media (max-width: 1180px) {
                font-size: 1.05rem;
            }

            @media (max-width: 1024px) {
                font-size: 1rem;
            }

            @media (max-width: 768px) {
                font-size: 1.1rem;
            }

            @media (max-width: 480px) {
                font-size: 1rem;
                margin-left: 0.75rem;
            }
        }

        .touch {
            display: flex;
            padding: 2rem;

            @media (max-width: 1180px) {
                padding: 1.75rem;
            }

            @media (max-width: 1024px) {
                padding: 1.5rem;
            }

            @media (max-width: 768px) {
                flex-direction: column;
                padding: 3rem 2rem;
                text-align: center;
            }

            @media (max-width: 480px) {
                padding: 2rem 1rem;
            }

            background: var(--background-alt);
            border-radius: 15px;
            margin: 2rem;
            align-items: center;
            justify-content: center;

            @media (max-width: 820px) {
                margin: 1.5rem;
            }

            @media (max-width: 768px) {
                flex-direction: column;
            }

            @media (max-width: 480px) {
                margin: 1rem 0.5rem;
            }

            .leftContent {
                width: 60%;

                @media (max-width: 1024px) {
                    width: 65%;
                }

                @media (max-width: 820px) {
                    width: 100%;
                }

                h2 {
                    margin-top: 0rem;

                    @media (max-width: 480px) {
                        font-size: 1.4rem;
                    }
                }

                p {
                    font-size: 1rem;
                    color: var(--font);
                    margin-top: 1rem;

                    @media (max-width: 1024px) {
                        font-size: 0.95rem;
                    }

                    @media (max-width: 480px) {
                        font-size: 0.95rem;
                    }
                }
            }

            .rightContent {
                margin-left: 2rem;

                @media (max-width: 1024px) {
                    margin-left: 1.25rem;
                }

                @media (max-width: 820px) {
                    margin-left: 0rem;
                    margin-top: 1rem;
                }

                @media (max-width: 480px) {
                    width: 100%;
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
                    display: inline-block;
                    text-align: center;

                    @media (max-width: 1024px) {
                        font-size: 1.15rem;
                        padding: 0.9rem 1.75rem;
                    }

                    @media (max-width: 480px) {
                        width: 100%;
                        font-size: 1.05rem;
                        padding: 0.85rem 1.25rem;
                    }

                    &:hover {
                        filter: brightness(1.2);
                    }
                }
            }
        }
    }

    @media (max-width: 820px) {
        padding: 0 1rem;
    }

    @media (max-width: 480px) {
        padding: 0 0.75rem;
    }
`;

export default ArticleDetails;
