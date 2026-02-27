import Home from "@/components/Home";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NextCommerce | AB Tasty",
  description: "AB Tasty variant of the NextCommerce homepage.",
};

export default function AbtastyPage() {
  return (
    <>
      <Script
        id="abtasty-start-time"
        nonce="456723789323765435"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: "window.startTime=performance.now();",
        }}
      />
      <Script
        id="abtasty-script"
        src="https://try.abtasty.com/84cd1e2faac83d8b7a70cec0a42ad05e.js"
        nonce="456723789323765435"
        strategy="afterInteractive"
      />
      <Home />
    </>
  );
}

