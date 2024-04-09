import styled from "styled-components";

const ArticleDetails = styled.div`
    margin-left: 24.6rem;
    margin-top: 11rem;

    .card {
        width: 65rem;
        margin-bottom: 2rem;

        .details {
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: space-between;
            
            .tags {
                display: flex;
                flex-direction: row;
                gap: 0.5rem;

                span {
                    background: #12151c;
                    border: 1px solid var(--border);
                    padding: 0.5rem;
                    border-radius: 0.2rem;
                    color: var(--font-light);
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    padding: 0.5rem 1rem;
                }
            }

            .date {
                p {
                    font-size: 1rem;
                    color: var(--font-light);

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
            margin-left: -5rem;
            width: 1200px;
            object-fit: cover;
        }

        p {
            font-size: 1.3rem;
            line-height: 1.8;
            color: var(--font-light);
            margin-top: 2rem;
        }

        a {
            color: var(--red);
            text-decoration: underline
        }

        pre {
            background: var(--background-alt);
            border-radius: 0.5rem;
            padding: 1rem;
            margin-bottom: 1rem;
            color: var(--font-light);

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
            color: var(--font-light);
            margin-left: 1rem;
        }
    }

    
`

export default ArticleDetails