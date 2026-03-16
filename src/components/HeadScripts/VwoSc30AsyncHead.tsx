import React from "react";
import Script from "next/script";
import {
  START_TIME_SNIPPET,
  VWO_SMARTCODE_V3_ASYNC,
} from "./constants";

export function VwoSc30AsyncHead() {
  return (
    <>
      <Script
        id="vwo-sc30-start-time"
        nonce="456723789323765435"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
      <Script
        id="vwo-sc30Code"
        nonce="456723789323765435"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: VWO_SMARTCODE_V3_ASYNC,
        }}
      />
    </>
  );
}

