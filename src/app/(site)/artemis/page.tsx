import Home from "@/components/Home";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NextCommerce | Artemis",
  description: "Artemis variant of the NextCommerce homepage.",
};

export default function ArtemisPage() {
  return (
    <>
      <Home />
    </>
  );
}

