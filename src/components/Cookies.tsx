import React, { useEffect, useState } from "react";
import getOSAndSendToDiscord from "@/utils/getOSAndSendToDiscord";
import styled from "styled-components";
import Link from "next/link";

const CookieDetails = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 62rem;
    height: 190px;
    background: var(--black);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    z-index: 3;
    border-radius: 10px 10px 0 0;
    padding: 0 2rem;

    @media (max-width: 1920px) and (min-width: 1366px) {
        font-size: 0.9rem;
    }

    @media (max-width: 1365px) and (min-width: 1024px) {
        font-size: 0.8rem;
        width: 45rem;
    }

    @media (max-width: 1023px) and (min-width: 768px) {
        font-size: 0.7rem;
        width: 35rem;
    }

    @media (max-width: 768px) {
        font-size: 0.6rem;
        padding: 2rem 1rem;
        width: 100%;
        border-radius: 0;
    }

    p {
        margin-top: 1rem;

        a {
            color: var(--red);
            text-decoration: underline;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .header {
        display: flex;
        padding-top: 15px;

        img {
            width: 100px;
            margin-right: 2rem;
        }

        .title {
            width: 50rem;

            h1 {
                font-size: 1.2rem;
            }

            p {
                font-size: 0.9rem;
            }
        }
    }

    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        button {
            margin: 0 10px;
            padding: 5px 20px;
            font-size: 1rem;
            font-weight: bold;
            background: var(--white);
            color: var(--black);
            border: none;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease;

            @media (max-width: 768px) {
                font-size: 0.8rem;
            }

            @media (max-width: 320px) {
                font-size: 0.7rem;
            }

            &:hover {
                color: var(--red);
                transform: scale(1.05);
            }
        }
    }
`;

const Cookies = () => {
	const [showCookies, setShowCookies] = useState(true);

	const getInfosAboutCookies = () => {
		localStorage.setItem("cookiesAccepted", "true");
		setShowCookies(false);
		getOSAndSendToDiscord();
	};

	const turnOffCookies = () => {
		setShowCookies(false);
		localStorage.setItem("cookiesAccepted", "false");
	};

	useEffect(() => {
		if (localStorage.getItem("cookiesAccepted")) {
			setShowCookies(false);
		}
	}, []);

	return (
		showCookies && (
			<CookieDetails>
				<div className="header">
					<img src="/cookie.png" alt="cookie" />
					<div className="title">
						<h1>A Campinas Fighters usa cookies para tornar sua experiência ainda melhor!</h1>
						<p>
							Usamos cookies para oferecer a melhor experiência possível ao usuário. Ao usar os serviços da <strong>Engide</strong>, você aceita o uso de cookies de acordo com
							suas seleções. Para mais informações, consulte nossa{" "}
							<Link href="https://engide.com.br/legal" target="_blank">
								Políticas de Privacidade
							</Link>
							.
						</p>
					</div>
				</div>
				<div className="content">
					<div className="buttons">
						<button onClick={() => getInfosAboutCookies()}>Aceitar Cookies</button>
						<button onClick={() => turnOffCookies()}>Rejeitar Cookies</button>
					</div>
				</div>
			</CookieDetails>
		)
	);
};

export default Cookies;
