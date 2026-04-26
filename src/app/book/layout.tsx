import { APP_URL } from "@/constant/value";
import { BOOKS } from "@/data/books";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Book",
  description:
    "Tracking books I've read. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Book | Personal Logs",
    url: `${APP_URL}/book`,
    title: "Book | Personal Logs",
    description:
      "Tracking books I've read. Browse around—you might find something interesting! ☕",
    images: [`${APP_URL}/icon/app-book.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book | Personal Logs",
    description:
      "Tracking books I've read. Browse around—you might find something interesting! ☕",
    images: [`${APP_URL}/icon/app-book.png`],
  },
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
