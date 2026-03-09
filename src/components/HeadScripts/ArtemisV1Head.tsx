import React from "react";
import { START_TIME_SNIPPET } from "./constants";

export function ArtemisV1Head() {
  return (
    <>
      <script
        id="artemis-v1-start-time"
        nonce="456723789323765435"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <script
        id="artemis-v1-loader"
        nonce="456723789323765435"
        src="/artemis-v1-loader.js"
        async
      />
    </>
  );
}

