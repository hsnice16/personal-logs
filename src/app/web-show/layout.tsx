import { WEB_SHOWS } from "@/data/web-shows";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Web Show",
};

export default function WebShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Aside keys={Object.keys(WEB_SHOWS)} />
    </>
  );
}
