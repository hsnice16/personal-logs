import { APP_URL } from "@/constant/value";
import { MOVIES } from "@/data/movies";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Movie",
  description:
    "Tracking movies I've watched. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Movie | Personal Logs",
    url: `${APP_URL}/movie`,
    title: "Movie | Personal Logs",
    description:
      "Tracking movies I've watched. Browse around—you might find something interesting! ☕",
    images: [`${APP_URL}/icon/app-movie.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movie | Personal Logs",
    description:
      "Tracking movies I've watched. Browse around—you might find something interesting! ☕",
    images: [`${APP_URL}/icon/app-movie.png`],
  },
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
