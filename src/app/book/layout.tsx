import { BOOKS } from "@/data/books";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Book",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Aside keys={Object.keys(BOOKS)} />
    </>
  );
}
