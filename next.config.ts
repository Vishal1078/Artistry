/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables lint errors from blocking build
  },
};

module.exports = nextConfig;
