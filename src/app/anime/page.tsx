import { ANIMES } from "@/data/animes";
import Anime from "@/ui/anime";
import React from "react";

export default function Page() {
  return (
    <div className="flex-1 pr-2 pb-4">
      {Object.keys(ANIMES).map((key) => {
        const entries = ANIMES[key];

        return (
          <React.Fragment key={key}>
            <h3
              className="pb-6 rounded-md text-xl font-semibold pt-[165px] -mt-[140px]"
              id={key}
            >
              {key}
            </h3>

            <div className="flex flex-wrap items-center justify-start gap-4">
              {entries.map((anime) => {
                return <Anime anime={anime} key={anime.name} />;
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
