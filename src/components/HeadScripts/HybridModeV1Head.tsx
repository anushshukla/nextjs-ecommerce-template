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
        src="https://try.abtasty.com/7128a6af58894672880ead077964b952.js"
      />
    </>
  );
}

