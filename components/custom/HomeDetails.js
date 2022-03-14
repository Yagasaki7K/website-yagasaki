import { COLOR } from './ConstantColors'
import styled from 'styled-components'

const HomeDetails = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
        color: ${COLOR.textColor};
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
        /* color: ${props => props.COLOR.textColor};
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
        color: ${props => props.COLOR.textColor};
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
        color: ${props => props.COLOR.textColor};
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-0-75); 
    }

    .home__description {
        margin-bottom: var(--mb-2);
    }

    .home__scroll {
        display: none;
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
        color: ${props => props.COLOR.textColor};
        font-weight: var(--font-medium);
        margin-right: var(--mb-0-25);
    }

    //

    .button {
        display: inline-block;
        background: var(--first-color);
        color: #fff;
        padding: 1rem;
        border-radius: .5rem;
        font-weight: var(--font-medium);
    }

    .button:hover {
        background: var(--first-color-alt);
    }

    .button__icon {
        font-size: 1.25rem;
        margin-left: var(--mb-0-5);
        transition: .3s;
    }

    .button__white {
        background: #fff;
        color: var(--first-color)
    }

    .button__white:hover {
        background: #fff;
    }

    .button--flex {
        display: inline-flex;
        align-items: center;
    }

    .button--small {
        padding: .75rem 1rem;
    }

    .button--link {
        padding: 0;
        background-color: transparent;
        color: var(--first-color);
    }

    .button--link:hover {
        background: transparent;
        color: var(--first-color-alt);
    }

    //

    .about__img {
        width: 200px;
        border-radius: .5rem;
        justify-self: center;
        align-self: center;
    }

    .about__description {
        text-align: center;
        margin-bottom: var(--mb-2-5);
    }

    .about__info {
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--mb-2-5);
    }

    .about__info-title {
        font-size: var(--h2-font-size);
        font-weight: var(--font-semi-bold);
        color: var(--title-color);
    }

    .about__info-name {
        font-size: var(--small-font-size);
    }

    .about__info-title, .about__info-name {
        display: block;
        text-align: center;
    }

    .about__buttons {
        display: flex;
        justify-content: center;
    }

    //

    .skills__container {
        row-gap: 0;
    }

    .skills__header {
        display: flex;
        align-items: center;
        margin-bottom: var(--mb-2-5);
        cursor: pointer;
    }

    .skills__icon, .skills__arrow {
        font-size: 2rem;
        color: var(--first-color);
    }

    .skills__icon {
        margin-right: var(--mb-0-75);
    }

    .skills__title {
        font-size: var(--h3-font-size);
    }

    .skills__subtitle {
        font-size: var(--small-font-size);
        color: var(--text-color-light);
    }

    .skills__arrow {
        margin-left: auto;
        transition: .4s;
    }

    .skills__list {
        row-gap: 1.5rem;
        padding-left: 2.7rem;
    }

    .skills_titles {
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--mb-0-5);
    }

    .skills__name {
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
    }

    .skills__bar, .skills_percentage {
        height: 5px;
        border-radius: .25rem;
    }

    .skills_bar {
        background: var(--first-color-lighter);
    }

    .skills_percentage {
        display: block;
        background: var(--first-color);
    }

    .skills__html {
        width: 98%;
    }

    .skills__css {
        width: 90%;
    }

    .skills__js {
        width: 76%;
    }

    .skills__react {
        width: 68%;
    }

    .skills__node {
        width: 42%;
    }

    .skills__firebase {
        width: 49%;
    }

    .skills__php {
        width: 41%;
    }

    .skills__photoshop {
        width: 72%;
    }

    .skills__figma {
        width: 57%;
    }

    .skills__xd {
        width: 42%;
    }

    .skills__close .skill__list {
        height: 0;
        overflow: hidden;
    }

    .skills__open .skill_list {
        height: max-content;
        margin-bottom: var(--mb-2-5);
    }

    .skills__open .skills__arrow {
        transform: rotate(-180deg);
    }

    //

    .qualification__tabs {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: var(--mb-2);
    }

    .qualification__button {
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        cursor: pointer;
    }

    .qualification__button:hover {
        color: var(--first-color);
    }

    .qualification__icon {
        font-size: 1.8rem;
        margin-right: var(--mb-0-25);
    }

    .qualification__data {
        display: grid;
        grid-template-columns: 1fr max-content 1fr;
        column-gap: 1.5rem;
    }

    .qualification__title {
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
    }

    .qualification__subtitle {
        display: inline-block;
        font-size: var(--small-font-size);
        margin-bottom: var(--mb-1);
    }

    .qualification__calendar {
        font-size: var(--smaller-font-size);
        color: var(--text-color-light);
    }

    .qualification__rounder {
        display: inline-block;
        width: 13px;
        height: 13px;
        background: var(--first-color);
        border-radius: 50%;
    }

    .qualification__line {
        display: block;
        width: 1px;
        height: 100%;
        background: var(--first-color);
        transform: translate(6px, -7px);
    }

    .qualification [data-content] {
        display: none;
    }

    .qualification__active[data-content] {
        display: block;
    }

    .qualification__button.qualification__active {
        color: var(--first-color);
    }

    //

    .services__container {
        gap: 1.5rem;
        grid-template-columns: repeat(2,1fr);
    }

    .services__content {
        position: relative;
        background: var(--container-color);
        padding: 3.5rem .5rem 1.25rem 1.5rem;
        border-radius: .25rem;
        box-shadow: 0 2px 4px rgba(0,0,0,.15);
        transition: .3s;
    }

    .services__content:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,.15);
    }

    .services__icon {
        display: block;
        font-size: 1.5rem;
        color: var(--first-color);
        margin-bottom: var(--mb-1);
    }

    .services__title {
        font-size: var(--h3-font-size);
        margin-bottom: var(--mb-1);
        font-weight: var(--font-medium);
    }

    .services__button {
        cursor: pointer;
        font-size: var(--small-font-size);
    }

    .services__button:hover .button__icon{
        transform: translateX(.25rem);
    }

    .services__modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.5);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        z-index: var(--z-modal);
        opacity: 0;
        visibility: hidden;
        transition: .3s;
    }

    .services__modal-content {
        position: relative;
        background: var(--container-color);
        padding: 1.5rem;
        border-radius: .5rem;
    }

    .services__modal-services {
        row-gap: 1rem;
    }

    .services__modal-service {
        display: flex;
    }

    .services__modal-title {
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-1-5);
    }

    .services__modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.5rem;
        color: var(--first-color);
        cursor: pointer;
    }

    .services__modal-icon {
        color: var(--first-color);
        margin-right: var(--mb-0-25);
    }

    //

    .active-modal {
        opacity: 1;
        visibility: visible;
    }

    //

    .portfolio__container {
        overflow: initial;
    }

    .portfolio__content {
        padding: 0 1.5rem;
    }

    .portfolio__img {
        width: 265px;
        border-radius: .5rem;
        justify-self: center;
    }

    .portfolio__title {
        font-size: var(--h3-font-size);
        margin-bottom: var(--mb-0-5);
    }

    .portfolio__description {
        margin-bottom: var(--mb-0-75);
    }

    .portfolio__button:hover .button__icon {
        transform: translateX(.25rem)
    }

    .swiper-button-prev::after, .swiper-button-next::after {
        content: '';
    }

    .swiper-portfolio-icon {
        font-size: 2rem;
        color: var(--first-color);
    }

    .swiper-button-prev {
        left: -.5rem;
    }

    .swiper-button-next {
        right: -.5rem;
    }

    .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: -2.5rem;
    }

    .swiper-pagination-bullet-active {
        background: var(--first-color);
    }

    .swiper-button-prev, .swiper-button-next, .swiper-pagination-bullet {
        outline: none;
    }

    //

    .project {
        text-align: center;
    }

    .project__bg {
        background: var(--first-color-second);
        padding-top: 3rem;
    }

    .project__title {
        font-size: var(--h2-font-size);
        margin-bottom: var(--mb-0-75);
    }

    .project__description {
        margin-bottom: var(--mb-1-5);
    }

    .project__title, .project__description {
        color: #fff;
    }

    .project__img {
        width: 232px;
        justify-self: center;
    }

    //

    .testimonial__data, .testimonial__header {
        display: flex;
    }

    .testimonial__data {
        justify-content: space-between;
        margin-bottom: var(--mb-1);
    }

    .testimonial__img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: var(--mb-0-75)
    }

    .testimonial__name {
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
    }

    .testimonial__client {
        font-size: var(--small-font-size);
        color: var(--text-color-light);
    }

    .testimonial__description {
        margin-bottom: var(--mb-2-5);
    }

    .testimonial__icon-star {
        color: var(--first-color)
    }

    .swiper-container .swiper-pagination-testimonial {
        bottom: 0;
    }

    //

    .contact__container {
        row-gap: 3rem;
    }

    .contact_information {
        display: flex;
        margin-bottom: var(--mb-2);
    }

    .contact__icon {
        font-size: 2rem;
        color: var(--first-color);
        margin-right: var(--mb-0-75);
    }

    .contact__title {
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
    }

    .contact__subtitle {
        font-size: var(--small-font-size);
        color: var(--text-color-light);
    }

    .contact__content {
        background: var(--input-color);
        border-radius: .5rem;
        padding: .75rem 1rem .25rem;
    }

    .contact__label {
        font-size: var(--smaller-font-size);
        color: var(--text-color);
    }

    .contact__input {
        width: 100%;
        background: var(--input-color);
        color: var(--text-color);
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
        border: none;
        outline: none;
        padding: .25rem .5rem .5rem 0;
    }
`

export default HomeDetails