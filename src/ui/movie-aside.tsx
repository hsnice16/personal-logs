import { MOVIES } from "@/data/movies";
import Link from "next/link";

export default function MovieAside() {
  return (
    <aside className="pt-6 pl-8">
      <div className="flex flex-col fixed">
        {Object.keys(MOVIES).map((key) => {
          return (
            <Link
              href={"#" + key}
              key={key}
              className="text-gray-100 mb-1 px-2 text-sm"
            >
              {key}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
