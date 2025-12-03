import styled from "styled-components";

const HomeDetails = styled.div`
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        margin: 1rem auto;
        max-width: 42rem;

        h1 {
            font-size: 36px;
            font-weight: 600;
            color: var(--white);
            margin-bottom: 2rem;
        }

        p {
            margin: 1rem 0;
            line-height: 1.8rem;
        }

        .p {
            font-size: 1rem;
            margin-bottom: 10px;
            display: flex;

            .link {
                margin: 0 4px;
                background: var(--gray-transparent);
                border-radius: 5px;
                font-size: 0.9rem;
                padding: 2px 4px;
                color: var(--gray);
                transition: 1s all ease;
                display: flex;
                align-items: center;

                a {
                    text-decoration: none;
                    color: var(--gray);
                    transition: 1s all ease;

                    &:hover {
                        color: var(--white);
                    }
                }

                img {
                    width: 15px;
                    margin-right: 5px;
                }
            }
        }
    }

    .hero-saas {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        margin: 1rem auto;
        max-width: 55rem;

        h1 {
            font-size: 36px;
            font-weight: 600;
            color: var(--white);
            margin-bottom: 2rem;
        }

        p {
            margin: 1rem 0;
            line-height: 1.8rem;
        }

        .p {
            font-size: 1rem;
            margin-bottom: 10px;
            display: flex;

            .link {
                margin: 0 4px;
                background: var(--gray-transparent);
                border-radius: 5px;
                font-size: 0.9rem;
                padding: 2px 4px;
                color: var(--gray);
                transition: 1s all ease;
                display: flex;
                align-items: center;

                a {
                    text-decoration: none;
                    color: var(--gray);
                    transition: 1s all ease;

                    &:hover {
                        color: var(--white);
                    }
                }

                img {
                    width: 15px;
                    margin-right: 5px;
                }
            }
        }
    }

    .blogSearch {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;

        .title {
            margin-bottom: 1rem;
            font-size: 2rem;
            color: var(--white);
            border-bottom: 2px solid var(--red);
        }

        input {
            padding: 10px 20px;
            border-radius: 10px;
            border: 1px solid var(--gray-transparent);
            color: var(--gray);
            font-size: 1rem;
            width: 40rem;
            outline: none;
            margin: 0.5rem 0;
            background: var(--background);
        }

        .article {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 0rem 20rem;
            margin: 1rem 0;

            a {
                text-decoration: none;
            }

            .content {
                display: flex;
                flex-direction: column;
                background: var(--gray-background);
                border-radius: 0 0 5px 5px;
                margin: 1rem 0;
                transition: all 0.3s ease-in-out;
                width: 35rem;

                &:hover {
                    transform: scale(1.02);
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
                }

                p {
                    color: var(--black);
                    font-size: 1rem;
                    margin: 0rem 0 1rem 0;

                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                }

                .small,
                h4,
                img,
                p {
                    width: 35rem;
                }

                .small {
                    margin-top: -0.5rem;
                    margin-bottom: 0;
                    font-size: 0.8rem;
                    color: var(--black);
                    opacity: 0.5;
                }

                h4 {
                    margin: 0rem 0;
                    font-size: 1.2rem;
                }

                img {
                    border-radius: 5px 5px 0 0;
                    width: 35rem;
                    height: 15rem;
                    object-fit: cover;
                }
            }
        }
    }

    @media (max-width: 1440px) {
        .about .content,
        .blog .article,
        .time .container,
        .blogSearch .article {
            padding: 1rem 10rem;
        }

        .about .leftContent img {
            height: 40rem;
        }

        .time .experimental {
            width: 45rem;
        }

        .blogSearch .article .content,
        .blogSearch .article .content .small,
        .blogSearch .article .content h4,
        .blogSearch .article .content img,
        .blogSearch .article .content p {
            width: 28rem;
        }
    }

    @media (max-width: 1280px) {
        .hero {
            max-width: 38rem;
        }

        .hero h1 {
            font-size: 2.25rem;
        }

        .blogSearch input {
            width: 32rem;
        }

        .blogSearch .article {
            padding: 1rem 8rem;
        }

        .blogSearch .article .content,
        .blogSearch .article .content .small,
        .blogSearch .article .content h4,
        .blogSearch .article .content img,
        .blogSearch .article .content p {
            width: 26rem;
        }
    }

    @media (max-width: 1180px) {
        .hero {
            max-width: 36rem;
        }

        .blogSearch input {
            width: 28rem;
        }

        .blogSearch .article {
            padding: 1rem 6rem;
        }
    }

    @media (max-width: 1024px) {
        .hero h1 {
            font-size: 2.2rem;
        }

        .hero p {
            font-size: 1.2rem;
        }

        .about .content {
            flex-direction: column;
            padding: 1rem 5rem;
            align-items: center;
        }

        .about .leftContent img {
            width: 100%;
            height: auto;
        }

        .about .rightContent .cards {
            grid-template-columns: 1fr;
        }

        .blog .article {
            flex-direction: column;
            padding: 1rem 5rem;
        }

        .blog .content {
            margin-right: 0;
            max-height: none;
        }

        .time .container {
            flex-direction: column;
            padding: 1rem 5rem;
        }

        .time .experimental {
            width: 100%;
        }

        .contact .content {
            flex-direction: column;
            align-items: center;
        }

        .contact form {
            width: 100%;
            margin-right: 0;
        }

        .contact .info p {
            width: 100%;
        }

        .blogSearch .article {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            padding: 1rem 5rem;
        }

        .blogSearch .article .content,
        .blogSearch .article .content .small,
        .blogSearch .article .content h4,
        .blogSearch .article .content img,
        .blogSearch .article .content p {
            width: 100%;
        }
    }

    @media (max-width: 912px) {
        .hero {
            max-width: 34rem;
        }

        .hero .p {
            flex-wrap: wrap;
            gap: 6px;
        }

        .hero .p .link {
            font-size: 0.85rem;
            padding: 2px 6px;
        }

        .blogSearch input {
            width: 85%;
        }

        .blogSearch .article {
            padding: 1rem 3rem;
        }
    }

    @media (max-width: 820px) {
        .hero {
            max-width: 32rem;
        }

        .blogSearch .article {
            gap: 0.75rem;
        }
    }

    @media (max-width: 768px) {
        .hero h1 {
            font-size: 1.8rem;
        }

        .hero p {
            font-size: 1rem;
        }

        .hero .buttons {
            flex-direction: column;
            gap: 10px;
        }

        .about .content {
            padding: 1rem 2rem;
        }

        .blog .article {
            padding: 1rem 2rem;
        }

        .time .container {
            padding: 1rem 2rem;
        }

        .blogSearch input {
            width: 80%;
        }

        .blogSearch .article {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1rem 2rem;
        }
    }

    @media (max-width: 640px) {
        .hero {
            max-width: 28rem;
            text-align: center;
        }

        .hero .p {
            justify-content: center;
        }

        .blogSearch input {
            width: 92%;
        }
    }

    @media (max-width: 480px) {
        .hero {
            height: auto;
            padding: 2rem 1rem;
            text-align: center;
            max-width: 24rem;
        }

        .hero h1 {
            font-size: 1.5rem;
        }

        .hero p {
            font-size: 0.9rem;
        }

        .about .title,
        .blog .title,
        .time .title,
        .contact .title,
        .partner .title,
        .blogSearch .title {
            font-size: 1.5rem;
        }

        .about .content {
            padding: 1rem;
        }

        .blog .article {
            padding: 1rem;
        }

        .time .container {
            padding: 1rem;
        }

        .contact form {
            width: 100%;
        }

        .contact .info {
            width: 100%;
            padding: 1rem;
        }

        .blogSearch .article {
            padding: 1rem;
        }

        .blogSearch input {
            width: 100%;
        }

        .blogSearch .article .content img {
            height: 12rem;
        }
    }

    @media (max-width: 390px) {
        .hero {
            max-width: 21rem;
        }

        .hero h1 {
            font-size: 1.35rem;
        }

        .hero .p .link {
            font-size: 0.8rem;
        }

        .blogSearch .article .content img {
            height: 10rem;
        }
    }

    @media (max-width: 360px) {
        .hero {
            max-width: 20rem;
        }

        .blogSearch .title {
            font-size: 1.25rem;
        }

        .blogSearch .article .content h4 {
            font-size: 1.05rem;
        }
    }
`;

export default HomeDetails;
