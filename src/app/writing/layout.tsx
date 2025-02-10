import { WRITINGS } from "@/data/writings";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Writing",
  description:
    "Tracking blogs I've written. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Writing | Personal Logs",
    url: "https://personal-logs.vercel.app/writing",
    title: "Writing | Personal Logs",
    description:
      "Tracking blogs I've written. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-writing.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing | Personal Logs",
    description:
      "Tracking blogs I've written. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-writing.png"],
  },
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
