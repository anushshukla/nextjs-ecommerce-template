"use client";
import React from "react";
import Script from "next/script";
import { START_TIME_SNIPPET } from "./constants";

export function ArtemisHead() {
  return (
    <>
      <Script
        id="artemis-start-time"
        nonce="456723789323765435"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `${START_TIME_SNIPPET}/*_vwo_cookieDomain='nextjs-ecommerce-template-ruddy.vercel.app'*/;`,
        }}
      />
      <Script
        id="artemis-script"
        nonce="456723789323765435"
        referrerPolicy="no-referrer-when-downgrade"
        strategy="beforeInteractive"
        src="https://dacdn.abtasty.com/cloud-run-test/final/4001222.js"
      />
    </>
  );
}

