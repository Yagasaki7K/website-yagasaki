import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Callback() {
    const router = useRouter();

    const [message, setMessage] = useState(
        "Aguardando retorno do Spotify..."
    );

    useEffect(() => {
        if (!router.isReady) return;

        const code = router.query.code;

        if (typeof code !== "string") return;

        const clientId =
            "a19deafb087d482" +
            "5a06abaa9e268f30c";

        const clientSecret =
            "e39514042122434" +
            "e81c34057ea313d10";

        const auth = btoa(
            `${clientId}:${clientSecret}`
        );

        const exchangeCode = async () => {
            try {
                const response = await fetch(
                    "https://accounts.spotify.com/api/token",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Basic ${auth}`,
                            "Content-Type":
                                "application/x-www-form-urlencoded",
                        },
                        body: new URLSearchParams({
                            grant_type:
                                "authorization_code",
                            code,
                            redirect_uri:
                                "http://yagasaki.vercel.app/callback",
                        }),
                    }
                );

                const data = await response.json();

                console.log(
                    "[SPOTIFY TOKEN RESPONSE]",
                    data
                );

                if (!response.ok) {
                    setMessage(
                        JSON.stringify(data, null, 2)
                    );
                    return;
                }

                localStorage.setItem(
                    "spotify_refresh_token",
                    data.refresh_token
                );

                setMessage(
                    "Refresh token salvo com sucesso."
                );
            } catch (error) {
                console.error(error);
                setMessage("Erro ao obter token.");
            }
        };

        exchangeCode();
    }, [router.isReady, router.query]);

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
            }}
        >
            <pre>{message}</pre>
        </main>
    );
}