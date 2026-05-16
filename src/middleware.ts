import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith("/_next/static") || pathname.match(/\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff2?)$/)) {
        response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else {
        response.headers.set("Cache-Control", "public, s-maxage=600, stale-while-revalidate=86400");
    }

    return response;
}

export const config = {
    matcher: ["/:path*"],
};
