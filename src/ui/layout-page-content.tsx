import { ReactNode } from "react";

type LayoutPageContentProps = {
  children: ReactNode;
};

export default function LayoutPageContent({
  children,
}: LayoutPageContentProps) {
  return (
    <div className="flex flex-wrap items-center justify-start gap-4 p-4 sm:p-0">
      {children}
    </div>
  );
}
