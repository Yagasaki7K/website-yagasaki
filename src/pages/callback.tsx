import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Callback() {
    const router = useRouter();
    const [code, setCode] = useState("");

    useEffect(() => {
        if (!router.isReady) return;

        const spotifyCode = router.query.code;

        if (typeof spotifyCode === "string") {
            setCode(spotifyCode);
            console.log("Spotify Code:", spotifyCode);
        }
    }, [router.isReady, router.query]);

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                padding: "2rem",
            }}
        >
            <h1>Spotify Callback</h1>

            {code ? (
                <>
                    <p>Authorization Code recebido:</p>

                    <textarea
                        readOnly
                        value={code}
                        style={{
                            width: "100%",
                            maxWidth: 800,
                            height: 120,
                            padding: 12,
                        }}
                    />

                    <button
                        onClick={() => navigator.clipboard.writeText(code)}
                    >
                        Copiar Code
                    </button>
                </>
            ) : (
                <p>Aguardando retorno do Spotify...</p>
            )}
        </main>
    );
}