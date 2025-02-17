import { PRODUCTS } from "@/data/products";
import Aside from "@/ui/aside";

export const metadata = {
  title: "Product",
  description:
    "Tracking products I've built. Browse around—you might find something interesting! ☕",
  openGraph: {
    siteName: "Product | Personal Logs",
    url: "https://personal-logs.vercel.app/product",
    title: "Product | Personal Logs",
    description:
      "Tracking products I've built. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-product.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product | Personal Logs",
    description:
      "Tracking products I've built. Browse around—you might find something interesting! ☕",
    images: ["https://personal-logs.vercel.app/icon/app-product.png"],
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Aside keys={Object.keys(PRODUCTS)} />
    </>
  );
}
