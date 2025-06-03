import { CODE_PLAYLISTS } from "@/data/code-playlists";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Code Playlist",
  description:
    "Tracking code playlists I've created. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Code Playlist | Personal Logs",
    url: "https://personal-logs.vercel.app/code-playlist",
    title: "Code Playlist | Personal Logs",
    description:
      "Tracking code playlists I've created. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-code-playlist.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Playlist | Personal Logs",
    description:
      "Tracking code playlists I've created. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-code-playlist.png"],
  },
};

export default function CodePlaylistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Aside keys={Object.keys(CODE_PLAYLISTS)} />
    </>
  );
}
