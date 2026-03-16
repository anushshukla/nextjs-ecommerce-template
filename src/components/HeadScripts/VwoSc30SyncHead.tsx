import React from "react";
import { START_TIME_SNIPPET } from "./constants";

export function VwoSc30SyncHead() {
  return (
    <>
      <script
        id="vwo-sc30-start-time"
        nonce="456723789323765435"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <script
        id="vwo-sc30Code"
        nonce="456723789323765435"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://dev.visualwebsiteoptimizer.com/tag/1209051.js"
      />
    </>
  );
}

