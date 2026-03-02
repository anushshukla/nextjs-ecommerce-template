/** @type {import('next').NextConfig} */
const BASE_CSP =
  "default-src 'self' *.abtasty.com; script-src 'self' 'unsafe-inline' *.abtasty.com; frame-src 'self'; connect-src 'self' *.abtasty.com; style-src 'self' 'unsafe-inline' *.abtasty.com; font-src 'self' data:;";

const VWO_CSP =
  "default-src 'self' blob: dev.visualwebsiteoptimizer.com;"

const nextConfig = {
  async headers() {
    return [
      // VWO-specific CSP for /vwo
      {
        source: "/vwo",
        headers: [
          {
            key: "Content-Security-Policy",
            value: VWO_CSP,
          },
        ],
      },
      // Default CSP for all other routes
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: BASE_CSP,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

