import Link from "next/link";

type AsideProps = {
  keys: string[];
};

export default function Aside({ keys }: AsideProps) {
  return (
    <aside className="pt-6 pl-8 hidden lg:block">
      <div className="flex flex-col fixed">
        {keys.map((key) => {
          return (
            <Link
              href={"#" + key}
              key={key}
              className="text-gray-100 mb-1 px-2 text-xs"
            >
              {key}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
