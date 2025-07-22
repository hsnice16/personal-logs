import { ReactNode } from "react";

type LayoutPageProps = {
  children: ReactNode;
};

export default function LayoutPage({ children }: LayoutPageProps) {
  return <div className="flex-1 sm:pr-4 lg:pr-2 pb-4">{children}</div>;
}
