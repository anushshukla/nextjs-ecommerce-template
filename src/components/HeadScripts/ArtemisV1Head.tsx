import React from "react";
import { START_TIME_SNIPPET } from "./constants";

export function ArtemisSequentialHead() {
  return (
    <>
      <script
        id="artemis-sequential-start-time"
        nonce="456723789323765435"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <script
        id="artemis-sequential-loader"
        nonce="456723789323765435"
        src="/artemis-sequential-loader.js"
        async
      />
    </>
  );
}

