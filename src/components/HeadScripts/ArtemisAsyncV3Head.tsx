import React from "react";
import { START_TIME_SNIPPET } from "./constants";

export function ArtemisAsyncV3Head() {
  return (
    <>
      <script
        id="artemis-async-v3-start-time"
        nonce="456723789323765435"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <script
        async
        nonce="456723789323765435"
        src="https://dacdn.abtasty.com/cloud-run-test/final/4001222.prebuild.js"
      />
    </>
  );
}
