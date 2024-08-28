/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
    return config;
  },
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
      {
        hostname: "drive.google.com",
      },
    ],
  },
};

export default nextConfig;
