import styled from 'styled-components'

const ContentDetails = styled.div`
    display: flex;

    .LeftContent {
        position: fixed;
        margin-top: -50px;
        padding: 88px 0 0 20rem;

        @media screen and (max-width: 1366px) {
            padding: 25px 0 0 4rem;
        }

        @media screen and (max-width: 1024px) {
            position: relative;
        }

        h2 {
            font-size: 64px;
            color: #fff;
        }

        h4 {
            font-size: 24px;
            margin-top: -50px;
            color: #fff;
        }

        .ContentText {
            width: 420px;

            p {
            color: #949495;
            font-size: 14px;
            line-height: 2;

                a {
                    color: #fff;
                }
            }

            @media screen and (max-width: 600px) {
                .summary {
                    display: none;
                }
            }

            .summary {
                margin-top: 40px;

                h4 {
                    margin-top: 20px;
                    margin-bottom: -10px;
                }

                a {
                    color: #fff;
                    text-decoration: none;

                    hr {
                        margin: 0;
                        width: 25px;
                        margin-top: -10px;
                    }

                    :hover {
                        p {
                            transition: 2s;
                            color: #fff;
                        }

                        hr {
                            transition: 2s;
                            width: 120px;
                            color: #fff;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 414px) {
        padding: 25px 0 0 25px;

        .ContentText {
            width: 300px;
        }

        @media screen and (max-width: 320px) {
            padding: 15px 0 0 15px;

            h2 {
                font-size: 48px;
            }

            .ContentText {
                width: 250px;
            }

            .uil-external-link-alt {
                display: none;
            }
        }
    }

        footer {
            margin-top: 230px;
            display: flex;

            @media screen and (max-width: 1366px) {
                margin-top: 50px;
            }

            img {
                width: 48px;
                height: 48px;
                margin-right: 16px;
                border-radius: 50%;
            }

            a {
                display: flex;
                color: #fff;
                text-decoration: none;
                font-size: 14px;

                i {
                    margin-top: 12px;
                    margin-left: 10px;
                    margin-right: 10px;
                    font-size: 18px;
                    

                }

                .uil-external-link-alt {
                    font-size: 16px;
                }
            }
        }
    }

    .RightContent {
        margin-left: 58.5rem;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 20px;

        @media screen and (max-width: 1366px) {
            margin-left: 42rem;
            margin-top: -20px;
        }

        @media screen and (max-width: 1024px) {
            margin-left: -35rem;
            margin-top: 40rem;
        }

        @media screen and (max-width: 600px) {
            display: none;
        }

        h1 {
            text-transform: uppercase;
            font-size: 20px;
            margin-top: 50px;
            margin-left: 20px;
        }

        a {
            color: #fff;
            text-decoration: none;
        }

        .boxGithub {
            background: #202022;
            padding: 20px 80px 20px 40px;
            margin-bottom: 10px;

            :hover {
                transition: 1s;
                transform: scale(1.05);
                background: #2f2f2f;
            }

            h3 {
                text-transform: uppercase;
                font-size: 10px;
                letter-spacing: 2px;
                margin-bottom: -10px;
                width: 500px;
            }

            h2 {
                font-size: 24px;
                font-weight: 600;
                width: 500px;
            }

            p {
                font-size: 14px;
                margin-top: -10px;
                color: #949495;
                width: 500px;
            }

            .star {
                display: flex;
                font-weight: 600;
                margin-top: 30px;

                i {
                    margin-top: -12px;
                    margin-right: 10px;
                    color: #949495;
                }

                .starNumber {
                    font-size: 12px;
                    font-weight: 600;
                    color: #949495;
                }
            }
        }

        .boxTwitter {
            background: #202022;
            padding: 20px 20px 10px 0px;
            margin-bottom: 10px;

            .twitterImage {
                img {
                    width: 80px;
                    margin-top: 0px;
                    margin-bottom: 10px;
                    margin-left: 30px;
                    border-radius: 50px;
                }
            }

            :hover {
                z-index: 2;
                transition: 1s;
                background: #2f2f2f;
            }

            .twitterContent {
                width: 300px;

                blockquote {
                    margin-top: -100px;
                    margin-left: 130px;

                    h3 {
                        margin-top: -0px;
                    }

                    p {
                        font-size: 14px;
                        margin-top: -10px;
                        color: #949495;
                        width: 400px;
                    }
                }
            }
        }
    }
`

export default ContentDetails