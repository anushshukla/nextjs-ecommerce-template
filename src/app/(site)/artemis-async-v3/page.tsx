import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | Artemis",
  description: "Artemis variant of the NextCommerce homepage.",
};

export default function ArtemisAsyncV3Page() {
  return <Home />;
}
