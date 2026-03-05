"use client";
import React from "react";
import Script from "next/script";
import { START_TIME_SNIPPET } from "./constants";

export function ArtemisHead() {
  return (
    <>
      <Script
        id="artemis-start-time"
        nonce="456723789323765435"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `${START_TIME_SNIPPET};`,
        }}
      />
      <Script
        nonce="456723789323765435"
        strategy="beforeInteractive"
        src="https://dacdn.abtasty.com/cloud-run-test/final/4001222.js"
      />
    </>
  );
}

