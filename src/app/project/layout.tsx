import { APP_URL } from "@/constant/value";
import { PROJECTS } from "@/data/projects";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Project",
  description:
    "Tracking Projects I've built. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Project | Personal Logs",
    url: `${APP_URL}/project`,
    title: "Project | Personal Logs",
    description:
      "Tracking Projects I've built. Browse around—you might find something interesting! ☕",
    images: [`${APP_URL}/icon/app-project.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project | Personal Logs",
    description:
      "Tracking Projects I've built. Browse around—you might find something interesting! ☕",
    images: [`${APP_URL}/icon/app-project.png`],
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Aside keys={Object.keys(PROJECTS)} />
    </>
  );
}
