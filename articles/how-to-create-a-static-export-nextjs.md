---
title: "How to create a static export of your Next.js application"
excerpt: "Learn how to configure and deploy a static export in Next.js using output: 'export'."
tags: ["Next.js", "Static Export", "Pages Router"]
date: "2026-05-13"
---

Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server.

When running `next build`, Next.js generates an HTML file per route. By breaking a strict SPA into individual HTML files, Next.js can avoid loading unnecessary JavaScript code on the client-side, reducing bundle size and enabling faster page loads.

Since Next.js supports static export, it can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets.

<!--truncate-->

## Configuration

To enable a static export, change the output mode inside `next.config.js`:

```js
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

module.exports = nextConfig
```

After running `next build`, Next.js creates an `out` folder with the HTML/CSS/JS assets for your application.

You can use `getStaticProps` and `getStaticPaths` to generate an HTML file for each page in your `pages` directory (or more for dynamic routes).

## Supported features

Most core Next.js features needed to build a static site are supported, including:

- Dynamic routes when using `getStaticPaths`
- Prefetching with `next/link`
- Preloading JavaScript
- Dynamic imports
- Styling options (CSS Modules, styled-jsx, and others)
- Client-side data fetching
- `getStaticProps`
- `getStaticPaths`

### Image optimization

`next/image` can be used with a static export by defining a custom image loader in `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
}

module.exports = nextConfig
```

Example Cloudinary loader:

```ts
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  return `https://res.cloudinary.com/demo/image/upload/${params.join(',')}${src}`
}
```

Using `next/image` with relative paths:

```tsx
import Image from 'next/image'

export default function Page() {
  return <Image alt="turtles" src="/turtles.jpg" width={300} height={300} />
}
```

## Unsupported features

Features that require a Node.js server, or dynamic logic that cannot be computed during build, are not supported:

- Internationalized routing
- API routes
- Rewrites
- Redirects
- Headers
- Proxy
- Incremental Static Regeneration (ISR)
- `next/image` with the default loader
- Draft mode
- `getStaticPaths` with `fallback: true`
- `getStaticPaths` with `fallback: 'blocking'`
- `getServerSideProps`

## Deploying

With a static export, Next.js can be hosted on any web server that serves static assets.

Running `next build` generates the static export into the `out` folder. For routes like:

- `/`
- `/blog/[id]`

Next.js may generate files such as:

- `/out/index.html`
- `/out/404.html`
- `/out/blog/post-1.html`
- `/out/blog/post-2.html`

If you're using Nginx, configure rewrites from incoming requests to the generated files:

```nginx
server {
  listen 80;
  server_name acme.com;

  root /var/www/out;

  location / {
      try_files $uri $uri.html $uri/ =404;
  }

  # Needed when `trailingSlash: false`.
  location /blog/ {
      rewrite ^/blog/(.*)$ /blog/$1.html break;
  }

  error_page 404 /404.html;
  location = /404.html {
      internal;
  }
}
```

## Version history

- `v14.0.0`: `next export` removed in favor of `output: 'export'`
- `v13.4.0`: App Router (stable) adds enhanced static export support
- `v13.3.0`: `next export` deprecated and replaced with `output: 'export'`
