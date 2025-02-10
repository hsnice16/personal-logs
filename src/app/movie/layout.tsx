import { MOVIES } from "@/data/movies";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Movie",
};

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Aside keys={Object.keys(MOVIES)} />
    </>
  );
}
