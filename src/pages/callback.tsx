import { useRouter } from "next/router";
import { useEffect } from "react";

const spotify1 = "a19deafb087d482";
const spotify2 = "5a06abaa9e268f30c";

const spotifysec1 = "e39514042122434";
const spotifysec2 = "e81c34057ea313d10";

export default function Callback() {
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        const code = router.query.code;

        if (typeof code !== "string") return;

        const clientId = spotify1 + spotify2;
        const clientSecret = spotifysec1 + spotifysec2;

        const exchangeCode = async () => {
            const response = await fetch(
                "https://accounts.spotify.com/api/token",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded",
                        Authorization: `Basic ${btoa(
                            `${clientId}:${clientSecret}`
                        )}`,
                    },
                    body: new URLSearchParams({
                        code,
                        redirect_uri:
                            "https://yagasaki.vercel.app/callback",
                        grant_type:
                            "authorization_code",
                    }),
                }
            );

            const data = await response.json();

            if (data.access_token) {
                localStorage.setItem(
                    "spotify_access_token",
                    data.access_token
                );
            }

            if (data.refresh_token) {
                localStorage.setItem(
                    "spotify_refresh_token",
                    data.refresh_token
                );
            }

            router.replace("/");
        };

        exchangeCode();
    }, [router]);

    return null;
}