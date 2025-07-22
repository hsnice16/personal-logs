"use client";

import { Hamburger } from "@phosphor-icons/react";
import MobileNav from "./mobile-nav";
import { useState } from "react";

export default function MainHead() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <div className="w-full sticky top-0 bg-neutral-100/30 z-10 backdrop-blur-md border-b border-neutral-50/30 relative">
        <button
          className="block sm:hidden absolute top-5.5 left-6"
          onClick={() => setShowMobileNav(true)}
        >
          <Hamburger size={22} />
        </button>

        <div className="w-max py-4 m-auto">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold animate-typing overflow-hidden whitespace-nowrap w-max pr-3 border-r-4 border-r-black-900">
            personal logs
          </h1>
        </div>
      </div>

      <MobileNav
        show={showMobileNav}
        closeNav={() => setShowMobileNav(false)}
      />
    </>
  );
}
