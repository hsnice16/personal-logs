import React from "react";

import { PRODUCTS } from "@/data/products";

import Product from "@/ui/product";
import LayoutPage from "@/ui/layout-page";
import LayoutPageH3 from "@/ui/layout-page-h3";
import LayoutPageContent from "@/ui/layout-page-content";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(PRODUCTS).map((key) => {
        const entries = PRODUCTS[key];

        return (
          <React.Fragment key={key}>
            <LayoutPageH3 heading={key} />

            <LayoutPageContent>
              {entries.map((product) => {
                return <Product product={product} key={product.name} />;
              })}
            </LayoutPageContent>
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
