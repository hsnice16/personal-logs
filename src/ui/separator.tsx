"use client";

import { DotOutline } from "@phosphor-icons/react";

export default function Separator() {
  return (
    <div className="block sm:hidden flex items-center justify-center mt-[4px]">
      <DotOutline size={16} />
      <DotOutline size={16} />
      <DotOutline size={16} />
    </div>
  );
}
