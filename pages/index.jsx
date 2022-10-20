import ContentDetails from '/src/components/ContentDetails'

function App() {

    return (
        <ContentDetails>
            <div className="LeftContent">
                <h2>Anderson Marlon</h2>
                <h4>Software Developer @ Stone / Eccaplan</h4>

                <div className="ContentText">
                    <p>
                    I build solutions from Internet at <a href="https://kalify.vercel.app/" target="_blank">Kalify</a> building projects like <a href="https://discord.gg/jhSepmE7nN" target="_blank">Aperture Laboratories</a> and <a href="https://webessentials.com.br/" target="_blank">Web Essentials</a> using Javascript and love for web development. I also share what I learn and my experiences in the web on my <a href="/blog">blog</a> and my <a href="/curriculum">curriculum</a>.
                    </p>
                    <p>フロントエンド開発者</p>

                    <div className="summary">
                        <h4>Summary</h4>
                        <a href="#github"><p>EVA <b>00</b> | Projects</p> <hr/> </a>
                        <a href="#blog"><p>EVA <b>01</b> | Articles</p> <hr/> </a>
                        <a href="#twitter"><p>EVA <b>02</b> | References</p> <hr/> </a>
                    </div>
                </div>

                <footer>
                    <img src="https://github.com/Yagasaki7k.png" alt="Anderson Marlon" />
                    <a href="https://twitter.com/Yagasaki7K" target="_blank">
                        <i className="uil uil-twitter"></i>
                        <p>Twitter</p> 
                        <i className="uil uil-external-link-alt"></i>
                    </a>

                    <a href="https://github.com/Yagasaki7K" target="_blank">
                        <i className="uil uil-github"></i>
                        <p>GitHub</p> 
                        <i className="uil uil-external-link-alt"></i>
                    </a>

                </footer>
            </div>

            <div className="RightContent">
                {/* Github Projects */}
                <h1 id="github">Github Projects</h1>

                <a href="https://github.com/Yagasaki7K/website-essentials" target="_blank">
                <div className="boxGithub">
                    <h3>NextJS/Typescript</h3>
                    <h2>Yagasaki7K/website-essentials</h2>
                    <p>
                        List of softwares essentials for your computer.
                    </p>
                    <div className="star">
                        <i className="uil uil-star"></i>
                        <p className="starnumber"> 7</p>
                    </div>
                </div>
                </a>

                <a href="https://github.com/Yagasaki7K/website-findyourpet" target="_blank">
                <div className="boxGithub">
                    <h3>React/Styled Components</h3>
                    <h2>Yagasaki7K/website-findyourpet</h2>
                    <p>
                        App to help you rescue, inform and donate your pets with love! 🐶💜🐱
                    </p>
                    <div className="star">
                        <i className="uil uil-star"></i>
                        <p className="starnumber"> 3</p>
                    </div>
                </div>
                </a>

                <a href="https://github.com/Yagasaki7K/website-newsletterchamps" target="_blank">
                <div className="boxGithub">
                    <h3>Javascript</h3>
                    <h2>Yagasaki7K/website-newsletterchamps</h2>
                    <p>
                    A page on website to display a Newsletter from Filipe Deschamps
                    </p>
                    <div className="star">
                        <i className="uil uil-star"></i>
                        <p className="starnumber"> 1</p>
                    </div>
                </div>
                </a>

                {/* Articles */}
                <h1 id="blog">Blog - Portuguese</h1>

                <a href="/blog/enviando-um-email-usando-nextjs-ou-reactjs-com-fetch">
                <div className="boxGithub">
                    <h2>Enviando um e-mail usando NextJS ou ReactJS com Fetch</h2>
                    <p>
                    Essa semana me deparei com um problema, era um problema simples, enviar uma requisição para um endpoint (POST) para enviar o nome do usuário e o e-mail dele ...
                    </p>
                    <div className="star">
                        <p>Acessar a matéria <i className="uil uil-external-link-alt"></i></p>
                    </div>
                </div>
                </a>

                <a href="/blog/habitos-desenvolvedores-produtivos">
                <div className="boxGithub">
                    <h2>14 Hábitos de Desenvolvedores Altamente Produtivos</h2>
                    <p>
                    Eu estava navegando na internet quando me deparei com esse livro. 14 Hábitos de Desenvolvedores Altamente Produtivos, escrito pelo Zeno Rocha, não cheguei a fazer a aquisição dele ...
                    </p>
                    <div className="star">
                        <p>Acessar a matéria <i className="uil uil-external-link-alt"></i></p>
                    </div>
                </div>
                </a>

                <a href="/blog/jhennys-book-uma-homenagem-em-app">
                <div className="boxGithub">
                    <h2>Jhenny’s Book - Uma homenagem em app</h2>
                    <p>
                    O ano era mais ou menos 2018, 2019. Eu tinha uma amiga com câncer terminal, ela gostava muito de animes e desenhos japoneses, fissurada em jogar e passar horas e horas jogando, sequer eu vi ...
                    </p>
                    <div className="star">
                        <p>Acessar a matéria <i className="uil uil-external-link-alt"></i></p>
                    </div>
                </div>
                </a>

                {/* Twitter Feed */}
                <h1 id="twitter">References</h1>

                <a href="https://twitter.com/Yagasaki7K" target="_blank">
                    <div className="boxTwitter">
                        <div className="twitterImage"><img src="https://github.com/Yagasaki7K.png"/></div>
                        <div className="twitterContent">
                            <blockquote>
                                <h3>@Yagasaki7K</h3>
                                <p>フロントエンドソフトウェア開発者</p>
                                <p>25y ⟡ Front-end Software Developer</p>
                                <p>BR • US • JP (CS) • FR (CS) | 葛城, 3号機</p>
                            </blockquote>
                        </div>
                    </div>
                </a>
                <a href="https://twitter.com/sseraphini" target="_blank">
                    <div className="boxTwitter">
                        <div className="twitterImage"><img src="https://github.com/sibelius.png"/></div>
                        <div className="twitterContent">
                            <blockquote>
                                <h3>@Sseraphini</h3>
                                <p>Abstraction Engineer http://patreon.com/sibelius I Bet on People and Startups #Bitcoin #Pix http://woovi.com http://sibelius.substack.com</p>
                            </blockquote>
                        </div>
                    </div>
                </a>

                <a href="https://twitter.com/WonderWanny" target="_blank">
                    <div className="boxTwitter">
                        <div className="twitterImage"><img src="https://github.com/WonderWanny.png"/></div>
                        <div className="twitterContent">
                            <blockquote>
                                <h3>@WonderWanny</h3>
                                <p>Community Manager, SQL Developer, DBA {'&'} Content Creator. Nerd, sarcastic, hyperactive, obsessed with Flamingos 🦩 and Wonder Woman. From Brazil. 🇧🇷</p>
                            </blockquote>
                        </div>
                    </div>
                </a>

                <a href="https://twitter.com/pamtsx" target="_blank">
                    <div className="boxTwitter">
                        <div className="twitterImage"><img src="https://github.com/pamellafernandes.png"/></div>
                        <div className="twitterContent">
                            <blockquote>
                                <h3>@pamtsx</h3>
                                <p>Frontend Developer 👩🏻‍💻🌐📱 || Amante de Astronomia 🔭 || Science 🧬</p>
                            </blockquote>
                        </div>
                    </div>
                </a>

            </div>
        </ContentDetails>
    )
}

export default App
