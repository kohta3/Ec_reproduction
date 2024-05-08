/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'], // 許可するホスト名を指定
  },
};

export default nextConfig;
