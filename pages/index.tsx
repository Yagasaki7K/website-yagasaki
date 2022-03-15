import { useEffect } from 'react'

import HeaderMain from '../components/custom/HeaderMain'
import MainContent from '../components/custom/MainContent'
import About from '../components/custom/About'
import Qualification from '../components/custom/Qualification'
import Services from '../components/custom/Services'
import Portfolio from '../components/custom/Portfolio'
import ProjectMind from '../components/custom/ProjectMind'
import Testimonial from '../components/custom/Testimonial'
import Contact from '../components/custom/Contact'
import Footer from '../components/custom/Footer'
import ScrollTop from '../components/custom/ScrollTop'

export const Index = () => {

    useEffect(() => {
        const scrollY = window.pageYOffset
        
        function scrollHeader() {
            const navigation = document.getElementById('header')

            if (scrollY >= 200) {
                navigation!.classList.add('scroll-header'); 
            } else {
                navigation!.classList.remove('scroll-header');
            } 

            window.addEventListener('scroll', scrollHeader)
        }

        function scrollUp() {
            const scrollUpTop = document.getElementById('scroll-up')

            if (scrollY >= 560) {
                scrollUpTop!.classList.add('scroll-up'); 
            } else {
                scrollUpTop!.classList.remove('scroll-up');
            }

            window.addEventListener('scroll', scrollUp)
        }

    }, [])

    return(
        <>
            <head>
                <title>Anderson Marlon // Dev {"&"} Design</title>
                <meta name="description" content="You search for professional Developer in Campinas? Contact me for your job."/>
                <meta name="keywords" content="portfolio, professional, profissional, reactjs, react
                anderson, marlon, tomaz, alves, yagasaki, github, freelancer, freela, free, lancer, front-end web developer, 
                front, end, web, developer, HTML, CSS, js, javascript, nextjs, web design,"/>

                <meta name="author" content="Anderson Marlon"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, user-scalable=1"/>

                {/* Unicons */}
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>

                {/* Custom CSS */}
                <link rel="stylesheet" href="../../../styles/custom.css"/>
                
            </head>

            <HeaderMain/>
            <MainContent/>
            <About/>
            <Qualification/>
            <Services/>
            <Portfolio/>
            <ProjectMind/>
            <Testimonial/>
            <Contact/>
            <Footer/>
            <ScrollTop/>
        </>
    )
}

export default Index