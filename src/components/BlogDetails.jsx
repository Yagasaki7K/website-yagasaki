import styled from 'styled-components';

const BlogDetails = styled.div`
    color: #fff;
    overflow-x: hidden;
    
    nav {
        background: #151515;
        margin-top: -1rem;
        box-shadow: 1px 2px 15px 1px #2f2f2f;

        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            list-style: none;
            
            a {
                padding: 1rem 5rem;
                color: #fff;

                @media (max-width: 768px) {
                    padding: 1rem 2rem;
                }

                @media (max-width: 414px) {
                    padding: 1rem 0.2rem;

                    li {
                        display: none;
                    }

                    img {
                        margin-left: -50px;
                    }
                }
            }

            img {
                width: 80px;
                border-radius: 50%;

                :hover {
                    filter: grayscale(100%);
                    transition: 2s;
                }
            }
        }
    }

    a {
        text-decoration: none;
        color: #fff;

        .home {
            background: #202022;
            padding: 40px 80px 15px 40px;
            margin-left: 46rem;

            @media (max-width: 1366px) {
                margin-left: 28rem;
            }
            @media (max-width: 1024px) {
                margin-left: 18rem;
            }
            @media (max-width: 768px) {
                margin-left: 8rem;
            }
            @media (max-width: 600px) {
                margin-left: 1rem;
            }
            @media (max-width: 480px) {
                width: 270px;
            }
            @media (max-width: 375px) {
                width: 210px;
            }
            
            margin-bottom: 10px;
            width: 30rem;

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

                @media (max-width: 480px) {
                    width: 320px;
                }
                @media (max-width: 375px) {
                    width: 210px;
                }
            }

            p {
                font-size: 14px;
                margin-top: 0px;
                margin-bottom: 1rem;
                color: #949495;
                width: 500px;

                @media (max-width: 480px) {
                    width: 320px;
                }
                @media (max-width: 375px) {
                    width: 210px;
                }
            }
        }
    }

    .header-post {
        width: 100%;
        height: 25rem;
        margin-top: -15px;
        object-fit: cover;

        :hover {
            transform: scale(1.01);
            transition: 1s;
        }
    }

    .post {
        margin-left: 30rem;
        width: 50%;

        @media (max-width: 1366px) {
            margin-left: 22rem;
        }
        @media (max-width: 1024px) {
            margin-left: 15rem;
            width: 60%;
        }
        @media (max-width: 768px) {
            margin-left: 9rem;
            width: 70%;
        }
        @media (max-width: 600px) {
            margin-left: 4rem;
            width: 80%;
        }
        @media (max-width: 414px) {
            margin-left: 2rem;
            width: 85%;
        }
        @media (max-width: 375px) {
            margin-left: 2rem;
            width: 85%;
        }
        

        i {
            color: #727272;
        }

        li {
            margin-bottom: 1rem;
        }

        quote {
            color: #c9f7fd;
            
            b {
                font-style: italic;
            }
        }

        code {
            background: #282a36;
            padding: 5px;
            border-radius: 5px;
            color: #c9f7fd;
        }

        a {
            text-decoration: underline;
        }
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        hr {
            width: 15%;
        }

        p {
            margin-bottom: 1rem;
        }
    }
`

export default BlogDetails