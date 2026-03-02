import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | VWO Async",
  description: "VWO Async SmartCode variant of the NextCommerce homepage.",
};

export default function VwoPage() {
  return (
    <>
      <Home />
    </>
  );
}

