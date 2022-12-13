/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    VERCEL_ENV: process.env.VERCEL_ENV || "preview",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
