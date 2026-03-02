import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const BASE_CSP =
  "default-src 'self' *.abtasty.com; script-src 'self' 'unsafe-inline' *.abtasty.com; frame-src 'self'; connect-src 'self' *.abtasty.com; style-src 'self' 'unsafe-inline' *.abtasty.com; font-src 'self' data:;";

const VWO_CSP =
  "default-src 'self' blob: *.visualwebsiteoptimizer.com; script-src 'self' 'unsafe-inline' *.visualwebsiteoptimizer.com; connect-src 'self' *.visualwebsiteoptimizer.com; frame-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self' data:;";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const isVwoPath = req.nextUrl.pathname === "/vwo";
  const csp = isVwoPath ? VWO_CSP : BASE_CSP;

  res.headers.set("Content-Security-Policy", csp);

  return res;
}

export const config = {
  matcher: ["/:path*"],
};

