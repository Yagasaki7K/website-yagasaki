import Link from "next/link";
import styled from "styled-components";

const FooterDetails = styled.div`
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        margin: 0rem auto;
        max-width: 42rem;

        p {
            margin: 1rem 0;
            line-height: 1.8rem;
            font-size: 1rem;

            @media (max-width: 1024px) {
                font-size: 0.95rem;
                line-height: 1.7rem;
            }

            @media (max-width: 768px) {
                font-size: 0.9rem;
                text-align: center;
            }

            @media (max-width: 480px) {
                font-size: 0.85rem;
                line-height: 1.6rem;
            }
        }

        .p {
            font-size: 0.8rem;
            margin-bottom: 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 5px;

            @media (max-width: 768px) {
                font-size: 0.75rem;
                flex-direction: column;
                align-items: center;
            }

            @media (max-width: 480px) {
                font-size: 0.7rem;
                margin-bottom: 8px;
            }

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

                @media (max-width: 1024px) {
                    font-size: 0.85rem;
                }

                @media (max-width: 768px) {
                    font-size: 0.8rem;
                    padding: 2px 6px;
                }

                @media (max-width: 480px) {
                    font-size: 0.75rem;
                    padding: 2px 5px;
                }

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

                    @media (max-width: 768px) {
                        width: 13px;
                        margin-right: 4px;
                    }

                    @media (max-width: 480px) {
                        width: 12px;
                        margin-right: 3px;
                    }
                }
            }
        }

        @media (max-width: 1024px) {
            max-width: 36rem;
        }

        @media (max-width: 820px) {
            max-width: 32rem;
        }

        @media (max-width: 768px) {
            text-align: center;
            max-width: 90%;
        }

        @media (max-width: 480px) {
            padding: 1rem;
            max-width: 100%;
        }

        @media (max-width: 390px) {
            padding: 0.75rem;
        }
    }
`;

const Footer = () => {
	return (
		<FooterDetails>
			<div className="footer">
				<div className="p">
					<p>
						<Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
							CC BY-NC-SA 4.0
						</Link>{" "}
						- 2014-PRESENT © Anderson Marlon AKA Yagasaki
					</p>
				</div>
			</div>
		</FooterDetails>
	);
};

export default Footer;
