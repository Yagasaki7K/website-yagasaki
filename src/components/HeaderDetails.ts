import styled from "styled-components";

const HeaderDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 10rem 5rem 10rem;

    @media (max-width: 1366px) {
        padding: 10rem 0rem 5rem 0rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 5rem 0rem 5rem 0rem;
    }

    .fluid {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .text {
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol,
            "Noto Color Emoji";
    }

    .leftContent {
        width: 45%;

        @media (max-width: 1366px) {
            width: 50%;
        }

        @media (max-width: 1024px) {
            width: 40%;
        }

        @media (max-width: 768px) {
            width: 80%;
            margin-right: 0rem;
        }

        h1 {
            font-weight: 800;
            color: var(--header);
            font-size: 4.5rem;
            line-height: 1;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 4rem;
            }

            span {
                cursor: pointer;
            }

            img {
                width: 4rem;
                margin-right: 2rem;
            }
        }

        p {
            color: var(--font);
            font-size: 1.25rem;
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            unicode-bidi: isolate;
            text-align: center;

            a {
                cursor: pointer;

                i {
                    font-size: 2rem;
                    margin-right: 1rem;
                    color: var(--font);
                    transition: 0.5s;

                    &:hover {
                        color: var(--header);
                    }
                }
            }

            .uil-external-link-alt {
                font-size: 1rem;
                margin-right: 0;
                color: var(--red);

                &:hover {
                    color: var(--pink);
                }
            }
        }

        a {
            color: var(--red);
            text-decoration: none;
            transition: 0.5s;

            &:hover {
                color: var(--pink);
            }
        }
    }

    .search {
        width: 100%;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--border);
        background: var(--background);
        color: var(--font);
        font-size: 1.25rem;
        outline: none;
        margin-top: -5rem;

        @media (max-width: 768px) {
            width: 90%;
        }
    }
`;

export default HeaderDetails;
