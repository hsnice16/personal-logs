"use client";

import {
  InstagramLogo,
  MediumLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import PaymentLink from "./payment-link";

export default function NavSocialLinks() {
  return (
    <div className="ml-2 sm:fixed bottom-6 flex flex-col gap-2">
      <div className="flex justify-end items-center gap-2">
        <a
          href="https://x.com/hsnice16"
          target="_blank"
          className="flex items-center justify-center bg-neutral-50 p-1 rounded-md shadow-md text-black-700"
        >
          <XLogo className="sm:text-[16px] lg:text-[18px]" />
        </a>
      </div>

      <div className="flex justify-end items-center gap-2">
        <a
          href="https://www.youtube.com/@hsnice16"
          target="_blank"
          className="flex items-center justify-center bg-neutral-50 p-1 rounded-md shadow-md text-black-700"
        >
          <YoutubeLogo className="sm:text-[16px] lg:text-[18px]" />
        </a>

        <a
          href="https://www.instagram.com/hsnice16/"
          target="_blank"
          className="flex items-center justify-center bg-neutral-50 p-1 rounded-md shadow-md text-black-700"
        >
          <InstagramLogo className="sm:text-[16px] lg:text-[18px]" />
        </a>

        <a
          href="https://hsnice16.medium.com/"
          target="_blank"
          className="flex items-center justify-center bg-neutral-50 p-1 rounded-md shadow-md text-black-700"
        >
          <MediumLogo className="sm:text-[16px] lg:text-[18px]" />
        </a>
      </div>

      <PaymentLink />
    </div>
  );
}
