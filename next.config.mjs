/** @type {import('next').NextConfig} */
import million from 'million/compiler';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'w.wallhaven.cc',
      },
      {
        protocol: 'https',
        hostname: 'safebooru.org',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'jestjs.io',
      },
      {
        protocol: 'https',
        hostname: 'nestjs.com',
      },
    ],
  },
};

const millionConfig = {
  auto: true,// if you're using RSC: auto: { rsc: true },
};

export default (nextConfig, millionConfig);
