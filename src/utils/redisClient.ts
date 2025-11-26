const redisUrl = process.env.REDIS_URL ?? "redis://127.0.0.1:6379";

let redisClient: any | null = null;
let redisUnavailable = false;

function createRedisClient() {
        if (redisUnavailable) {
                return null;
        }

        if (!redisClient) {
                try {
                        const redisConstructor = (Bun as any)?.Redis;
                        if (!redisConstructor) {
                                throw new Error("Bun Redis client not available");
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
        const client = createRedisClient();
        if (!client) {
                return 0;
        }

        try {
                const key = `article:${slug}:views`;
                await client.incr(key);
                return readCounter(client, key);
        } catch (error) {
                console.error("Failed to increment article view count", error);
                return 0;
        }
}

export async function getArticleViewCount(slug: string): Promise<number> {
        const client = createRedisClient();
        if (!client) {
                return 0;
        }

        try {
                const key = `article:${slug}:views`;
                return readCounter(client, key);
        } catch (error) {
                console.error("Failed to fetch article view count", error);
                return 0;
        }
}
