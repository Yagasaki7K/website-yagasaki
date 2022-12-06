import Link from 'next/link'
import ContentDetails from '/src/components/ContentDetails'

function App() {

    return (
        <ContentDetails>
            <div className="LeftContent">
                <h2>Anderson Marlon</h2>
                <h4>Software Developer @ Stone & Kalify Inc</h4>

                <div className="ContentText">
                    <p>
                        I build solutions from Internet at <Link href="https://kalify.vercel.app/"><a target="_blank" rel="noreferrer">Kalify</a></Link> building projects like <Link href="https://discord.gg/jhSepmE7nN"><a target="_blank" rel="noreferrer">Kalify Community</a></Link> and <Link href="https://webessentials.com.br/"><a target="_blank" rel="noreferrer">Web Essentials</a></Link> using Javascript and love for web development. I also share what I learn and my experiences in the web on my <Link href="/blog"><a>blog</a></Link> and my <Link href="/curriculum"><a>curriculum</a></Link>.
                    </p>
                    <p>フロントエンド開発者</p>

                    <div className="summary">
                        <h4>Summary</h4>
                        <a href="#github"><p>EVA <b>00</b> | Projects</p> <hr /> </a>
                        <a href="#blog"><p>EVA <b>01</b> | Articles</p> <hr /> </a>
                        <a href="#twitter"><p>EVA <b>02</b> | References</p> <hr /> </a>
                    </div>
                </div>

                <footer>
                    <img src="https://github.com/Yagasaki7k.png" alt="Anderson Marlon" />
                    <Link href="https://twitter.com/Yagasaki7K">
                        <a target="_blank" rel="noreferrer">
                            <i className="uil uil-twitter"></i>
                            <p>Twitter</p>
                            <i className="uil uil-external-link-alt"></i>
                        </a>
                    </Link>

                    <Link href="https://github.com/Yagasaki7K">
                        <a target="_blank" rel="noreferrer">
                            <i className="uil uil-github"></i>
                            <p>GitHub</p>
                            <i className="uil uil-external-link-alt"></i>
                        </a>
                    </Link>

                </footer>
            </div>

            <div className="RightContent">
                {/* Github Projects */}
                <h1 id="github">Github Projects</h1>

                <Link href="https://github.com/Yagasaki7K/website-essentials">
                    <a target="_blank" rel="noreferrer">
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
                </Link>

                <Link href="https://github.com/Yagasaki7K/website-findyourpet" target="_blank">
                    <a rel="noreferrer">
                        <div className="boxGithub">
                            <h3>React/Styled Components</h3>
                            <h2>Yagasaki7K/website-findyourpet</h2>
                            <p>
                                App to help you rescue, inform and donate your pets with love! 🐶💜🐱
                            </p>
                            <div className="star">
                                <i className="uil uil-star"></i>
                                <p className="starnumber"> 4</p>
                            </div>
                        </div>
                    </a>
                </Link>

                <Link href="https://github.com/Yagasaki7K/website-newsletterchamps">
                    <a target="_blank" rel="noreferrer">
                        <div className="boxGithub">
                            <h3>Javascript</h3>
                            <h2>Yagasaki7K/website-newsletterchamps</h2>
                            <p>
                                A page on website to display a Newsletter from Filipe Deschamps
                            </p>
                            <div className="star">
                                <i className="uil uil-star"></i>
                                <p className="starnumber"> 2</p>
                            </div>
                        </div>
                    </a>
                </Link>

                {/* Articles */}
                <h1 id="blog">Blog - Portuguese</h1>

                <Link href="https://medium.com/@yagasaki7k/react-email-de-zeno-rocha-666fd27ed5ce" target="_blank">
                    <a>
                        <div className="boxGithub">
                            <h2>React Email de Zeno Rocha</h2>
                            <p>
                                Zeno Rocha imaginou aquilo que todo desenvolvedor front-end estava cansado de tentar desenvolver. Ou até mesmo sair das ...
                            </p>
                            <div className="star">
                                <p>Acessar a matéria <i className="uil uil-external-link-alt"></i></p>
                            </div>
                        </div>
                    </a>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/ilustra%C3%A7%C3%A3o-vs-intelig%C3%AAncia-artificial-85f77cbe527" target="_blank">
                    <a>
                        <div className="boxGithub">
                            <h2>Ilustração vs Inteligência Artificial</h2>
                            <p>
                                Estava navegando no Twitter e vi, não uma, não duas, mas várias reclamações de artistas sobre “pessoas que pagaram para ter imagens geradas pela inteligência ...
                            </p>
                            <div className="star">
                                <p>Acessar a matéria <i className="uil uil-external-link-alt"></i></p>
                            </div>
                        </div>
                    </a>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/github-desktop-vs-wsl-774809289376" target="_blank">
                    <a>
                        <div className="boxGithub">
                            <h2>Github Desktop vs WSL</h2>
                            <p>
                                Quando se trata de ter dois ambientes, os problemas são maiores, mas é melhor do que ter um problema maior do que eles que possa tomar muito de seu tempo ...
                            </p>
                            <div className="star">
                                <p>Acessar a matéria <i className="uil uil-external-link-alt"></i></p>
                            </div>
                        </div>
                    </a>
                </Link>

                {/* Twitter Feed */}
                <h1 id="twitter">References</h1>

                <Link href="https://twitter.com/Yagasaki7K">
                    <a target="_blank" rel="noreferrer">
                        <div className="boxTwitter">
                            <div className="twitterImage">
                                <img src="https://github.com/Yagasaki7K.png" alt="Twitter" /></div>
                            <div className="twitterContent">
                                <blockquote>
                                    <h3>@Yagasaki7K</h3>
                                    <p>Software Developer @ Stone / Kalify Inc</p>
                                    <p>&nbsp;</p>
                                    <p>Taekwondo Fighter @ Campinas Fighters</p>
                                </blockquote>
                            </div>
                        </div>
                    </a>
                </Link>

                <Link href="https://twitter.com/sseraphini">
                    <a target="_blank" rel="noreferrer">
                        <div className="boxTwitter">
                            <div className="twitterImage">
                                <img src="https://github.com/sibelius.png" alt="Twitter" /></div>
                            <div className="twitterContent">
                                <blockquote>
                                    <h3>@Sseraphini</h3>
                                    <p>Abstraction Engineer http://patreon.com/sibelius I Bet on People and Startups #Bitcoin #Pix http://woovi.com http://sibelius.substack.com</p>
                                </blockquote>
                            </div>
                        </div>
                    </a>
                </Link>

                <Link href="https://twitter.com/WonderWanny">
                    <a target="_blank" rel="noreferrer">
                        <div className="boxTwitter">
                            <div className="twitterImage">
                                <img src="https://github.com/WonderWanny.png" alt="Twitter" /></div>
                            <div className="twitterContent">
                                <blockquote>
                                    <h3>@WonderWanny</h3>
                                    <p>Community Manager, SQL Developer, DBA {'&'} Content Creator. Nerd, sarcastic, hyperactive, obsessed with Flamingos 🦩 and Wonder Woman. From Brazil. 🇧🇷</p>
                                </blockquote>
                            </div>
                        </div>
                    </a>
                </Link>

                <Link href="https://twitter.com/pamtsx">
                    <a target="_blank" rel="noreferrer">
                        <div className="boxTwitter">
                            <div className="twitterImage">
                                <img src="https://github.com/pamellafernandes.png" alt="Twitter" /></div>
                            <div className="twitterContent">
                                <blockquote>
                                    <h3>@pamtsx</h3>
                                    <p>Frontend Developer 👩🏻‍💻🌐📱 || Amante de Astronomia 🔭 || Science 🧬</p>
                                </blockquote>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </ContentDetails>
    )
}

export default App
