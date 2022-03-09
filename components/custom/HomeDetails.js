import styled from 'styled-components'

const HomeDetails = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    :root {
        --header-height: 3rem;
        --hue-color: 250;

        --first-color: hsl(var(--hue-color), 69%, 61%);
        --first-color-second: hsl(var(--hue-color), 69%, 61%);
        --first-color-alt: hsl(var(--hue-color), 57%, 53%);
        --first-color-lighter: hsl(var(--hue-color), 57%, 53%);
        --title-color: hsl(var(--hue-color), 8%, 15%);
        --text-color: hsl(var(--hue-color), 8%, 45%);
        --text-color-light: hsl(var(--hue-color), 8%, 65%);
        --input-color: hsl(var(--hue-color), 70%, 96%);
        --body-color: hsl(var(--hue-color), 60%, 99%);
        --container-color: #fff;

        --body-font: 'Poppins', sans-serif;

        --big-font-size: 2rem;
        --h1-font-size: 1.5rem;
        --h2-font-size: 1.25rem;
        --h3-font-size: 1.125rem;
        --normal-font-size: .938rem;
        --small-font-size: .813rem;
        --smaller-font-size: .75rem;

        --font-medium: 500;
        --font-semi-bold: 600;

        --mb-0-25: .25rem;
        --mb-0-5: .5rem;
        --mb-0-75: .75rem;
        --mb-1: 1rem;
        --mb-1-5: 1.5rem;
        --mb-2: 2rem;
        --mb-2-5: 2.5rem;
        --mb-3: 3rem;

        --z-tooltip: 10;
        --z-fixed: 100;
        --z-modal: 1000;
    }

    @media screen and (min-width: 968px) {
        :root {
            --big-font-size: 3rem;
            --h1-font-size: 2.25rem; 
            --h2-font-size: 1.5rem;
            --h3-font-size: 1.25rem;
            --normal-font-size: 1rem; 
            --small-font-size: .875rem;
            --smaller-font-size: .813rem;
        }
    }

    //

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0 0 var(--header-height) 0;
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
        background: var(--body-color);
        color: var(--text-color);
    }

    h1, h2, h3, h4 {
        color: var(--title-color);
        font-weight: var(--font-semi-bold);
    }

    ul {
       list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    //

    .section {
        padding: 2rem 0 4rem;
    }

    .section__title {
        font-size: var(--h1-font-size);
    }

    .section__subtitle {
        display: block;
        font-size: var(--small-font-size);
        margin-bottom: var(--mb-3);
    }

    .section__title, .section__subtitle {
        text-align: center;
    }

    //

    .container {
        max-width: 768px;
        margin-left: var(--mb-1-5);
        margin-right: var(--mb-1-5);
    }

    .grid {
        display: grid;
        gap: 1.5rem;
    }

    .header {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: var(--z-fixed);
        background: var(--first-color);
        /* color: var(--text-color);
        padding: var(--mb-0-5) var(--mb-0-25);
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25); */
    }

    .nav {
        max-width: 968px;
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav__logo, .nav__toggle {
        color: var(--text-color);
        font-weight: var(--font-medium);
    }

    .nav__logo:hover {
        color: var(--first-color);
    }

    .nav__toggle {
        font-size: 1.1rem;
        cursor: pointer;
    }

    .nav__toggle:hover {
        color: var(--first-color);
    }

    @media screen and (max-width: 767px) {
        .nav__menu {
            position: fixed;
            bottom: -100%;
            left: 0;
            width: 100%;
            background: var(--body-color);
            padding: 2rem 1.5rem 4rem;
            box-shadow: 0 -1px 4px rgba(0,0,0.15);
            border-radius: 1.5rem 1.5rem 0 0;
            transition: .3s;
        }
    }

    .nav__list {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .nav__link {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: var(--small-font-size);
        color: var(--title-color);
        font-weight: var(--font-medium);
    }

    .nav__link:hover {
        color: var(--first-color);
    }

    .nav__icon {
        font-size: 1.2rem;
    }

    .nav__close {
        position: absolute;
        right: 1.3rem;
        bottom: .5rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--first-color);
    }

    .nav__close:hover {
        color: var(--first-color-alt);
    }

    .show-menu {
        bottom: 0;
    }

    .home__container {
        gap: 1rem;
    }

    .home__content {
        grid-template-columns: .5fr 3fr;
        padding-top: 3.5rem;
        align-items: center;
    }

    .home__social {
        display: grid;
        grid-template-columns: max-content;
        row-gap: 1rem;
    }

    .home__social-icon {
        font-size: 1.25rem;
        color: var(--first-color);
    }

    .home__social-icon:hover {
        color: var(--first-color-alt);
    }

    .home__blob {
        width: 200px;
        fill: var(--first-color);
    }

    .home__blob-img {
        width: 170px;
    }

    .home__data {
        grid-column: 1/3;
    }

    .home__title {
        font-size: var(--big-font-size);
    }

    .home__subtitle {
        font-size: var(--h3-font-size);
        color: var(--text-color);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-0-75); 
    }

    .home__description {
        margin-bottom: var(--mb-2);
    }

    .home__scroll {
        /* display: none; */
    }

    .home__scroll-button {
        color: var(--first-color);
        transition: .3s;
    }

    .home__scroll-button:hover {
        transform: translateY(.25rem)
    }

    .home__scroll-mouse {
        font-size: 2rem;
    }

    .home__scroll-name {
        font-size: var(--small-font-size);
        color: var(--text-color);
        font-weight: var(--font-medium);
        margin-right: var(--mb-0-25);
    }

`

export default HomeDetails