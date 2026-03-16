import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | VWO SC30 Async",
  description:
    "VWO SmartCode 3.0 Async variant of the NextCommerce homepage.",
};

export default function VwoSc30AsyncPage() {
  return <Home />;
}

