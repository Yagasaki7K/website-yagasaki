import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import styled from "styled-components";

const UseDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
        margin-bottom: 2rem;
        margin-top: 4rem;
        text-align: center;
        font-size: 3rem;
        line-height: 1rem;
        color: var(--white);

        @media (max-width: 1280px) {
            font-size: 2.5rem;
            margin-top: 3.5rem;
            line-height: 1.2rem;
        }

        @media (max-width: 1024px) {
            font-size: 2.25rem;
            margin-top: 3rem;
            margin-bottom: 1.75rem;
        }

        @media (max-width: 820px) {
            font-size: 2rem;
            margin-top: 2.5rem;
            margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1.25rem;
            line-height: 1.3rem;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            line-height: 1.2rem;
        }

        @media (max-width: 390px) {
            font-size: 1.35rem;
            margin-top: 1.25rem;
            margin-bottom: 0.75rem;
        }
    }

    li {
        margin-left: 1.25rem;
        margin-top: 0.25rem;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--gray);

        @media (max-width: 1024px) {
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            margin-left: 1rem;
            font-size: 0.9rem;
        }

        @media (max-width: 480px) {
            margin-left: 0.75rem;
            font-size: 0.85rem;
        }
    }

    .subTitle {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin-top: 1rem;
        color: var(--white);

        @media (max-width: 1280px) {
            font-size: 1.15rem;
            line-height: 1.6rem;
        }

        @media (max-width: 1024px) {
            font-size: 1.1rem;
        }

        @media (max-width: 768px) {
            font-size: 1rem;
            text-align: center;
        }

        @media (max-width: 480px) {
            font-size: 0.95rem;
            line-height: 1.5rem;
        }
    }

    s {
        color: var(--gray-risked);
        font-size: 1rem;

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }

        @media (max-width: 480px) {
            font-size: 0.85rem;
        }
    }

    @media (max-width: 1024px) {
        padding: 0 2rem;
    }

    @media (max-width: 768px) {
        padding: 0 1.5rem;
    }

    @media (max-width: 480px) {
        padding: 0 1rem;
    }

    @media (max-width: 390px) {
        padding: 0 0.75rem;
    }
`;

export default function UsePage() {
    return (
        <>
            <Navigation />
            <UseDetails>
                <h1 className="title">Use</h1>
                <div className="mb-4 text-center">
                    <i>Things I am using</i>
                </div>

                <article>
                    <h1 className="subTitle">Hardware</h1>
                    <li>Notebook: Acer Aspire5 AMD Ryzen7 5700U 12GB RAM 15.6” LED IPS</li>
                    <li>Setup: Ryzen 5 5600, Geforce 4060, 32GB RAM, 1TB (HD) + 1TB+128GB (SSD)</li>
                    <li>Mouse: HyperX Pulsefire Surge</li>
                    <li>
                        Keyboard: SuperFrame Player / <s>Kumara Redragon</s>
                    </li>
                    <li>
                        Headset: Fifine AmpliGame H6 / <s>Razer Kraken</s>
                    </li>
                    <li>Mic: Fifine AmpliGame A6T</li>
                    <li>Chair: SuperFrame Iris RGB</li>
                    <li>Webcam: Logitech C920s</li>
                    <li>OS: Windows 11 with WSL2 (Ubuntu)</li>
                    <li>Smartphone: POCO X4 Pro (No NFC)</li>

                    <h1 className="subTitle">Development</h1>
                    <li>
                        Editor: Zen / <s>Visual Studio Code</s> / <s>Cursor</s> / <s>Sublime Text</s>
                    </li>
                    <li>
                        VS Code Settings:{" "}
                        <Link href="https://gist.github.com/Yagasaki7K/7a908b1907714d936d21a568d1f83258" target="_blank">
                            yagasaki7k/vscode-settings.json
                        </Link>
                    </li>
                    <li>Fonts: Fira Code</li>
                    <li>
                        Theme: One Dark Pro Night Flat / <s>Catppuccin Mocha</s> / <s>Dracula</s>
                    </li>
                    <li>
                        Icons Theme: vscode-icons / <s>Material Icon Theme</s>
                    </li>
                </article>
            </UseDetails>
            <Footer />
        </>
    );
}
