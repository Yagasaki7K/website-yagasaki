import styled from "styled-components";

const HomeArticlesDetails = styled.div`
    margin-left: 24.6rem;
    margin-bottom: 2rem;

    @media (max-width: 1366px) {
        margin-left: 8rem;
    }

    @media (max-width: 1280px) {
        margin-left: 4rem;
    }

    @media (max-width: 1024px) {
        margin-left: 2rem;
    }

    h2 {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 600;
        color: var(--font);

        span {
            cursor: pointer;
        }
    }

    .header, .header-about {
        display: flex;
        justify-content: space-between;
        width: 70rem;

        .backToHome {
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
        margin-top: 8rem;
        margin-bottom: 2rem;
    }

    .articles {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1rem;
        width: 65rem;

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
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
            transition: 0.2s;
            width: 95.5%;
            margin-left: 4.5rem;

            @media (max-width: 1024px) {
                margin-left: 0rem;
            }

            @media (max-width: 768px) {
                width: 20.5rem;
            }

            &:hover {
                background: var(--background);
            }
        }
        
        .article {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            border: 1px solid var(--border);
            border-radius: 0.375rem;
            width: 62rem;
            margin-left: 4.5rem;
            transition: 0.2s;

            @media (max-width: 1024px) {
                margin-left: 0rem;
                width: 50rem;

                .content {
                    width: 40rem;
                }
            }

            @media (max-width: 768px) {
                width: 20.5rem;

                .content {
                    width: 15rem;
                }
            }

            &:hover {
                background: var(--border);
                
                .cutImage {
                    background: var(--border);
                }

                .details {
                    border-image: linear-gradient(to right, var(--background-alt), transparent) 1;
                }
            }

            .details {
                border-bottom: 1px solid;
                border-image: linear-gradient(to right, var(--border), transparent) 1;
                padding: 0.5rem 0.5rem 0.5rem 0.8rem;
                width: 38rem;

                @media (max-width: 768px) {
                    width: 21rem;
                }

                h4 {
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                    font-weight: 600;
                    color: var(--header);
                    z-index: 3;

                    @media (max-width: 768px) {
                        font-size: 1rem;
                        line-height: 1.5rem;
                    }
                }

                p {
                    font-size: 1rem;
                    line-height: 1.5rem;
                    color: var(--font);

                    @media (max-width: 768px) {
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                    }
                }  

                small {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    color: var(--gray);
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
                    color: var(--gray);

                    .color {
                        color: var(--font);
                    }

                    span {
                        margin-right: 1.5rem;
                    }
                }
            }

            .cutImage {
                transform: skew(20deg);
                width: 4rem;
                background: var(--background);
                z-index: 2;
                margin-right: -6.1rem;
                margin-left: -1rem;
                transition: 0.2s;

                @media (max-width: 1024px) {
                    margin-left: 0rem;
                    margin-right: 0rem;
                }
            }

            .cutImage, img {
                height: 9rem;

                @media (max-width: 768px) {
                    display: none;
                }
            }

            img {
                margin-left: 4rem;
                width: 22rem;
                object-fit: cover;
                margin-bottom: -10px;

                @media (max-width: 1024px) {
                    margin-left: 0rem;
                    width: 20rem;
                }
            }
        }
    }

    .about {
        width: 68rem;
        color: var(--font);

        @media (max-width: 1024px) {
            width: 50rem;
        }

        @media (max-width: 768px) {
            width: 20.5rem;
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
`

export default HomeArticlesDetails