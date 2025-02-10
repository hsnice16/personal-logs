import { MOVIES } from "@/data/movies";
import Movie from "@/ui/movie";
import React from "react";

export default async function Page() {
  return (
    <div className="flex-1 pr-2 pb-4">
      {Object.keys(MOVIES).map((key) => {
        const entries = MOVIES[key];

        return (
          <React.Fragment key={key}>
            <h3
              className="pb-6 rounded-md text-xl font-semibold pt-[165px] -mt-[140px]"
              id={key}
            >
              {key}
            </h3>

            <div className="flex flex-wrap items-center justify-start gap-4">
              {entries.map((movie) => {
                return <Movie movie={movie} key={movie.name} />;
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
