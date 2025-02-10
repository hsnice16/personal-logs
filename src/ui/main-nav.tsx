"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import PaymentLink from "./payment-link";

const links = [
  {
    href: "book",
    label: "Book",
  },
];

export default function MainNav() {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="w-3xs pt-6 h-full">
      <div className="flex flex-col fixed justify-between">
        <div>
          <p className="mb-2 rounded-md px-2 py-1 text-base font-semibold text-black-700">
            Page
          </p>

          {links.map((link) => {
            const isActive = segment === link.href;

            return (
              <Link
                key={link.href}
                href={"/" + link.href}
                className={clsx("mb-1 ml-1 px-2 text-sm font-normal", {
                  "text-primary": isActive,
                  "text-gray-100": !isActive,
                })}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <PaymentLink />
      </div>
    </nav>
  );
}
