import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = Number(process.env.PORT ?? 3000);
const hostname = process.env.HOSTNAME ?? "0.0.0.0";
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
        createServer((req, res) => {
                const parsedUrl = parse(req.url ?? "/", true);
                void handle(req, res, parsedUrl);
        }).listen(port, hostname, () => {
                console.log(`Bun SSR server ready on http://${hostname}:${port}`);
        });
});
