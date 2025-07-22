"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { LINKS } from "@/data/navs";
import { X } from "@phosphor-icons/react";

type NavPageLinksProps = {
  closeNav?: () => void;
};

export default function NavPageLinks({ closeNav }: NavPageLinksProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="sm:ml-[8px] lg:ml-0">
      <p className="mb-2 rounded-md px-2 py-1 text-base sm:text-[15px] lg:text-base font-semibold text-black-700 flex items-center justify-between sm:block">
        Page
        <button className="block sm:hidden" onClick={closeNav}>
          <X className="sm:text-[16px]" weight="bold" />
        </button>
      </p>

      <div className="flex flex-col">
        {Object.keys(LINKS).map((key) => {
          const entries = LINKS[key];

          return (
            <div className="px-2 flex flex-col" key={key}>
              {key !== "0" ? <p className="text-gray-100">---</p> : null}

              {entries.map((link) => {
                const isActive = segment === link.href;

                return (
                  <Link
                    key={link.href}
                    href={"/" + link.href}
                    className={clsx(
                      "mb-1 ml-1 px-2 text-sm sm:text-[13px] lg:text-sm font-normal",
                      {
                        "text-primary": isActive,
                        "text-gray-100": !isActive,
                      }
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
