import React from "react";

import { ANIMES } from "@/data/animes";

import Anime from "@/ui/anime";
import LayoutPage from "@/ui/layout-page";
import LayoutPageContent from "@/ui/layout-page-content";
import LayoutPageH3 from "@/ui/layout-page-h3";
import Separator from "@/ui/separator";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(ANIMES).map((key, index, array) => {
        const entries = ANIMES[key];
        const isLast = index + 1 === array.length;

        return (
          <React.Fragment key={key}>
            <LayoutPageH3 heading={key} />

            <LayoutPageContent>
              {entries.map((anime) => {
                return <Anime anime={anime} key={anime.name} />;
              })}
            </LayoutPageContent>

            {isLast ? null : <Separator />}
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
