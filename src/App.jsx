import ContentDetails from './components/ContentDetails'

function App() {

    return (
        <ContentDetails>
            <div className="LeftContent">
                <h2>Anderson Marlon</h2>
                <h4>Front-end Developer using React/NextJS</h4>

                <div className="ContentText">
                    <p>
                    I build solutions from Internet at <a href="https://kalify.netlify.app/" target="_blank">Kalify</a> building projects like <a href="https://discord.gg/nyTRNSV" target="_blank">Aperture Laboratories</a> and <a href="https://webessentials.netlify.app/" target="_blank">Web Essentials</a> using Javascript and love for web development. I also share what I learn and my experiences in the web on my <a href="https://yagasaki.notion.site/yagasaki/57c81f367a104390a084e3c4d3e2f4d5?v=441cd72b4d9f411880b15f6677c76962" target="_blank">blog</a>.
                    </p>
                    <p>フロントエンド開発者</p>

                    <div className="summary">
                        <h4>Summary</h4>
                        <a href="#github"><p>EVA <b>01</b> | Projects</p> <hr/> </a>
                        <a href="#blog"><p>EVA <b>02</b> | Articles</p> <hr/> </a>
                        <a href="#twitter"><p>EVA <b>03</b> | Twitter</p> <hr/> </a>
                    </div>
                </div>

                <footer>
                    <img src="https://github.com/Yagasaki7k.png" alt="Anderson Marlon" />
                    <a href="https://twitter.com/Yagasaki7K" target="_blank">
                        <i class="uil uil-twitter"></i><p>Twitter</p> <i class="uil uil-external-link-alt"></i>
                    </a>

                    <a href="https://github.com/Yagasaki7K" target="_blank">
                        <i class="uil uil-github"></i><p>GitHub</p> <i class="uil uil-external-link-alt"></i>
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
                        <i class="uil uil-star"></i>
                        <p className="starnumber"> 5</p>
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
                        <i class="uil uil-star"></i>
                        <p className="starnumber"> 0</p>
                    </div>
                </div>
                </a>

                <a href="https://github.com/ApertureLaboratory/bot-discord" target="_blank">
                <div className="boxGithub">
                    <h3>Node/Discordjs</h3>
                    <h2>ApertureLaboratory/bot-discord</h2>
                    <p>
                    GLaDOS (Genetic Lifeform and Disk Operating System) is an artificial intelligence created by Aperture Science.
                    </p>
                    <div className="star">
                        <i class="uil uil-star"></i>
                        <p className="starnumber"> 0</p>
                    </div>
                </div>
                </a>

                {/* Articles */}
                <h1 id="blog">Blog - Portuguese</h1>
                <a href="https://yagasaki.notion.site/Jhenny-s-Book-Uma-homenagem-em-app-4ec410e98bb949e582d97665ae2d07c8" target="_blank">
                <div className="boxGithub">
                    <h2>Jhenny’s Book - Uma homenagem em app</h2>
                    <p>
                    O ano era mais ou menos 2018, 2019. Eu tinha uma amiga com câncer terminal, ela gostava muito de animes e desenhos japoneses, fissurada em jogar e passar horas e horas jogando, sequer eu vi ...
                    </p>
                    <div className="star">
                        <p>Acessar a matéria <i class="uil uil-external-link-alt"></i></p>
                    </div>
                </div>
                </a>

                <a href="https://yagasaki.notion.site/Conhe-a-sobre-Developer-Relations-DevRel-63bafcb9230a4580811d577deebb3eea" target="_blank">
                <div className="boxGithub">
                    <h2>Conheça sobre Developer Relations (#DevRel)</h2>
                    <p>
                    Graças a uma live na Twitch pelo @NandoSangenetto em entrevista com a @Pachicodes, atual DevRel da Github - e uma das membras da Aperture Laboratories - pude ter uma noção e uma visão geral do que era ...
                    </p>
                    <div className="star">
                        <p>Acessar a matéria <i class="uil uil-external-link-alt"></i></p>
                    </div>
                </div>
                </a>

                <a href="https://yagasaki.notion.site/Fazendo-autentica-o-no-Google-Firebase-com-React-NextJS-221a992d244741c18226ca8ba2f31cce" target="_blank">
                <div className="boxGithub">
                    <h2>Fazendo autenticação no Google Firebase com React/NextJS</h2>
                    <p>
                    Hoje tive a triste tarefa - porém difícil para muitos e quase nunca praticado por mim -, de fazer uma autenticação do Google. O intuíto da vez era para meu projeto com a Kalify Inc, o AlôGarapa, mas vou ...
                    </p>
                    <div className="star">
                        <p>Acessar a matéria <i class="uil uil-external-link-alt"></i></p>
                    </div>
                </div>
                </a>

                <a href="https://yagasaki.notion.site/Front-end-Back-end-Fullstack-o-que-e-para-onde-ir-867d87bece3941a1a60acac60843bbd7" target="_blank">
                <div className="boxGithub">
                    <h2>Front-end, Back-end, Fullstack, o que é e para onde ir?</h2>
                    <p>
                    Front-end, back-end, fullstack, mobile developer, o que são esses nomes e para onde seguir?É uma questão simples, mas para quem está começando vejo que tem muita dificuldade em olhar aonde quer ir e o que fazer...
                    </p>
                    <div className="star">
                        <p>Acessar a matéria <i class="uil uil-external-link-alt"></i></p>
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
                                <p>Front-end Software Developer</p>
                                <p>フロントエンドソフトウェア開発者</p>
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
                                <p>Frontend Developer 👩🏻‍💻🌐📱 || Amante de Astronomia 🔭 || Science 🧬 || Living and learning 🔥 | | Student at @Rocketseat.</p>
                            </blockquote>
                        </div>
                    </div>
                </a>

            </div>
        </ContentDetails>
    )
}

export default App
