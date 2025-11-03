import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repo = 'landing-mel'; // 👉 troca pelo nome do repo
const user = 'ricardobron';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `https://${user}.github.io/${repo}/` : '',
};

export default nextConfig;
