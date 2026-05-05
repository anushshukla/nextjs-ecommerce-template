import React from "react";
import { START_TIME_SNIPPET } from "./constants";

export function HybridModeV1Head() {
  return (
    <>
      <script
        id="hybrid-mode-v1-start-time"
        nonce="456723789323765435"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <script
        nonce="456723789323765435"
        src="https://try.abtasty.com/84cd1e2faac83d8b7a70cec0a42ad05e.js"
      />
      <script
        id="vwoCode"
        nonce="456723789323765435"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://dev.visualwebsiteoptimizer.com/cloud-run-test/final/3000546.js"
      />
    </>
  );
}

