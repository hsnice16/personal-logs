import { ANIMES } from "@/data/animes";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Anime",
};

export default function AnimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Aside keys={Object.keys(ANIMES)} />
    </>
  );
}
