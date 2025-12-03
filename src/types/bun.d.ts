declare module "bun" {
    interface RedisClient {
        get<T>(key: string): Promise<T | null>;
        incr(key: string): Promise<void>;
    }

    const redis: RedisClient;

    export { redis, type RedisClient };
}
