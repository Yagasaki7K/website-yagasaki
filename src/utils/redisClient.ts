const redisUrl = process.env.REDIS_URL ?? "redis://127.0.0.1:6379";
const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

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
        const client = createRedisClient();
        if (!client) {
                return incrementWithUpstash(key);
        }

        try {
                await client.incr(key);
                return await readCounter(client, key);
        } catch (error) {
                console.error("Failed to increment article view count", error);
                return incrementWithUpstash(key);
        }
}

export async function getArticleViewCount(slug: string): Promise<number> {
        const key = `article:${slug}:views`;
        const client = createRedisClient();
        if (!client) {
                return fetchUpstashValue(key);
        }

        try {
                return await readCounter(client, key);
        } catch (error) {
                console.error("Failed to fetch article view count", error);
                return fetchUpstashValue(key);
        }
}

async function incrementWithUpstash(key: string): Promise<number> {
        if (!upstashUrl || !upstashToken) {
                return 0;
        }

        try {
                const response = await fetch(`${upstashUrl}/incr/${key}`, {
                        headers: {
                                Authorization: `Bearer ${upstashToken}`,
                        },
                });
                const data = (await response.json()) as { result?: number | string };
                const parsed = Number(data.result ?? 0);
                return Number.isNaN(parsed) ? 0 : parsed;
        } catch (error) {
                console.error("Failed to increment article view count via Upstash", error);
                return 0;
        }
}

async function fetchUpstashValue(key: string): Promise<number> {
        if (!upstashUrl || !upstashToken) {
                return 0;
        }

        try {
                const response = await fetch(`${upstashUrl}/get/${key}`, {
                        headers: {
                                Authorization: `Bearer ${upstashToken}`,
                        },
                });
                const data = (await response.json()) as { result?: number | string | null };
                const parsed = Number(data.result ?? 0);
                return Number.isNaN(parsed) ? 0 : parsed;
        } catch (error) {
                console.error("Failed to fetch article view count via Upstash", error);
                return 0;
        }
}
