import React from "react";
import { START_TIME_SNIPPET } from "./constants";

export function AbtastyHead() {
  return (
    <>
      <script
        id="abtasty-start-time"
        nonce="456723789323765435"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <script
        nonce="456723789323765435"
        src="https://try.abtasty.com/84cd1e2faac83d8b7a70cec0a42ad05e.js"
      />
    </>
  );
}

