import React from "react";

import { MOVIES } from "@/data/movies";

import LayoutPage from "@/ui/layout-page";
import LayoutPageContent from "@/ui/layout-page-content";
import LayoutPageH3 from "@/ui/layout-page-h3";
import Movie from "@/ui/movie";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(MOVIES).map((key) => {
        const entries = MOVIES[key];

        return (
          <React.Fragment key={key}>
            <LayoutPageH3 heading={key} />

            <LayoutPageContent>
              {entries.map((movie) => {
                return <Movie movie={movie} key={movie.name} />;
              })}
            </LayoutPageContent>
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
