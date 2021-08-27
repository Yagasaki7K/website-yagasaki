import Link from 'next/link'

const Intro = () => {
    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h1 className="text-6xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
                Yagasaki/blog
            </h1>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                Analista de Desenvolvimento de Sistemas na&nbsp;
                <Link href="https://cenariocapital.com.br">
                    <a target="_blank">Cenário Capital</a></Link>.
            </h4>
        </section>
    )
}

export default Intro
