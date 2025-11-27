import { redis as bunRedis, type RedisClient } from "bun";

let redisClient: RedisClient | null = null;
let redisUnavailable = false;

function createRedisClient(): RedisClient | null {
        if (redisUnavailable) {
                return null;
        }

        if (!redisClient) {
                try {
                        redisClient = bunRedis;
                } catch (error) {
                        console.error("Failed to initialize Bun Redis client", error);
                        redisUnavailable = true;
                        return null;
                }
        }

        return redisClient;
}

async function readCounter(client: RedisClient, key: string): Promise<number> {
        const value = await client.get<number | string | null>(key);
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
                console.warn("No Redis backend available to increment view count");
                return 0;
        }

        try {
                await client.incr(key);
                return await readCounter(client, key);
        } catch (error) {
                console.error("Failed to increment article view count", error);
                redisUnavailable = true;
                return 0;
        }
}

export async function getArticleViewCount(slug: string): Promise<number> {
        const key = `article:${slug}:views`;

        const client = createRedisClient();
        if (!client) {
                console.warn("No Redis backend available to fetch view count");
                return 0;
        }

        try {
                return await readCounter(client, key);
        } catch (error) {
                console.error("Failed to fetch article view count", error);
                redisUnavailable = true;
                return 0;
        }
}
