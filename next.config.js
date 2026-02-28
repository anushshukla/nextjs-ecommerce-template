/** @type {import('next').NextConfig} */
const CSP =
  "default-src 'self' *.abtasty.com; script-src 'self' 'unsafe-inline' *.abtasty.com; frame-src 'self'; connect-src 'self' *.abtasty.com; style-src 'self' 'unsafe-inline' *.abtasty.com; font-src 'self' data:;";

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: CSP,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

