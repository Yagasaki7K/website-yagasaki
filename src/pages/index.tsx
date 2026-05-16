import "dayjs/locale/pt-br";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import HomeDetails from "@/components/HomeDetails";
import Footer from "@/components/Footer";
import { steam } from "@/icons/steam";
import imageLoader from "@/utils/imageLoader";

export default function Home() {
    return (
        <>
            <Head>
                <title>Anderson Marlon</title>
                <link rel="icon" type="image/png" href="https://github.com/yagasaki7k.png" />
            </Head>

            <Navigation />

            <HomeDetails>
                <div className="hero">
                    <div className="content">
                        <h1>Anderson Marlon</h1>
                        <p>
                            Hey! I’m Anderson Marlon, a software engineer and indie <Link href="/terminal">hacker</Link>.
                        </p>
                        <div className="p">
                            Working at{" "}
                            <div className="link">
                                <Image src="https://theanitube.vercel.app/logo.png" alt="AniTube" width={15} height={15} sizes="15px" loader={imageLoader} priority />
                                <Link href="https://theanitube.vercel.app/" target="_blank">
                                    AniTube
                                </Link>
                            </div>
                        </div>
                        <div className="p">
                            Creator of
                            <div className="link">
                                <Image src="https://kotame.com.br/logo.png" alt="Kota App" width={15} height={15} sizes="15px" loader={imageLoader} priority />
                                <Link href="https://kotame.com.br/" target="_blank">
                                    Kota App
                                </Link>
                            </div>
                            /
                            <div className="link">
                                <Image src={steam} alt="Steamfolio" width={15} height={15} sizes="15px" />
                                <Link href="https://steamfolio.vercel.app/" target="_blank">
                                    Steamfolio
                                </Link>
                            </div>
                            /
                            <div className="link">
                                <Image src="https://webessentials.vercel.app/favicon.png" alt="Essentials" width={15} height={15} sizes="15px" loader={imageLoader} priority />
                                <Link href="https://webessentials.vercel.app/" target="_blank">
                                    Essentials
                                </Link>
                            </div>
                            /
                            <div className="link">
                                <Image src="https://findyourpet.vercel.app/logo.png" alt="FindYourPet" width={15} height={15} sizes="15px" loader={imageLoader} />
                                <Link href="https://findyourpet.vercel.app/" target="_blank">
                                    FindYourPet
                                </Link>
                            </div>
                            /
                            <div className="link">
                                <Image src="https://github.com/Yagasaki7K.png" alt="Liquid Glass" width={15} height={15} sizes="15px" loader={imageLoader} />
                                <Link href="https://github.com/Yagasaki7K/feature-liquidglass" target="_blank">
                                    Liquid Glass
                                </Link>
                            </div>
                        </div>
                        <div className="p">
                            Core team of
                            <div className="link">
                                <Image src="https://github.com/engide.png" alt="Engide" width={15} height={15} sizes="15px" loader={imageLoader} />
                                <Link href="https://github.com/engide" target="_blank">
                                    Engide
                                </Link>
                            </div>
                            /
                            <div className="link">
                                <Image src="https://github.com/kindredsoftware.png" alt="Kindred Software" width={15} height={15} sizes="15px" loader={imageLoader} />
                                <Link href="https://github.com/kindredsoftware" target="_blank">
                                    Kindred Software
                                </Link>
                            </div>
                            /
                            <div className="link">
                                <Image src="https://github.com/kalify-inc.png" alt="Kalify Community" width={15} height={15} sizes="15px" loader={imageLoader} />
                                <Link href="https://github.com/kalify-inc" target="_blank">
                                    Kalify Community
                                </Link>
                            </div>
                        </div>
                        <p>
                            My passion lies in envisioning incredible projects and bringing them to life. I'm passionate about creating solutions that
                            help me and others be more productive and enjoy the creative process. You can find a{" "}
                            <Link href="https://github.com/Yagasaki7K" target="_blank">
                                full list of my projects here
                            </Link>
                            .
                        </p>
                        <p>
                            I write <Link href="/blog">blog posts</Link> about open source, programming, etc.
                        </p>
                        <p>
                            Outside of programming, I enjoy games and reading. I post <Link href="/photos">photos on this page</Link>. I also love
                            anime, movies, and series, and I'm trying to list my <Link href="/media">media consumption</Link>. Additionally, if you're
                            interested, here's a list of the <Link href="/use">hardware/software I use</Link>.
                        </p>
                        <p>
                            I've lived in Campinas, in the interior of São Paulo state, Brazil, for some time now. If you're nearby, get in touch so
                            we can grab a coffee or work together.
                        </p>
                        <hr />
                        <p>Find me on</p>
                        <Link href="https://github.com/yagasaki7k" target="_blank">
                            GitHub
                        </Link>
                        &nbsp;
                        <Link href="https://twitter.com/yagasaki7k" target="_blank">
                            Twitter
                        </Link>
                        &nbsp;
                        <Link href="https://discord.gg/jhSepmE7nN" target="_blank">
                            Discord Server
                        </Link>
                        &nbsp;
                        <Link href="https://instagram.com/cdnmv" target="_blank">
                            Instagram
                        </Link>
                        <p>
                            Or mail me at <code>yagasakiwanderlust@proton.me</code>
                        </p>
                    </div>
                </div>
            </HomeDetails>
            <Footer />
        </>
    );
}
