"use client";
import React from "react";
import Script from "next/script";
import { START_TIME_SNIPPET } from "./constants";

export function AbtastyHead() {
  return (
    <>
      <Script
        id="abtasty-start-time"
        nonce="456723789323765435"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: START_TIME_SNIPPET,
        }}
      />
      <Script
        id="abtasty-script"
        nonce="456723789323765435"
        referrerPolicy="no-referrer-when-downgrade"
        strategy="beforeInteractive"
        src="https://try.abtasty.com/84cd1e2faac83d8b7a70cec0a42ad05e.js"
      />
    </>
  );
}

