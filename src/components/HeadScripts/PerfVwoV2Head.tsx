import React from "react";
import { START_TIME_SNIPPET } from "./constants";

export function PerfVwoV2Head() {
  return (
    <>
      <script
        id="vwo-start-time"
        nonce="456723789323765435"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <script
        id="vwoCode"
        nonce="456723789323765435"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://dev.visualwebsiteoptimizer.com/lib/4001443.js"
      />
    </>
  );
}
