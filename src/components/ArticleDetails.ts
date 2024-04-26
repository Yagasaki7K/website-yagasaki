import styled from "styled-components";

const ArticleDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5rem;

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

        .backToHome {
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }

            i {
                font-style: normal;
            }
        }

        .minRead{
            text-transform: uppercase;
            color: var(--red);
            font-weight: bold;
            margin-top: 0rem;
        }

        h1 {
            font-size: 3rem;
            line-height: 1.35;
            color: var(--header);
            margin-bottom: 0rem;
            margin-top: 1rem;

            @media (max-width: 768px) {
                font-size: 2.5rem;
            }
        }

        h2 {
            font-size: 2rem;
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

        p {
            font-size: 1.3rem;
            line-height: 1.8;
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
            font-size: 1rem;
            margin-bottom: 1rem;

            em {
                font-size: 1rem;
            }
        }

        a {
            color: var(--red);
            text-decoration: underline
        }

        pre {
            background: var(--code);
            border-radius: 0.5rem;
            padding: 1rem;
            margin: 1rem 0;
            color: var(--font-light);

            @media (max-width: 768px) {
                font-size: 0.8rem;
            }

            code {
                background: none;
                font-family: 'JetBrains Mono', monospace;
            }
        }

        li {
            margin-bottom: 1rem;
            margin-top: 1rem;
            font-size: 1.3rem;
            line-height: 1.5;
            color: var(--font);
            margin-left: 1rem;

            @media (max-width: 768px) {
                font-size: 1.1rem;
            }
        }
    }

    
`

export default ArticleDetails