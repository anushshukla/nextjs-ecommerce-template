import React from "react";
import { START_TIME_SNIPPET } from "./constants";

export function HybridModeV4Head() {
  return (
    <>
      <script
        id="hybrid-mode-v4-start-time"
        nonce="456723789323765435"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <script
        nonce="456723789323765435"
        src="https://dev.visualwebsiteoptimizer.com/tag/1213133.js"
      />
    </>
  );
}
