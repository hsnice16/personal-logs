import { MOVIES } from "@/data/movies";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Movie",
  description:
    "Tracking movies I've watched. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Movie | Personal Logs",
    url: "https://personal-logs.vercel.app/movie",
    title: "Movie | Personal Logs",
    description:
      "Tracking movies I've watched. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-movie.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movie | Personal Logs",
    description:
      "Tracking movies I've watched. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-movie.png"],
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
