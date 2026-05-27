import styled from "styled-components";

const HomeDetails = styled.div`
    max-width: 48rem;
    margin: 0 auto;

    .header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 50px;

        .img {
            width: 60px;
            height: 60px;
            border-radius: 10px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .content {
            h1 {
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                margin-bottom: 0.5rem;
                color: var(--black);
            }

            p {
                font-weight: 600;
                color: var(--gray);
                font-size: 0.9rem;
            }
        }
    }

    .container {
        display: flex;
        gap: 35px;
        font-family: 'Geist', sans-serif;

        .info {
            .title {
                text-transform: uppercase;
                font-size: 0.7rem;
                font-weight: 600;
                color: var(--gray-title);
                letter-spacing: 1px;
                margin-bottom: 0.5rem;
            }

            .content {
                display: flex;
                gap: 7px;
                font-size: 0.8rem;
                color: var(--gray-info);
                font-weight: 500;

                svg {
                    width: 14px;
                    height: 14px;
                    color: var(--gray);
                }
            }
        }
    }

    .about {
        margin-top: 30px;
        
        .text {
            line-height: 1.85;
            color: var(--gray);

            a {
                text-decoration: none;
                color: var(--black);
                transition: 0.3s all ease-in-out;
                
                &:hover {
                    text-decoration: underline;
                    color: var(--gray);
                }
            }
        }

        .spotify {
            margin-top: 20px;
            font-size: 0.8rem;
            display: flex;
            text-align: center;
            font-weight: 500;
            color: var(--gray);
            gap: 5px;

            svg {
                width: 14px;
                height: 14px;
            }

            a {
                text-decoration: none;
                color: var(--gray);

                &:hover {
                    text-decoration: underline;
                }
            }
        }
        
        .social {
            margin-top: 20px;
            gap: 15px;
            display: flex;

            a {
                color: var(--gray);

                &:hover {
                    color: var(--black);
                }
            }

            svg {
                width: 16px;
                height: 16px;
            }
        }
    }

    .tech {
        margin-top: 30px;
        max-width: 48rem;

        h4 {
            color: var(--title);
            text-transform: uppercase;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }

        .stacks {
            display: flex;
            gap: 15px;
            padding: 10px 0 0 0;

            img {
                width: 40px;
                height: 40px;
            }
        }
    }

    .featured {
        margin-top: 30px;

        h4 {
            color: var(--title);
            text-transform: uppercase;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }

        .cards {
            display: flex;
            gap: 30px;
            
            .card {
                border-radius: 10px;
                width: 30rem;
                border: 1px solid var(--gray-light);

                a {
                    text-decoration: none;
                    color: var(--gray);
                    transition: all 0.3s ease-in-out;
                    
                    &:hover {
                        color: var(--black);
                    }
                }
                
                img {
                    width: 100%;
                    border-radius: 10px 10px 0 0;
                }

                .title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px;
                    padding: 1rem 2rem 0.5rem 2rem;

                    h1 {
                        font-size: 1.25rem;
                        color: var(--gray);
                    }

                    .share {
                        display: flex;
                        gap: 5px;
                        
                        svg {
                            width: 16px;
                            height: 16px;
                        }
                    }
                }

                .description {
                    padding: 0rem 2rem 1rem 2rem;
                    color: var(--gray);
                    line-height: 1.5;
                }

                .stacks {
                    padding: 0 2rem 1rem 2rem;
                    display: flex;
                    gap: 10px;

                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 0;
                    }
                }
            }
        }
    }

    .experience {
        
    }
`;

export default HomeDetails;
