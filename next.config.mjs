/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    // SERVER_URL: "http://localhost:3002",
    SERVER_URL: "https://art-portfolio-platform-api.onrender.com",
    JWT_KEY: "portfolio_app_jwt",
  },
};

export default nextConfig;
