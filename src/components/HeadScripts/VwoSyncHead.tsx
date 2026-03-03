"use client";
import React from "react";
import Script from "next/script";
import { START_TIME_SNIPPET } from "./constants";

export function VwoSyncHead() {
  return (
    <>
      <Script
        id="vwo-start-time"
        nonce="456723789323765435"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <Script
        id="vwoCode"
        nonce="456723789323765435"
        referrerPolicy="no-referrer-when-downgrade"
        strategy="beforeInteractive"
        src="https://dev.visualwebsiteoptimizer.com/lib/1201498.js"
      />
    </>
  );
}

