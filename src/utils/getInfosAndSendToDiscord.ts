export const getInfosAndSendToDiscord = () => {
    if (typeof window === 'undefined') return;

    const userAgent = window.navigator.userAgent;
    const os = window.navigator.platform;

    const browser = (() => {
        if (/Edg\//.test(userAgent)) return 'Edge';
        if (/OPR\//.test(userAgent) || /Opera/.test(userAgent)) return 'Opera';
        if (/Chrome/.test(userAgent) && !/Edg\//.test(userAgent) && !/OPR\//.test(userAgent)) return 'Chrome';
        if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) return 'Safari';
        if (/Firefox/.test(userAgent)) return 'Firefox';
        return 'Desconhecido';
    })();

    const getOS = () => {
        if (/Win/.test(os)) return 'Windows';
        if (/Mac/.test(os)) return 'MacOS';
        if (/Linux/.test(os)) return 'Linux';
        if (/Android/.test(userAgent)) return 'Android';
        if (/iPhone|iPad|iPod/.test(userAgent)) return 'iOS';
        return 'Desconhecido';
    };

    const operatingSystem = getOS();
    const accessTime = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    fetch('https://discord.com/api/webhooks/1371540247371976835/UpzS07800AGpVSLZPfanIIDUpoWVuJG1H99nGUeYfDqR9OnV35W_WkSYZq8sZdjD78Sv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `**Novo Acesso:** OS: ${operatingSystem} / Navegador: ${browser} / Acesso: ${accessTime} / Page: ${window.location.href}`
        })
    });
};
