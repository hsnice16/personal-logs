import React from "react";

import { MOVIES } from "@/data/movies";

import LayoutPage from "@/ui/layout-page";
import LayoutPageContent from "@/ui/layout-page-content";
import LayoutPageH3 from "@/ui/layout-page-h3";
import Movie from "@/ui/movie";
import Separator from "@/ui/separator";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(MOVIES).map((key, index, array) => {
        const entries = MOVIES[key];
        const isLast = index + 1 === array.length;

        return (
          <React.Fragment key={key}>
            <LayoutPageH3 heading={key} />

            <LayoutPageContent>
              {entries.map((movie) => {
                return <Movie movie={movie} key={movie.name} />;
              })}
            </LayoutPageContent>

            {isLast ? null : <Separator />}
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
