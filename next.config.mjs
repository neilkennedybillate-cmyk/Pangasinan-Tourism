const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isProd && {
    basePath: '/Pangasinan-Tourism',
    assetPrefix: '/Pangasinan-Tourism',
  }),
};

export default nextConfig;
