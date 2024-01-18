/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  // Add other Next.js configuration ...

  // Specify the base path for GitHub Pages
  basePath: '/Fondazza', // Update this with your GitHub repository name

  // Specify the assetPrefix for GitHub Pages
  assetPrefix: '/Fondazza/', // Update this with your GitHub repository name
};

module.exports = nextConfig;
