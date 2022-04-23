import React from 'react'

const Container = () => {
  return (
    <>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/pdf/AndersonENUS.pdf">Curriculum</a></li>
                <li><a href="/"><img src="/assets/favicon.png"/></a></li>
                <li><a href="/blog">Blog (PT-BR)</a></li>
                <li><a href="http://github.com/Yagasaki7K" target="_blank">Github</a></li>
            </ul>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <img src="https://github.com/Yagasaki7K.png" className="firstImg"/>
                </div>

                <div class="col-sm" id="text-container">
                    <h2>Front-End Developer</h2>

                    <hr className="line"/> 

                    <p>
                        Hello, my name is <strong>Anderson Marlon</strong>, but I known as <strong>Yagasaki</strong> for the social medias in developer's communitys and in games. 
                    </p>

                    <p>Front-end Developer and Founder/CEO at <a href="https://twitter.com/KalifyInc" target="_blank">Kalify Inc</a>.</p>
                        
                    <p>
                        I'm Front-end Developer since been 2014, when I did my 
                        first course in Web Design and 
                        Design Graphic by Mac Poli in Campinas, Brazil.
                    </p>

                    <p>
                        Daily I using the stack Javascript (React/NextJS) and develop ideas 
                        and solutions for the society together with my community (Aperture Laboratories).
                    </p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm" id="text-container2">
                    <h2>Additional Informations</h2>

                    <hr className="right"/>

                    <p>     
                        <b> · Introduction Computer Science by University Harvard on 03/22.<br/>
                            · Third Place on Hackathon by AMBEV with Shawee on 12/20.<br/>
                            · Web Design: Dev in PHP, HTML, CSS and JavaScript on 01/19.<br/>
                            · Web Programming for Scientific Dissemination on 01/19.
                        </b>

                        <br/><br/>

                        <p>
                            You can see more information about me in my <a href="/pdf/AndersonENUS.pdf" target="_blank">curriculum</a>.
                        </p>
                    </p>

                    <h2>Latest Articles (PT-BR)</h2>
                    <p>
                        <a href="/blog/posts/devrel">Conheça sobre Developer Relations (#DevRel) •</a> <br/>
                        <a href="/blog/posts/authfirebase">Fazendo autenticação com Google/Firebase com ReactJS/NextJS •</a> <br/>
                        <a href="/blog/posts/chell-series">O que é a Chell Series da Aperture Laboratories? •</a> <br/>
                        <a href="/blog/posts/roadmap">Front-end, Back-end, Fullstack, o que é e para onde ir? •</a>
                    </p>
                    <p>
                        Interested? Please contact me on <a href="mailto:anderson18.marlon@gmail.com">Email</a> or <a href="https://api.whatsapp.com/send?phone=5519998018174" target="_blank">Whatsapp Web</a><br/>
                    </p>
                    </div>
                    <div class="col-sm">
                        <img src="/assets/image.png" className="secondImg"/>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Container