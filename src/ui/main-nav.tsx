"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import PaymentLink from "./payment-link";
import { LINKS } from "@/data/navs";

import {
  InstagramLogo,
  XLogo,
  MediumLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export default function MainNav() {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="sm:w-[192px] lg:w-3xs pt-6 h-full">
      <div className="flex flex-col fixed justify-between">
        <div className="sm:ml-[8px] lg:ml-0">
          <p className="mb-2 rounded-md px-2 py-1 text-base font-semibold text-black-700">
            Page
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
              );
            })}
          </div>
        </div>

        <div className="ml-2 fixed bottom-6 flex flex-col gap-2">
          <div className="flex justify-end items-center gap-2">
            <a
              href="https://x.com/hsnice16"
              target="_blank"
              className="flex items-center justify-center bg-neutral-50 p-1 rounded-md shadow-md text-black-700"
            >
              <XLogo size={18} />
            </a>
          </div>

          <div className="flex justify-end items-center gap-2">
            <a
              href="https://www.youtube.com/@hsnice16"
              target="_blank"
              className="flex items-center justify-center bg-neutral-50 p-1 rounded-md shadow-md text-black-700"
            >
              <YoutubeLogo size={18} />
            </a>

            <a
              href="https://www.instagram.com/hsnice16/"
              target="_blank"
              className="flex items-center justify-center bg-neutral-50 p-1 rounded-md shadow-md text-black-700"
            >
              <InstagramLogo size={18} />
            </a>

            <a
              href="https://hsnice16.medium.com/"
              target="_blank"
              className="flex items-center justify-center bg-neutral-50 p-1 rounded-md shadow-md text-black-700"
            >
              <MediumLogo size={18} />
            </a>
          </div>

          <PaymentLink />
        </div>
      </div>
    </nav>
  );
}
