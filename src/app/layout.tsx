// These styles apply to every route in the application
import "./globals.css";

import MainNav from "@/ui/main-nav";
import MainHead from "@/ui/main-head";
import FirebaseAnalytics from "@/component/firebase-analytics";

import { geist } from "@/constant/font";
import clsx from "clsx";
import { Metadata } from "next";

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
      <body className={clsx(geist.className, "min-h-screen text-black-900")}>
        <FirebaseAnalytics />
        <MainHead />

        <main className="max-w-7xl m-auto flex w-full">
          <MainNav />
          {children}
        </main>
      </body>
    </html>
  );
}
