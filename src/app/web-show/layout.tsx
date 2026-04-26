import { APP_URL } from "@/constant/value";
import { WEB_SHOWS } from "@/data/web-shows";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Web Show",
  description:
    "Tracking web shows I've watched. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Web Show | Personal Logs",
    url: `${APP_URL}/web-show`,
    title: "Web Show | Personal Logs",
    description:
      "Tracking web shows I've watched. Browse around—you might find something interesting! ☕",
    images: [`${APP_URL}/icon/app-web-show.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Show | Personal Logs",
    description:
      "Tracking web shows I've watched. Browse around—you might find something interesting! ☕",
    images: [`${APP_URL}/icon/app-web-show.png`],
  },
};

export default function WebShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Aside keys={Object.keys(WEB_SHOWS)} />
    </>
  );
}
