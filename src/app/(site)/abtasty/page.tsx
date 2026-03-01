import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | AB Tasty",
  description: "AB Tasty variant of the NextCommerce homepage.",
};

export default function AbtastyPage() {
  return (
    <>
      <Home />
    </>
  );
}

