import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const BASE_CSP =
  [
    // Core default sources
    "default-src 'self' try.abtasty.com dacdn.abtasty.com",
    // Script loading (inline needed for start-time + AB Tasty snippets)
    "script-src 'self' 'unsafe-inline' try.abtasty.com dacdn.abtasty.com",
    // Frames (no external frames currently required)
    "frame-src 'self'",
    // XHR / fetch / beacons for AB Tasty
    "connect-src 'self' try.abtasty.com dacdn.abtasty.com",
    // Styles (inline + AB Tasty CSS if any)
    "style-src 'self' 'unsafe-inline' try.abtasty.com dacdn.abtasty.com",
    // Fonts + data URLs
    "font-src 'self' data:",
    // Images, including data: SVGs and AB Tasty assets
    "img-src 'self' data:",
  ].join("; ") + ";";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const isVwoPath =
    req.nextUrl.pathname === "/vwo" || req.nextUrl.pathname === "/vwo-async";
  if (isVwoPath) {
    return res;
  }

  res.headers.set("Content-Security-Policy", BASE_CSP);

  return res;
}

export const config = {
  matcher: ["/:path*"],
};

