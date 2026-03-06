import { AbtastyHead } from "@/components/HeadScripts/AbtastyHead";

export default function AbtastyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AbtastyHead />
      {children}
    </>
  );
}
