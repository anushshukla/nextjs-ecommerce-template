import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | Artemis Insights",
  description: "Artemis Insights variant of the NextCommerce homepage.",
};

export default function ArtemisInsightsPage() {
  return <Home />;
}

