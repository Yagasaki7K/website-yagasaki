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
        const clientSecret =
            spotifysec1 + spotifysec2;

        const getRefreshToken = async () => {
            const response = await fetch(
                "https://accounts.spotify.com/api/token",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Basic ${btoa(
                            `${clientId}:${clientSecret}`
                        )}`,
                        "Content-Type":
                            "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        grant_type:
                            "authorization_code",
                        code,
                        redirect_uri:
                            "https://yagasaki.vercel.app/callback",
                    }),
                }
            );

            const data =
                await response.json();

            if (data.refresh_token) {
                localStorage.setItem(
                    "spotify_refresh_token",
                    data.refresh_token
                );

                router.replace("/");
            }
        };

        getRefreshToken();
    }, [router]);

    return null;
}