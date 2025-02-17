import { TALKS } from "@/data/talks";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Talk",
  description:
    "Tracking talks I've given. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Talk | Personal Logs",
    url: "https://personal-logs.vercel.app/talk",
    title: "Talk | Personal Logs",
    description:
      "Tracking talks I've given. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-talk.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talk | Personal Logs",
    description:
      "Tracking talks I've given. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-talk.png"],
  },
};

export default function TalkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Aside keys={Object.keys(TALKS)} />
    </>
  );
}
