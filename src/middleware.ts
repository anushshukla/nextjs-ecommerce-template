import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const BASE_CSP =
  [
    // Core default sources
    "default-src 'self' *.abtasty.com *.visualwebsiteoptimizer.com",
    // Script loading (inline needed for start-time + AB Tasty snippets)
    "script-src 'self' 'unsafe-inline' *.abtasty.com *.visualwebsiteoptimizer.com",
    // Frames (no external frames currently required)
    "frame-src 'self'",
    // XHR / fetch / beacons for AB Tasty
    "connect-src 'self' *.abtasty.com *.visualwebsiteoptimizer.com",
    // Styles (inline + AB Tasty CSS if any)
    "style-src 'self' 'unsafe-inline' *.abtasty.com *.visualwebsiteoptimizer.com",
    // Fonts + data URLs
    "font-src 'self' data:",
    // Images, including data: SVGs and AB Tasty assets
    "img-src 'self' data: *.abtasty.com *.visualwebsiteoptimizer.com",
  ].join("; ") + ";";

const ARTEMIS_V1_CSP =
  [
    // Core default sources
    "default-src 'self' *.abtasty.com *.visualwebsiteoptimizer.com",
    // Script loading (inline + AB Tasty + VWO loader)
    "script-src 'self' 'unsafe-inline' *.abtasty.com *.visualwebsiteoptimizer.com",
    // Frames (no external frames currently required)
    "frame-src 'self'",
    // XHR / fetch / beacons
    "connect-src 'self' *.abtasty.com *.visualwebsiteoptimizer.com",
    // Styles (inline + AB Tasty CSS if any)
    "style-src 'self' 'unsafe-inline' *.abtasty.com",
    // Fonts + data URLs
    "font-src 'self' data:",
    // Images, including data: SVGs and external assets if any
    "img-src 'self' data: *.abtasty.com *.visualwebsiteoptimizer.com",
  ].join("; ") + ";";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const isVwoPath =
    req.nextUrl.pathname === "/vwo" ||
    req.nextUrl.pathname === "/vwo-async" ||
    req.nextUrl.pathname === "/vwo-sc30-sync" ||
    req.nextUrl.pathname === "/vwo-sc30-async";
  const isArtemisSequentialPath =
    req.nextUrl.pathname === "/artemis-sequential";
  if (isVwoPath) {
    return res;
  }

  if (isArtemisSequentialPath) {
    res.headers.set("Content-Security-Policy", ARTEMIS_V1_CSP);
  } else {
    res.headers.set("Content-Security-Policy", BASE_CSP);
  }

  return res;
}

export const config = {
  matcher: ["/:path*"],
};

