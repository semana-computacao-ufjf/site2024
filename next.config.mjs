/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "semana-computacao-ufjf.github.io",
      },
      {
        hostname: "static1.bigstockphoto.com",
      },
      {
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
