import "dayjs/locale/pt-br";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import HomeDetails from "@/components/HomeDetails";
import Footer from "@/components/Footer";
import { steam } from "@/icons/steam";

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
						<p>Hey! I’m Anderson Marlon, a software engineer and indie hacker.</p>
						<div className="p">
							Working at
							<div className="link">
								<img src="https://sintoniasp.vercel.app/logotipo.png" />
								<Link href="https://github.com/byteonegroup" target="_blank">
									@SintoniaSP
								</Link>
							</div>
							/
							<div className="link">
								<img src="https://zentrystore.vercel.app/logo.png" />
								<Link href="https://zentrystore.vercel.app/" target="_blank">
									Zentry Store
								</Link>
							</div>
						</div>
						<div className="p">
							Creator of
							<div className="link">
								<img src={steam} />
								<Link href="https://steamfolio.vercel.app/logo.png" target="_blank">
									Steamfolio
								</Link>
							</div>
							<div className="link">
								<img src="https://webessentials.vercel.app/favicon.png" />
								<Link href="https://webessentials.vercel.app/" target="_blank">
									Essentials
								</Link>
							</div>
							<div className="link">
								<img src="https://findyourpet.vercel.app/logo.png" />
								<Link href="https://findyourpet.vercel.app/" target="_blank">
									FindYourPet
								</Link>
							</div>
							<div className="link">
								<img src="https://github.com/Yagasaki7K.png" />
								<Link href="https://github.com/Yagasaki7K/feature-liquidglass" target="_blank">
									Liquid Glass
								</Link>
							</div>
						</div>
						<div className="p">
							Core team of
							<div className="link">
								<img src="https://github.com/engide.png" />
								<Link href="https://github.com/engide" target="_blank">
									@Engide
								</Link>
							</div>
							<div className="link">
								<img src="https://github.com/byteonegroup.png" />
								<Link href="https://github.com/byteonegroup" target="_blank">
									@ByteOneGroup
								</Link>
							</div>
							<div className="link">
								<img src="https://github.com/kalify-inc.png" />
								<Link href="https://github.com/kalify-inc" target="_blank">
									@KalifyInc
								</Link>
							</div>
						</div>
						<p>
							My passion lies in envisioning incredible projects and bringing them to life. I'm passionate about creating solutions that help me and others be more productive
							and enjoy the creative process. You can find a{" "}
							<Link href="https://github.com/Yagasaki7K" target="_blank">
								full list of my projects here
							</Link>
							.
						</p>
						<p>
							I write <Link href="/blog">blog posts</Link> about open source, programming, etc.
						</p>
						<p>
							Outside of programming, I enjoy games and reading. I post <Link href="/photos">photos on this page</Link>. I also love anime, movies, and series, and I'm trying
							to list my <Link href="/media">media consumption</Link>. Additionally, if you're interested, here's a list of the <Link href="/use">hardware/software I use</Link>
							.
						</p>
						<p>I've lived in Campinas, in the interior of São Paulo state, Brazil, for some time now. If you're nearby, get in touch so we can grab a coffee or work together.</p>
						<hr />
						<p>Find me on</p>
						<Link href="https://github.com/yagasaki7k" target="_blank">
							<i className="uil uil-github" /> GitHub
						</Link>
						&nbsp;
						<Link href="https://twitter.com/yagasaki7k" target="_blank">
							<i className="uil uil-twitter" /> Twitter
						</Link>
						&nbsp;
						<Link href="https://twitter.com/yagasaki7k" target="_blank">
							<i className="uil uil-discord" /> Discord Server
						</Link>
						&nbsp;
						<Link href="https://instagram.com/cdnmv" target="_blank">
							<i className="uil uil-instagram" /> Instagram
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
