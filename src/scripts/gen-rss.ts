import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function generateRSSFile(): Promise<void> {
	try {
		// Determina a URL base
		const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
			? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
			: process.env.SITE_URL
				? process.env.SITE_URL
				: "http://localhost:3000";

		const rssApiUrl = `${siteUrl}/api/rss`;

		console.log("🚀 Gerando RSS de:", rssApiUrl);

		// Faz a requisição para a API route
		const rssContent = await fetchRSSContent(rssApiUrl);

		// Salva o arquivo RSS no diretório public
		const publicDir = path.join(process.cwd(), "public");
		const rssFilePath = path.join(publicDir, "rss.xml");

		// Garante que o diretório public existe
		if (!fs.existsSync(publicDir)) {
			fs.mkdirSync(publicDir, { recursive: true });
		}

		// Escreve o arquivo RSS
		fs.writeFileSync(rssFilePath, rssContent);

		console.log("✅ RSS gerado com sucesso em:", rssFilePath);
		console.log("📄 Tamanho do arquivo:", (rssContent.length / 1024).toFixed(2), "KB");
	} catch (error) {
		console.error("❌ Erro ao gerar RSS:", error instanceof Error ? error.message : "Erro desconhecido");
		process.exit(1);
	}
}

function fetchRSSContent(url: string): Promise<string> {
	return new Promise((resolve, reject) => {
		const urlObj = new URL(url);
		const client = urlObj.protocol === "https:" ? https : http;

		const request = client.get(url, (response) => {
			let data = "";

			response.on("data", (chunk: Buffer) => {
				data += chunk.toString();
			});

			response.on("end", () => {
				if (response.statusCode === 200) {
					resolve(data);
				} else {
					reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
				}
			});
		});

		request.on("error", (error: Error) => {
			reject(error);
		});

		request.setTimeout(10000, () => {
			request.destroy();
			reject(new Error("Request timeout"));
		});
	});
}

// Executa o script
generateRSSFile();
