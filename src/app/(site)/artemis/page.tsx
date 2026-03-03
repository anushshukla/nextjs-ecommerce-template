import Home from "@/components/Home";
import type { Metadata } from "next";
import { ArtemisHead } from "@/components/HeadScripts/ArtemisHead";

export const metadata: Metadata = {
  title: "NextCommerce | Artemis",
  description: "Artemis variant of the NextCommerce homepage.",
};

export default function ArtemisPage() {
  return (
    <>
      <ArtemisHead />
      <Home />
    </>
  );
}

