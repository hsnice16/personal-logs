// These styles apply to every route in the application
import "./globals.css";

import MainNav from "@/ui/main-nav";
import MainHead from "@/ui/main-head";
import { geist } from "@/constant/font";

import clsx from "clsx";
import { Metadata } from "next";
import { app } from "@/data/firebase";

app;

export const metadata: Metadata = {
  title: {
    template: "%s | Personal Logs",
    absolute: "Personal Logs",
  },
  description:
    "Tracking books I've read and more. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Personal Logs",
    url: "https://personal-logs.vercel.app/",
    title: "Personal Logs",
    description:
      "Tracking books I've read and more. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Logs",
    description:
      "Tracking books I've read and more. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          geist.className,
          "max-w-7xl min-h-screen m-auto text-black-900"
        )}
      >
        <MainHead />

        <main className="flex w-full">
          <MainNav />
          {children}
        </main>
      </body>
    </html>
  );
}
