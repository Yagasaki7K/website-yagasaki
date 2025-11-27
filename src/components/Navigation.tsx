import Link from "next/link";
import styled from "styled-components";

const NavigationDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: var(--black);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-height: 6rem;

    .leftContent {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            width: 60px;
            margin-right: 15px;
            border-radius: 50px;
            filter: grayscale(1);

            @media (max-width: 768px) {
                width: 45px;
                margin-right: 10px;
            }

            @media (max-width: 480px) {
                width: 38px;
                margin-right: 8px;
            }
        }

        a {
            display: flex;
            align-items: center;
            text-decoration: none;

            &:hover {
                border: none;
            }
        }
    }

    .rightContent {
        display: flex;
        gap: 20px;
        list-style: none;

        @media (max-width: 1024px) {
            gap: 15px;
        }

        @media (max-width: 768px) {
            gap: 10px;
        }

        @media (max-width: 640px) {
            display: none;
        }
    }

    a {
        color: var(--gray);
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: var(--white);
        }

        @media (max-width: 1024px) {
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }

        @media (max-width: 480px) {
            font-size: 0.85rem;
        }
    }

    @media (max-width: 1024px) {
        padding: 12px 24px;
    }

    @media (max-width: 768px) {
        padding: 10px 20px;
    }

    @media (max-width: 640px) {
        justify-content: space-between;
        padding: 10px 15px;
    }

    @media (max-width: 480px) {
        flex-direction: row;
        align-items: center;
        padding: 8px 12px;
    }
`;

const Navigation = () => {
	return (
		<NavigationDetails>
			<div className="leftContent">
				<Link href="/">
					<img src="https://github.com/yagasaki7k.png" alt="Anderson Marlon" />
				</Link>
                        </div>

                        <div className="rightContent">
                                <Link href="/about">
                                        <li>About</li>
                                </Link>
                                <Link href="/blog">
                                        <li>Blog</li>
                                </Link>
                                <Link href="https://github.com/Yagasaki7K" target="_blank">
                                        <li>Projects</li>
                                </Link>
                                <Link href="/photos">
                                        <li>Photos</li>
                                </Link>
                                <Link href="https://x.com/yagasaki7k" target="_blank">
                                        <li>Twitter</li>
                                </Link>
                                <Link href="https://github.com/yagasaki7k" target="_blank">
                                        <li>GitHub</li>
                                </Link>
                                {/*<Link href="/#contato">
                                        <li><i className="uil uil-rss"/></li>
                                </Link>*/}
			</div>
		</NavigationDetails>
	);
};

export default Navigation;
