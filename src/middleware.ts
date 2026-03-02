import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const BASE_CSP =
  "default-src 'self' *.abtasty.com; script-src 'self' 'unsafe-inline' *.abtasty.com; frame-src 'self'; connect-src 'self' *.abtasty.com; style-src 'self' 'unsafe-inline' *.abtasty.com; font-src 'self' data:;";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const isVwoPath = req.nextUrl.pathname === "/vwo";
  if (isVwoPath) {
    return res;
  }

  res.headers.set("Content-Security-Policy", BASE_CSP);

  return res;
}

export const config = {
  matcher: ["/:path*"],
};

