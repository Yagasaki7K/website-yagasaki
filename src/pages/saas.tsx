import "dayjs/locale/pt-br";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import HomeDetails from "@/components/HomeDetails";
import Footer from "@/components/Footer";
import imageLoader from "@/utils/imageLoader";

export default function Home() {
    return (
        <>
            <Head>
                <title>SaaS - Anderson Marlon</title>
                <link rel="icon" type="image/png" href="https://github.com/yagasaki7k.png" />
            </Head>

            <Navigation />

            <HomeDetails>
                <div className="hero-saas">
                    <div className="content">
                        <h1>Anderson Marlon - Projects</h1>
                        <p>Hey! I’m Anderson Marlon, a software engineer and indie hacker.</p>

                        <div className="p">
                            <strong>Zentry Store</strong>&nbsp;by
                            <div className="link">
                                <Image src="https://github.com/leafso.png" alt="LeafSoftware" width={20} height={20} sizes="20px" loader={imageLoader} />
                                @LeafSoftware
                            </div>
                            - A alternative Steam game store
                        </div>

                        <div className="p">
                            <strong>Sintonia São Paulo</strong>&nbsp;by
                            <div className="link">
                                <Image src="https://github.com/byteonegroup.png" alt="ByteOne Group" width={20} height={20} sizes="20px" loader={imageLoader} />
                                @ByteOne Group
                            </div>
                            - A FiveM (GTA RP) server
                        </div>

                        <div className="p">
                            <strong>AfterFive (Outdated)</strong>&nbsp;by
                            <div className="link">
                                <Image src="https://github.com/leafso.png" alt="LeafSoftware" width={20} height={20} sizes="20px" loader={imageLoader} />
                                @LeafSoftware
                            </div>
                            - The Luxury escort website
                        </div>

                        <div className="p">
                            <strong>ConvideSe (Outdated)</strong>&nbsp;by
                            <div className="link">
                                <Image src="https://github.com/engide.png" alt="Engide" width={20} height={20} sizes="20px" loader={imageLoader} />
                                @Engide
                            </div>
                            - A saas to generate invites for party/birthday/relationship
                        </div>

                        <div className="p">
                            <strong>MeConta (Outdated)</strong>&nbsp;by
                            <div className="link">
                                <Image src="https://github.com/yagasaki7k.png" alt="Yagasaki7K" width={20} height={20} sizes="20px" loader={imageLoader} />
                                @Yagasaki7K
                            </div>
                            - A page to manager your expenses
                        </div>
                    </div>
                </div>
            </HomeDetails>
            <Footer />
        </>
    );
}
