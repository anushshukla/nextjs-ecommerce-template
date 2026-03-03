import Home from "@/components/Home";
import type { Metadata } from "next";
import { VwoSyncHead } from "@/components/HeadScripts/VwoSyncHead";

export const metadata: Metadata = {
  title: "NextCommerce | VWO Sync",
  description: "VWO Sync library variant of the NextCommerce homepage.",
};

export default function VwoPage() {
  return (
    <>
      <VwoSyncHead />
      <Home />
    </>
  );
}

