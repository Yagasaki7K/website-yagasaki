import styled from 'styled-components'

const CurriculumDetails = styled.div`
    display: flex;

    .LeftContent {
        position: fixed;
        margin-top: -50px;
        padding: 88px 0 0 20rem;

        @media screen and (max-width: 1366px) {
            padding: 25px 0 0 8rem;
        }

        @media screen and (max-width: 1024px) {
            position: relative;
        }

        @media screen and (max-width: 1024px) {
            padding: 25px 0 0 4rem;
        }

        .firstImage {
            padding: 60px 0 60px 0;
            border-radius: 25%;
            width: 25rem;
        }

        @media screen and (max-width: 414px) {
            .firstImage {
                width: 20rem;
            }
        }

        @media screen and (max-width: 320px) {
            .firstImage {
                width: 17rem;
            }
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

            a {
                color: #fff;
                text-decoration: none;
            }

            p {
                color: #949495;
                font-size: 14px;
                line-height: 2;
            }

            a {
                display: flex;
                color: #fff;
                font-size: 14px;
                text-decoration: none;

                .uil-linkedin {
                    margin-right: 10px;
                    font-size: 14px;
                }

                .uil-external-link-alt {
                    margin-left: 10px;
                    font-size: 14px;
                }

                margin-bottom: -100px;
            }

            ul {
                margin-top: -20px;
                
                li {
                    color: #bcbcbc;
                    list-style: none;
                    margin-left: -40px;
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
            margin-top: 100px;
            margin-left: -10px;
            display: flex;

            @media screen and (max-width: 1366px) {
                margin-top: -10px;
                margin-left: -10px;
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
            margin-left: -28rem;
            margin-top: 45rem;
        }

        @media screen and (max-width: 768px) {
            margin-left: -28rem;
            margin-top: 45rem;
        }

        @media screen and (max-width: 414px) {
            margin-left: -24rem;
            margin-top: 45rem;
        }

        @media screen and (max-width: 375px) {
            margin-left: -24rem;
            margin-top: 44rem;
        }

        @media screen and (max-width: 320px) {
            margin-left: -17rem;
            margin-top: 43rem;
        }

        .title {
            text-transform: uppercase;
            margin-left: 0px;
            text-decoration: underline;
        }

        .content {
            @media screen and (max-width: 1366px) {
                width: 40rem;
            }

            @media screen and (max-width: 1024px) {
                width: 40rem;
            }

            @media screen and (max-width: 600px) {
                width: 30rem;
            }

            @media screen and (max-width: 414px) {
                width: 23rem;
            }

            @media screen and (max-width: 375px) {
                width: 21rem;
            }

            @media screen and (max-width: 320px) {
                width: 18rem;
            }

            width: 50rem;
            margin-top: 40px;

            .description {
                line-height: 20px;
            }

            .curriculum {
                text-decoration: underline;
            }

            hr {
                margin: 30px 0px;
                width: 30%;
            }

            p {
                line-height: 20px;
            }
            
            ul {
                margin-top: 20px;

                li {
                    margin-left: -20px;
                    
                    a {
                        color: #7159c1;
                    }
                }
            }
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
    }

    .Download {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #fff;

        @media screen and (max-width: 1366px) {
            margin-left: 42rem;
            margin-top: -20px;
        }

        @media screen and (max-width: 1024px) {
            margin-left: -28rem;
            margin-top: 45rem;
        }

        @media screen and (max-width: 768px) {
            margin-left: -28rem;
            margin-top: 45rem;
        }

        @media screen and (max-width: 414px) {
            margin-left: -24rem;
            margin-top: 45rem;
        }

        @media screen and (max-width: 375px) {
            margin-left: -24rem;
            margin-top: 44rem;
        }

        @media screen and (max-width: 320px) {
            margin-left: -17rem;
            margin-top: 43rem;
        }

        .title {
            text-transform: uppercase;
            margin-left: 0px;
            text-decoration: underline;
        }

        .content {
            @media screen and (max-width: 1366px) {
                width: 40rem;
            }

            @media screen and (max-width: 1024px) {
                width: 40rem;
            }

            @media screen and (max-width: 600px) {
                width: 30rem;
            }

            @media screen and (max-width: 414px) {
                width: 23rem;
            }

            @media screen and (max-width: 375px) {
                width: 21rem;
            }

            @media screen and (max-width: 320px) {
                width: 18rem;
            }

            width: 50rem;
            margin-top: -2rem;

            .description {
                line-height: 20px;
            }

            .curriculum {
                text-decoration: underline;
            }

            hr {
                margin: 30px 0px;
                width: 30%;
            }

            p {
                line-height: 20px;
            }
            
            ul {
                margin-top: 20px;

                li {
                    margin-left: -20px;
                    
                    a {
                        color: #7159c1;
                    }
                }
            }
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
    }
`

export default CurriculumDetails