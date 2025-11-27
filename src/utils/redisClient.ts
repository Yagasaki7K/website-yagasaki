const redisUrl = process.env.REDIS_URL ?? "redis://127.0.0.1:6379";
const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;
const hasUpstash = Boolean(upstashUrl && upstashToken);

let redisClient: any | null = null;
let redisUnavailable = false;

function createRedisClient() {
        if (redisUnavailable) {
                return null;
        }

        if (!redisClient) {
                try {
                        const redisConstructor =
                                typeof Bun !== "undefined" && (Bun as any)?.Redis ? (Bun as any).Redis : null;
                        if (!redisConstructor) {
                                return null;
                        }

                        redisClient = new redisConstructor({ url: redisUrl });
                } catch (error) {
                        console.error("Failed to initialize Bun Redis client", error);
                        redisUnavailable = true;
                        return null;
                }
        }

        return redisClient;
}

async function readCounter(client: any, key: string): Promise<number> {
        const value = await client.get(key);
        if (typeof value === "number") {
                return value;
        }

        if (typeof value === "string") {
                const parsed = Number(value);
                return Number.isNaN(parsed) ? 0 : parsed;
        }

        return 0;
}

export async function incrementArticleView(slug: string): Promise<number> {
        const key = `article:${slug}:views`;

        if (hasUpstash) {
                const upstashResult = await incrementWithUpstash(key);
                if (typeof upstashResult === "number") {
                        return upstashResult;
                }
        }

        const client = createRedisClient();
        if (!client) {
                console.warn("No Redis backend available to increment view count");
                return 0;
        }

        try {
                await client.incr(key);
                return await readCounter(client, key);
        } catch (error) {
                console.error("Failed to increment article view count", error);
                return typeof upstashUrl === "string" ? (await incrementWithUpstash(key)) ?? 0 : 0;
        }
}

export async function getArticleViewCount(slug: string): Promise<number> {
        const key = `article:${slug}:views`;

        if (hasUpstash) {
                const upstashValue = await fetchUpstashValue(key);
                if (typeof upstashValue === "number") {
                        return upstashValue;
                }
        }

        const client = createRedisClient();
        if (!client) {
                console.warn("No Redis backend available to fetch view count");
                return 0;
        }

        try {
                return await readCounter(client, key);
        } catch (error) {
                console.error("Failed to fetch article view count", error);
                return typeof upstashUrl === "string" ? (await fetchUpstashValue(key)) ?? 0 : 0;
        }
}

async function incrementWithUpstash(key: string): Promise<number | null> {
        if (!upstashUrl || !upstashToken) {
                return null;
        }

        try {
                const response = await fetch(`${upstashUrl}/incr/${encodeURIComponent(key)}`, {
                        method: "POST",
                        cache: "no-store",
                        headers: {
                                Authorization: `Bearer ${upstashToken}`,
                        },
                });

                if (!response.ok) {
                        console.error(`Upstash increment failed with status ${response.status}`);
                        return null;
                }

                const data = (await response.json()) as { result?: number | string };
                const parsed = Number(data.result ?? 0);
                return Number.isNaN(parsed) ? null : parsed;
        } catch (error) {
                console.error("Failed to increment article view count via Upstash", error);
                return null;
        }
}

async function fetchUpstashValue(key: string): Promise<number | null> {
        if (!upstashUrl || !upstashToken) {
                return null;
        }

        try {
                const response = await fetch(`${upstashUrl}/get/${encodeURIComponent(key)}`, {
                        cache: "no-store",
                        headers: {
                                Authorization: `Bearer ${upstashToken}`,
                        },
                });

                if (!response.ok) {
                        console.error(`Upstash fetch failed with status ${response.status}`);
                        return null;
                }

                const data = (await response.json()) as { result?: number | string | null };
                const parsed = Number(data.result ?? 0);
                return Number.isNaN(parsed) ? null : parsed;
        } catch (error) {
                console.error("Failed to fetch article view count via Upstash", error);
                return null;
        }
}
