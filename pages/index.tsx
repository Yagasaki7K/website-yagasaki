import HomeDetails from '../components/custom/HomeDetails'
import Container from '../components/custom/Container'
import Footer from '../components/custom/Footer'

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

                {/* Unicons */}
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,700,900" rel="stylesheet"/> 
                
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                
            </head>

            <HomeDetails>
                <Container/>
                <Footer/>
            </HomeDetails>
        </>
    )
}

export default Index