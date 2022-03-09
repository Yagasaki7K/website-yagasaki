import HomeDetails from '../components/custom/HomeDetails'
import HeaderMain from '../components/custom/HeaderMain'
import MainContent from '../components/custom/MainContent'

export const Index = () => {
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

                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
            </head>

            <HomeDetails>
                <HeaderMain/>
                <MainContent/>
            </HomeDetails>
        </>
    )
}

export default Index