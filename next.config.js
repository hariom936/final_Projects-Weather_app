/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
// }

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.weatherapi.com"],
  },
};

module.exports = nextConfig;

//

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable:process.env.NODE_ENV ='development'
});
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["cdn.weatherapi.com"],
  },
});
