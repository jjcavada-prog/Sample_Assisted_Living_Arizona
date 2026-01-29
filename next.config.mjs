/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
      ignoreBuildErrors: true,
    },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'img.rocket.new',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/homepage',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
