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

  // Define a custom webpack configuration to handle asset paths
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add your custom webpack configuration here

    // Ensure that the asset paths are correctly generated
    config.output.publicPath = `${defaultLoaders.nextImage.loader.options.basePath || ''}/_next/`;
    
    return config;
  },
};

module.exports = nextConfig;
