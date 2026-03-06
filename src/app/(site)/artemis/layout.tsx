import { ArtemisHead } from "@/components/HeadScripts/ArtemisHead";

export default function ArtemisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArtemisHead />
      {children}
    </>
  );
}
