import React from "react";
import { START_TIME_SNIPPET } from "./constants";

export function HybridModeV6Head() {
  return (
    <>
      <script
        id="hybrid-mode-v6-start-time"
        nonce="456723789323765435"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <script
        id="vwoCode"
        nonce="456723789323765435"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://dev.visualwebsiteoptimizer.com/tag/1228643.js"
      />
      <script
        nonce="456723789323765435"
        src="https://try.abtasty.com/84cd1e2faac83d8b7a70cec0a42ad05e.js"
      />
    </>
  );
}
