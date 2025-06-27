import styled from "styled-components";

const HomeArticlesDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5rem;

    h2 {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 600;
        color: var(--font);
        margin-top: -2rem;

        span {
            cursor: pointer;
        }
    }

    .poppins {
        font-family: "Poppins", sans-serif;
    }

    .uwu {
        font-family: "Milky Honey", cursive;
        src: url("../fonts//Milky\ Honey.otf") format("otf");
        src: url("../fonts//Milky\ Honey.ttf") format("ttf");
    }

    .header,
    .header-about {
        display: flex;
        justify-content: space-between;
        width: 75%;

        @media (max-width: 1024px) {
            width: 100%;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            margin-top: -2rem;
        }

        .backToHome {
            a {
                color: var(--red);

                &:hover {
                    color: var(--pink);
                }
            }

            color: var(--red);
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }

            i {
                font-style: normal;
            }
        }
    }

    .header-about {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .articles {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1rem;
        width: 45rem;

        @media (max-width: 768px) {
            width: 80%;
        }

        a {
            text-decoration: none;
        }

        button {
            color: var(--font);
            background: var(--border);
            border: 1px solid var(--border);
            border-radius: 0.375rem;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            cursor: pointer;
            transition: 0.2s;
            margin-left: 0rem;

            &:hover {
                background: var(--background);
            }
        }

        @keyframes gradient {
            0% {
                background: linear-gradient(0deg, var(--red) 14.43%, var(--pink));
                opacity: 0.7;
            }
            25% {
                background: linear-gradient(90deg, var(--red) 14.43%, var(--pink));
                opacity: 0.8;
            }
            50% {
                background: linear-gradient(180deg, var(--red) 14.43%, var(--pink));
                opacity: 0.9;
            }
            75% {
                background: linear-gradient(270deg, var(--red) 14.43%, var(--pink));
                opacity: 0.8;
            }
            100% {
                background: linear-gradient(360deg, var(--red) 14.43%, var(--pink));
                opacity: 0.7;
            }
        }

        .one {
            background: linear-gradient(90deg, #dc6061 0%, #d9608c);
        }

        .two {
            background: linear-gradient(90deg, #73ba79 0%, #5db777);
        }

        .three {
            background: linear-gradient(90deg, #7a77a4 0%, #7470a9);
        }

        .four {
            background: linear-gradient(90deg, #ffa779 0%, #dd8a5e);
        }

        .article {
            display: flex;
            border-radius: 11px;
            transition: 0.2s;
            padding: 0.5rem 2rem;
            position: relative;

            @media (max-width: 768px) {
                padding: 0.5rem 1rem;
            }

            .details {
                border-bottom: 1px solid;
                border-image: linear-gradient(
                        to right,
                        var(--gray),
                        transparent
                    )
                    1;
                padding: 0.5rem 0.5rem 0.5rem 0.8rem;

                h4 {
                    font-size: 1.24rem;
                    line-height: 1.75rem;
                    font-weight: 600;
                    color: var(--header);
                    z-index: 3;

                    @media (max-width: 768px) {
                        font-size: 1rem;
                        line-height: 1.5rem;
                    }

                    @media (max-width: 414px) {
                        font-size: 0.75rem;
                        line-height: 1.25rem;
                    }
                }

                p {
                    font-size: 1rem;
                    line-height: 1.5rem;
                    color: var(--header);
                    // limite a 3 linhas
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;

                    @media (max-width: 768px) {
                        font-size: 0.75rem;
                        line-height: 1.25rem;
                    }
                }

                small {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    color: var(--header);
                    margin-top: 0.5rem;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                }
            }

            .tags {
                padding: 0.2rem 0 0rem 0.8rem;

                @media (max-width: 768px) {
                    padding: 0.2rem 0 0rem 1rem;
                }

                p {
                    font-size: 0.75rem;
                    line-height: 1.25rem;
                    color: var(--header);

                    .color {
                        color: var(--header);
                    }

                    span {
                        margin-right: 1.5rem;
                    }
                }
            }

            img {
                display: none;
            }
        }
    }

    .about {
        margin-top: 2rem;
        color: var(--font);
        padding: 2rem 15rem;

        @media (max-width: 1024px) {
            padding: 2rem 5rem;
        }

        @media (max-width: 768px) {
            padding: 2rem 2rem;
        }

        h2 {
            font-size: 2rem;
        }

        h1 {
            font-size: 3rem;
        }

        h3 {
            font-size: 2rem;
        }

        li {
            margin: 0.5rem 0;
        }

        hr {
            border: 1px solid var(--border);
            width: 35rem;
            margin: 2rem 0;
        }

        .quote {
            margin: 2rem 0;
            font-size: 1.5rem;

            u {
                color: var(--red);
            }
        }

        p {
            margin: 1rem 0;
        }

        .positions {
            margin-top: 2rem;

            h3 {
                margin-bottom: -3rem;
            }

            h4 {
                margin-top: 3rem;
                font-size: 1.5rem;
            }
        }

        .certificates {
            margin-top: 2rem;

            strong {
                color: var(--red);
            }
        }

        .projects {
            margin-top: 2rem;

            strong {
                color: var(--red);
            }

            a {
                color: var(--red);

                &:hover {
                    color: var(--pink);
                }
            }
        }
    }

    .tkd {
        width: 68rem;
        color: var(--font);

        @media (max-width: 1024px) {
            width: 50rem;
        }

        @media (max-width: 768px) {
            width: 20.5rem;
        }

        img {
            width: 100%;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 2rem;
        }

        h1 {
            font-size: 3rem;
        }

        h3 {
            font-size: 2rem;
        }

        a {
            color: var(--red);
        }

        p {
            margin: 1rem 0;
        }

        .positions {
            margin-top: 2rem;

            h3 {
                margin-bottom: -2rem;
            }

            h4 {
                margin-top: 2rem;
                font-size: 1.5rem;
            }
        }
    }
`;

export default HomeArticlesDetails;
