import React from "react";
import { START_TIME_SNIPPET } from "./constants";

export function ArtemisHead() {
  return (
    <>
      <script
        id="artemis-start-time"
        nonce="456723789323765435"
        dangerouslySetInnerHTML={{
          __html: `${START_TIME_SNIPPET}/*_vwo_cookieDomain='nextjs-ecommerce-template-ruddy.vercel.app'*/;`,
        }}
      />
      <script
        nonce="456723789323765435"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://dacdn.abtasty.com/cloud-run-testing/final/4001222.js"
        id="vwoCode"
      />
    </>
  );
}

