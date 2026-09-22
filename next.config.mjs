const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/Pangasinan-Tourism' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isProd && {
    basePath,
    assetPrefix: basePath,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
