import { StaticImageData } from "next/image";

import KpiMetricCard from "@/product/kpi-metric-card.png";

export type Product = {
  name: string;
  link: string;
  cost: string;
  img: StaticImageData;
};

export const PRODUCTS: { [key: string]: Product[] } = {
  "Aug '24": [
    {
      name: "KPI Metric Cards Component",
      link: "https://hsnice.gumroad.com/l/pdnbo",
      cost: "$2",
      img: KpiMetricCard,
    },
  ],
};
