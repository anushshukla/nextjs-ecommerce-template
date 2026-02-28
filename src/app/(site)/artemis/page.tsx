import Home from "@/components/Home";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NextCommerce | Artemis",
  description: "Artemis variant of the NextCommerce homepage.",
};

export default function ArtemisPage() {
  return (
    <>
      <Script
        id="artemis-start-time"
        nonce="456723789323765435"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: "window.startTime=performance.now();",
        }}
      />
      <Script
        id="artemis-script"
        src="https://dacdn.abtasty.com/js/4001222.js"
        nonce="456723789323765435"
        strategy="afterInteractive"
      />
      <Home />
    </>
  );
}

