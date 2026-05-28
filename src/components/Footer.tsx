import { Mail } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";

const FooterDetails = styled.div`
    .footer {
        display: flex;
        justify-content: space-between;
        max-width: 48rem;
        margin: 1rem auto;
        border-top: 1px solid var(--border);
        padding: 2rem 1rem;

        .copyright {
            display: flex;
            gap: 1rem;
            align-items: center;

            p {
                font-size: 0.9rem;
                border-right: 1px solid var(--border);
                padding-right: 1rem;
            }

            a {
                font-size: 0.9rem;
                color: var(--gray-light);
                text-decoration: none;
                transition: color 0.3s ease;

                &:hover {
                    color: var(--black);
                    text-decoration: underline;
                }
            }
        }

        .social {
            display: flex;
            gap: 20px;

            svg, img {
                width: 18px;
                height: 18px;
                color: var(--gray-light);
                transition: color 0.3s ease;

                &:hover {
                    color: var(--black);
                }
            }
        }

        @media (max-width: 820px) {
            margin: 1rem;
        }

        @media (max-width: 640px) {
            flex-direction: column;
            gap: 1.25rem;
            align-items: flex-start;

            .copyright {
                flex-wrap: wrap;
                row-gap: 0.5rem;
            }
        }

        @media (max-width: 390px) {
            margin-left: 0.75rem;
            margin-right: 0.75rem;
            padding-left: 0;
            padding-right: 0;
        }
    }
`;

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const svgTwitter = (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>)

    const svgGithub = (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>)

    return (
        <FooterDetails>
            <div className="footer">
                <div className="copyright">
                    <p>
                        © 2014-<span suppressHydrationWarning>{currentYear}</span> Anderson Marlon.
                    </p>

                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/photos">Photos</Link>
                </div>

                <div className="social">
                    <Link href="https://twitter.com/Yagasaki7K" target="_blank" rel="noopener noreferrer">
                        {svgTwitter}
                    </Link>

                    <Link href="mailto:yagasakiwanderlust@proton.me" target="_blank" rel="noopener noreferrer">
                        <Mail />
                    </Link>

                    <Link href="https://github.com/Yagasaki7K" target="_blank" rel="noopener noreferrer">
                        {svgGithub}
                    </Link>
                </div>
            </div>
        </FooterDetails>
    );
};

export default Footer;
