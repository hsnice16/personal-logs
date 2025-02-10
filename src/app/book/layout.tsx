import { BOOKS } from "@/data/books";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Book",
  description:
    "Tracking books I've read. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Book | Personal Logs",
    url: "https://personal-logs.vercel.app/book",
    title: "Book | Personal Logs",
    description:
      "Tracking books I've read. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-book.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book | Personal Logs",
    description:
      "Tracking books I've read. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-book.png"],
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
