"use client";

import type { Product as TProduct } from "@/data/products";
import Image from "next/image";
import ProductLogo from "@/product/product-logo.webp";
import { Link } from "@phosphor-icons/react";

type ProductProps = {
  product: TProduct;
};

export default function Product({ product }: ProductProps) {
  return (
    <div className="rounded-md bg-neutral-50 flex flex-col w-[200px] sm:w-[220px] lg:w-[240px] gap-1 border border-black-750">
      <a href={product.link} target="_blank">
        <div className="relative">
          <span className="absolute bottom-2 right-2 w-[26px] sm:w-[28px] lg:w-[30px] h-[26px] sm:h-[28px] lg:h-[30px] bg-neutral-50 flex items-center justify-center rounded-full">
            <Link className="sm:text-[16px] lg:text-[18px] text-black-900" />
          </span>

          <Image
            src={product.img}
            alt={product.name}
            placeholder="blur"
            className="w-full min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]"
          />
        </div>
      </a>

      <p className="pt-3 px-2.5 font-semibold text-[15px] lg:text-base">
        {product.name}
      </p>
      <div className="px-2.5 pb-3 flex items-center justify-start gap-1">
        <Image
          src={ProductLogo}
          alt="logo"
          placeholder="blur"
          className="w-[15px] h-[15px] rounded-full"
        />

        <p className="text-xs underline">himanshu-singh</p>
      </div>

      <p className="py-3 px-2.5 border-t border-black-750">
        <span className="font-semibold bg-primary-100 text-primary min-w-[60px] inline-block py-1 pl-3 relative">
          <span className="block absolute top-1 -right-3 h-[24px] size-[25px] bg-neutral-50 rotate-45 text-[15px] lg:text-base" />
          {product.cost}
        </span>
      </p>
    </div>
  );
}
