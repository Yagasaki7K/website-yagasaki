import styled from "styled-components";

const HomeArticlesDetails = styled.div`
    margin-left: 24.6rem;
    margin-bottom: 2rem;

    h2 {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 600;
        color: var(--font);

        span {
            cursor: pointer;
        }
    }

    .header {
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

    

    .articles {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1rem;
        width: 65rem;

        a {
            text-decoration: none;
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

                h4 {
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                    font-weight: 600;
                    color: var(--header);
                    z-index: 3;
                }

                p {
                    font-size: 1rem;
                    line-height: 1.5rem;
                    color: var(--font);
                }  

                small {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    color: var(--gray);
                }
            }

            .tags {
                padding: 0.2rem 0 0rem 0.8rem;

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
            }

            .cutImage, img {
                height: 9rem;
            }

            img {
                margin-left: 4rem;
                width: 22rem;
                object-fit: cover;
                margin-bottom: -10px;
            }
        }
    }
`

export default HomeArticlesDetails