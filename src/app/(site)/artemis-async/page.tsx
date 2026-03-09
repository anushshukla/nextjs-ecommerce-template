import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | Artemis Async",
  description:
    "Artemis Async variant of the NextCommerce homepage with async external script.",
};

export default function ArtemisAsyncPage() {
  return <Home />;
}

