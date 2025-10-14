import Link from "next/link";

export default function AboutPage() {
	return (
		<>
			<h1 className="mb-2 mt-4 text-center max-sm:text-4xl text-5xl">Use</h1>
			<div className="mb-4 text-center">
				<i>Things I am using</i>
			</div>

			<article>
				<h1 className="text-xl">Hardware</h1>
				<li className="ml-5">Notebook: Acer Aspire5 AMD Ryzen7 5700U 12GB RAM 15.6” LED IPS</li>
				<li className="ml-5">Setup: Ryzen 5 5600, Geforce 4060, 32GB RAM, 1TB (HD) + 1TB+128GB (SSD)</li>
				<li className="ml-5">Mouse: HyperX Pulsefire Surge</li>
				<li className="ml-5">
					Keyboard: SuperFrame Player / <s className="text-stone-600">Kumara Redragon</s>
				</li>
				<li className="ml-5">
					Headset: Fifine AmpliGame H6 / <s className="text-stone-600">Razer Kraken</s>
				</li>
				<li className="ml-5">Mic: Fifine AmpliGame A6T</li>
				<li className="ml-5">Chair: SuperFrame Iris RGB</li>
				<li className="ml-5">Webcam: Logitech C920s</li>
				<li className="ml-5">OS: Windows 11 with WSL2 (Ubuntu)</li>

				<h1 className="text-xl mt-2">Development</h1>
				<h1 className="text-lg">Editor</h1>
				<li className="ml-5">
					Editor: VS Code / <s className="text-stone-600">Cursor</s> / <s className="text-stone-600">Sublime Text</s>
				</li>
				<li className="ml-5">
					VS Code Settings:{" "}
					<Link href="https://gist.github.com/Yagasaki7K/7a908b1907714d936d21a568d1f83258" target="_blank">
						yagasaki7k/vscode-settings.json
					</Link>
				</li>
				<li className="ml-5">Fonts: Fira Code</li>
				<li className="ml-5">
					Theme: One Dark Pro Night Flat / <s className="text-stone-600">Catppuccin Mocha</s> / <s className="text-stone-600">Dracula</s>
				</li>
				<li className="ml-5">
					Icons Theme: vscode-icons / <s className="text-stone-600">Material Icon Theme</s>
				</li>
			</article>
		</>
	);
}
