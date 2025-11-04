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
        }

        .p {
            font-size: 0.8rem;
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
