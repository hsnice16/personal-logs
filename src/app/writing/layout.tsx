import { WRITINGS } from "@/data/writings";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Writing",
};

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Aside keys={Object.keys(WRITINGS)} />
    </>
  );
}
