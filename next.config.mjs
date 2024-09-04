/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    //   loader: 'custom',
    //   loaderFile: 'loader.js',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "tecdn.b-cdn.net",
      },
    ],
  },
};

export default nextConfig;
