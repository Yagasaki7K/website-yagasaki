import React from 'react'
import ArticleDetails from '@/components/ArticleDetails'
import Link from 'next/link'
import Copyright from '@/components/Copyright'

const japanese = () => {
    return (
        <>
            <div className="overlay" />
            <title>Yagasaki.dev | Learning Japanese with me</title>
            <ArticleDetails>
                <div className='card card-page text'>
                    <div className="backToHome">
                        <Link href={'/'}><i className="uil uil-arrow-left"> Back To Home</i></Link>
                    </div>
                    <h1 className='post-title'>Learning Japanese with Me</h1>

                    <div className='post-body docs'>
                        <div>
                            <h4>Como me apresentar?</h4>
                            <pre>Watashi no namae wa YAGASAKI desu.</pre>
                        </div>

                        <div>
                            <h4>Prazer em conhecê-lo / Conto com você / Espero uma boa relação</h4>
                            <pre>Yoroshiku (Informal) / Yoroshiku Onegaishimasu (Formal)</pre>
                        </div>

                        <div>
                            <h4>Perguntar se a outra pessoa está bem - diretamente</h4>
                            <pre>Ogenki desu ka?</pre>
                        </div>

                        <div>
                            <h4>Perguntar nome de alguém</h4>
                            <pre>Onamae wa nan desu ka? (Formal) / Namae wa? (Informal)</pre>
                        </div>

                        <div>
                            <h4>Perguntar idade de alguém</h4>
                            <pre>O-toshi wa oikutsu desu ka? (Formal) / Nansai desu ka? (Informal)</pre>
                        </div>

                        <div>
                            <h4>Responder e perguntar se ela também está bem</h4>
                            <pre>Genki desu. Anata wa?</pre>
                        </div>

                        <div>
                            <h4>Perguntar onde fica tal lugar (Comum)</h4>
                            <pre>Sumimasen, PADARIA wa doko desu ka?</pre>
                        </div>

                        <div>
                            <h4>Perguntar onde fica tal lugar / Qual direção fica tal lugar (Educada/Formal)</h4>
                            <pre>Sumimasen, EKI (Estação) wa dochira desu ka?</pre>
                        </div>

                        <div>
                            <h4>É por ali</h4>
                            <pre>Atchi desu yo</pre>
                        </div>

                        <div>
                            <h4>Caso queira concorda com alguém</h4>
                            <pre>Sou desu ne</pre>
                        </div>

                        <div>
                            <h4>Elogiar uma comida</h4>
                            <pre>Kono ryouri wa oishii desu</pre>
                        </div>

                        <div>
                            <h4>Pedir algo, geralmente apontando</h4>
                            <pre>Kore o kudasai</pre>
                        </div>

                        <div>
                            <h4>Quanto custa isso?</h4>
                            <pre>Kore wa ikura desu ka?</pre>
                        </div>

                        <div>
                            <h4>Um Rãmen, Por Favor</h4>
                            <pre>RÃMEN o kudasai</pre>
                            <pre>MONSUTÃ ENAJI~ (Monster Energy) o kudasai.</pre>
                        </div>
                    </div>
                </div>
            </ArticleDetails>
            <Copyright />
        </>
    )
}

export default japanese
