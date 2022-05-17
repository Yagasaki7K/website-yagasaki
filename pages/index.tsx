import HomeDetails from '../components/custom/HomeDetails'

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
                <div>
                    <a href="https://github.com/Yagasaki7K" target="_blank">
                        <img src="/assets/avatar.jpg" alt="Avatar"/>
                    </a>
                </div>
                <div>
                    <h2><span>Anderson Marlon</span></h2>
                    <h4><span>Front-end Developer</span></h4>
                    <p>Age: {new Date().getFullYear() - 1997} years</p>
                    <p>Email: <a href="mailto:anderson18.marlon@gmail.com" className="hover-underline-animation">anderson18.marlon@gmail.com</a></p>
                    <p>Location: Campinas - SP</p>
                    <p>Phone: <a href="tel:+5519 9 9801-8174" className="hover-underline-animation">(19) 9 9801-8174</a></p>
                    <p><a href="/blog" className="hover-underline-animation">Blog in Portuguese</a> | <a href="/pdf/AndersonENUS.pdf" className="hover-underline-animation">Skillset</a></p>
                    <a href="https://github.com/Yagasaki7K" target="_blank"><i className="uil uil-github"></i></a>
                    <a href="https://twitter.com/Yagasaki7K" target="_blank"><i className="uil uil-twitter"></i></a>
                    <a href="https://instagram.com/Yagasaki.dev" target="_blank"><i className="uil uil-instagram"></i></a>
                    <a href="https://linkedin.com/in/andersonmarlon" target="_blank"><i className="uil uil-linkedin"></i></a>
                </div>
            </HomeDetails>
        </>
    )
}

export default Index