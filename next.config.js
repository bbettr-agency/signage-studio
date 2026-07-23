/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.cdn.filesafe.space",
      },
    ],
  },
};

module.exports = nextConfig;
