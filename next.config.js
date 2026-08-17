/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "conaisoft.com" }],
        destination: "https://www.conaisoft.com/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "conaisoft.com" }],
        destination: "https://www.conaisoft.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
