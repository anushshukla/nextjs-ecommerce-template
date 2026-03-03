"use client";
import React from "react";
import Script from "next/script";
import { START_TIME_SNIPPET, VWO_SMARTCODE } from "./constants";

export function VwoHead() {
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
      <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
      <Script
        id="vwoCode"
        nonce="456723789323765435"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: VWO_SMARTCODE,
        }}
      />
    </>
  );
}

