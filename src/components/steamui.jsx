import { useEffect, useState } from "react"
import style from "../css/steamdetails.scss"
import { getLevelByGPQ } from "../utils/getLevelByGPQ"

function SteamUI() {
    const [infoGithub, setInfoGithub] = useState()

    const userGitHub = "Yagasaki7K"
    const subnick = "Anderson \"Yagasaki\" Marlon"

    // BlueLight
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/570/c6a479fae8979bc9c1a02378e488e3ce06b52cb1.png"
    // Cuttie 
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2855140/4324f3a8e05e1c110fad71443d61c7ba82c4e474.png"
    // Halloween 
    const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2603600/ba1ce3d28ef75329afe4e784b1b6f9fe863cfae4.png"
    // Fire
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/322330/beaee5e90d93bfafa5f5f55acb23abfd28ad180c.png"

    const flag = "br"

    // Year of your birthday
    const birthday = 1997

    // since your are developer
    const sinceExperience = 2020
    const infoSubTitle = "Since 2014. Transforming code into solutions"

    const badgeTitle = "Mid Software Developer"
    const badgeEXP = "12,649"
    const badgeIcon = "https://community.cloudflare.steamstatic.com/public/images/badges/30_steamawardnominations/level04_80.png"
    // Default
    // const badgeIcon = "/badge_icon.png"

    const twitterLink = "https://twitter.com/Yagasaki7K"
    const awardIconLink = "https://yagasaki.dev/about#awards"
    // Default
    // const awardIconLink = "/award_icon.svg"
    const perfilIconLink = "https://yagasaki.dev/about"

    useEffect(() => {
        fetch("https://api.github.com/users/Yagasaki7K")
            .then(response => response.json())
            .then(data => {
                setInfoGithub(data)
            });
    }, [])

    const urlAvatar = "https://github.com/" + userGitHub + ".png"
    const nickname = infoGithub?.name
    const location = infoGithub?.location
    const infoTitle = infoGithub?.bio
    const githubLink = "https://github.com/" + userGitHub

    return (
        <div className={style}>
            <div className="background"></div>

            <div className="contentSteam">
                <div className="header">
                    <div className="avatar">
                        <img src={urlAvatar} alt="" />
                        <img className="border" src={avatarBorder} alt="" />
                    </div>

                    <div className="nickname">
                        <h2>{nickname}</h2>

                        <div className="subnick">
                            <p>{subnick}</p>
                            <p className="city"><img src={"https://community.cloudflare.steamstatic.com/public/images/countryflags/" + flag + ".gif"} /> {location}</p>
                        </div>

                        <div className="info">
                            <p>{infoTitle}</p>
                            <i>{infoSubTitle}</i>
                            <a href={githubLink}>View more info</a>
                        </div>
                    </div>

                    <div className="level">
                        <h2>Nível <span>{new Date().getFullYear() - birthday}</span></h2>

                        <div className="badge">
                            <div className="leftContent">
                                <img src={badgeIcon} alt="BadgeIcon" />
                            </div>

                            <div className="rightContent">
                                <h4>{badgeTitle}</h4>
                                <p>{badgeEXP} XP</p>
                            </div>
                        </div>

                        <div className="buttons">
                            <button onClick={() => window.location.href = twitterLink}>Send Friend Request</button>
                            <a href={awardIconLink} target="_blank" rel="noreferrer">
                                <img className="award" src="https://steamfolio.vercel.app/award_icon.svg" alt="" /></a>
                            <a href={perfilIconLink} target="_blank" rel="noreferrer">
                                <img className="avatar" src="https://steamfolio.vercel.app/equipped_items_icon.svg" alt="" />
                            </a>
                            <button onClick={() => window.location.href = githubLink}>...</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="subgroups">
                    <div className="group">
                        <h3>YAGASAKI 矢ヶ崎-KATSURAGI -葛城</h3>
                        <p><img src="https://github.com/tairosonloa/tairosonloa/blob/main/assets/wave.gif?raw=true" width="15px" /> Hi, I'm <b>Anderson Marlon</b>, a Software Developer with experience building systems and applications scalable in the industries of Chatbot, Artificial Intelligence, Financial Technology (Fintech), Affiliates, Brewery, Health, Journalism, Sustainability, Sales / Entrepreneurship, Podcasts, Advocate, Solutions Tech, Referral Marketing, Government Solutions Assistance and Electronic Sport Scenario & Black Belt Taekwondo @ Campinas Fighters.</p>

                        <h3>Technologies</h3>
                        <div className="groupDetails">
                            <div className="badges">
                                <img src="https://steamfolio.vercel.app/js.png" alt="BadgeIcon" title="Javascript Developer" />
                                <img src="https://steamfolio.vercel.app/ts.png" alt="BadgeIcon" title="Typescript Developer" />
                                <img src="https://steamfolio.vercel.app/nodejs.png" alt="BadgeIcon" title="NodeJS Developer" />
                                <img src="https://steamfolio.vercel.app/reactjs.png" alt="BadgeIcon" title="ReactJS Developer" />
                                <img src="https://steamfolio.vercel.app/nestjs.png" alt="BadgeIcon" title="NestJS Experience" />
                                <img src="https://steamfolio.vercel.app/firebase.png" alt="BadgeIcon" title="Firebase Experience" />
                                <button title="See more on Github" onClick={() => window.location.href = githubLink}>+15</button>
                            </div>
                        </div>

                        <h3>Latest Articles on my Blog (PT-BR)</h3>
                        <div className="groupDetails">
                            <a href="/blog/evento-da-rocketseat-junto-da-minha-experi%C3%AAncia-com-bun">× Evento da Rocketseat junto da minha experiência com Bun</a>
                            <a href="/blog/como-criar-um-blog-usando-github-pages-obsidian-quartz">× Como criar um blog usando Github Pages + Obsidian + Quartz</a>
                            <a href="/blog/notificacao-automatica-da-twitch-para-o-discord">× Notificação automática da Twitch para o Discord</a>
                            <a href="/blog/cultivar-a-semente-ou-usar-um-kit-de-ferramentas">× Cultivar a Semente ou usar um Kit de Ferramentas?</a>
                            <a href="/blog/node-br-em-campinas-pelo-frontend-universe">× Evento do NodeBR em Campinas - Frontend Universe</a>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <h2>Currently Online</h2>

                    <div className="links">
                        <a href="">Badges <span>87</span></a>

                        <div className="badges">
                            <img src="https://steamfolio.vercel.app/js.png" alt="BadgeIcon" title="Node Developer" />
                            <img src="https://steamfolio.vercel.app/ts.png" alt="BadgeIcon" title="Typescript Developer" />

                            <img src={"https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears" + (new Date().getFullYear() - sinceExperience) + "_54.png"} alt="BadgeIcon" title="Years of Experience" />

                            {
                                getLevelByGPQ(infoGithub?.public_repos)
                            }
                        </div>

                        <a href={githubLink} target="_blank" rel="noreferrer">Public Repositories <span>{infoGithub?.public_repos}</span></a>
                        <a href={githubLink} target="_blank" rel="noreferrer">Public Gists <span>{infoGithub?.public_gists}</span></a>
                        <a href={githubLink} target="_blank" rel="noreferrer">Followers <span>{infoGithub?.followers}</span></a>
                        <a href={githubLink} target="_blank" rel="noreferrer">Following <span>{infoGithub?.following}</span></a>
                    </div>

                    <h2 className="title">Top Repositories</h2>

                    <div className="links">
                        <a href="https://github.com/Yagasaki7K/website-essentials" className="link" target="_blank" rel="noreferrer">essentials</a>
                        <a href="https://github.com/Yagasaki7K/website-onigirihardcore" className="link" target="_blank" rel="noreferrer">onigirihardcore</a>
                        <a href="https://github.com/Yagasaki7K/website-findyourpet" className="link" target="_blank" rel="noreferrer">findyourpet</a>
                        <a href="https://github.com/Yagasaki7K/website-steamfolio" className="link" target="_blank" rel="noreferrer">steamfolio</a>
                        <a href="https://github.com/Yagasaki7K/website-empreguei" className="link" target="_blank" rel="noreferrer">empreguei</a>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <a href="https://github.com/Yagasaki7K" target="_blank" rel="noreferrer">© {new Date().getFullYear()} Anderson "Yagasaki" Marlon</a>&nbsp;-&nbsp;<a href="https://steamfolio.vercel.app/" target="_blank" rel="noreferrer">Powered by Yagasaki7K/Steamfolio</a>
            </div>
        </div>
    )
}

export default SteamUI
