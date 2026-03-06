import { VwoSyncHead } from "@/components/HeadScripts/VwoSyncHead";

export default function VwoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VwoSyncHead />
      {children}
    </>
  );
}
