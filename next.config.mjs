/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: false,
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
