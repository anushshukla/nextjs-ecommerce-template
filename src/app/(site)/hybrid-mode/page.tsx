import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | Hybrid Mode",
  description: "Hybrid mode variant of the NextCommerce homepage.",
};

export default function HybridModePage() {
  return <Home />;
}
