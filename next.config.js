/** @type {import('next').NextConfig} */
const CSP =
  "default-src 'self'; script-src 'self' 'nonce-456723789323765435' *.abtasty.com; frame-src 'self'; connect-src 'self' *.abtasty.com; style-src 'self' 'nonce-456723789323765435' *.abtasty.com;";

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

