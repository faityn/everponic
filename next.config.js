const { i18n } = require("./next-i18next.config");
const intercept = require("intercept-stdout");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,

  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

intercept((text) => (text.includes("Duplicate atom key") ? "" : text)); // removes the error message "Duplicate atom key" from terminal
