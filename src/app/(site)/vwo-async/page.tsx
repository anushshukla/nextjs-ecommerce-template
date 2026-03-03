import Home from "@/components/Home";
import type { Metadata } from "next";
import { VwoHead } from "@/components/HeadScripts/VwoHead";

export const metadata: Metadata = {
  title: "NextCommerce | VWO Async",
  description: "VWO Async SmartCode variant of the NextCommerce homepage.",
};

export default function VwoAsyncPage() {
  return (
    <>
      <VwoHead />
      <Home />
    </>
  );
}

