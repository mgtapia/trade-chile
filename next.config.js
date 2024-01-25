const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' }
    }
  },
  env: {
    ADMIN_DEFAULT_PASS: process.env.ADMIN_DEFAULT_PASS,
    PROJECT_CONFIG: process.env.PROJECT_CONFIG,
    SUPER_ADMIN: process.env.SUPER_ADMIN
  }
};

module.exports = nextConfig;
