import { APP_URL } from "@/constant/value";
import { ANIMES } from "@/data/animes";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Anime",
  description:
    "Tracking animes I've watched. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Anime | Personal Logs",
    url: `${APP_URL}/anime`,
    title: "Anime | Personal Logs",
    description:
      "Tracking animes I've watched. Browse around—you might find something interesting! ☕",
    images: [`${APP_URL}/icon/app-anime.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anime | Personal Logs",
    description:
      "Tracking animes I've watched. Browse around—you might find something interesting! ☕",
    images: [`${APP_URL}/icon/app-anime.png`],
  },
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
