import React from "react";
import { PRODUCTS } from "@/data/products";
import Product from "@/ui/product";

export default function Page() {
  return (
    <div className="flex-1 pr-2 pb-4">
      {Object.keys(PRODUCTS).map((key) => {
        const entries = PRODUCTS[key];

        return (
          <React.Fragment key={key}>
            <h3
              className="pb-6 rounded-md text-xl font-semibold pt-[165px] -mt-[140px]"
              id={key}
            >
              {key}
            </h3>

            <div className="flex flex-wrap items-center gap-4">
              {entries.map((product) => {
                return <Product product={product} key={product.name} />;
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
