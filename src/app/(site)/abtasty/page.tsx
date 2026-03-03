import Home from "@/components/Home";
import type { Metadata } from "next";
import { AbtastyHead } from "@/components/HeadScripts/AbtastyHead";

export const metadata: Metadata = {
  title: "NextCommerce | AB Tasty",
  description: "AB Tasty variant of the NextCommerce homepage.",
};

export default function AbtastyPage() {
  return (
    <>
      <AbtastyHead />
      <Home />
    </>
  );
}

