import React from "react";
import { START_TIME_SNIPPET, VWO_SMARTCODE } from "./constants";

export function VwoHead() {
  return (
    <>
      <script
        id="vwo-start-time"
        nonce="456723789323765435"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
      <script
        nonce="456723789323765435"
        type="text/javascript"
        id="vwoCode"
        dangerouslySetInnerHTML={{
          __html: VWO_SMARTCODE,
        }}
      />
    </>
  );
}

