import React from "react";

import { ANIMES } from "@/data/animes";

import Anime from "@/ui/anime";
import LayoutPage from "@/ui/layout-page";
import LayoutPageContent from "@/ui/layout-page-content";
import LayoutPageH3 from "@/ui/layout-page-h3";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(ANIMES).map((key) => {
        const entries = ANIMES[key];

        return (
          <React.Fragment key={key}>
            <LayoutPageH3 heading={key} />

            <LayoutPageContent>
              {entries.map((anime) => {
                return <Anime anime={anime} key={anime.name} />;
              })}
            </LayoutPageContent>
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
