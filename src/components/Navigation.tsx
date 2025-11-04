import Link from "next/link";
import React from "react";
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
    }

    a {
        color: var(--gray);
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: var(--white);
        }
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
					<li>
						<i className="uil uil-camera" />
					</li>
				</Link>
				<Link href="https://x.com/yagasaki7k" target="_blank">
					<li>
						<i className="uil uil-twitter" />
					</li>
				</Link>
				<Link href="https://github.com/yagasaki7k" target="_blank">
					<li>
						<i className="uil uil-github" />
					</li>
				</Link>
				{/*<Link href="/#contato">
					<li><i className="uil uil-rss"/></li>
				</Link>*/}
			</div>
		</NavigationDetails>
	);
};

export default Navigation;
