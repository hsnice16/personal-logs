import React from "react";

import { CODE_PLAYLISTS } from "@/data/code-playlists";

import CodePlaylist from "@/ui/code-playlist";
import LayoutPage from "@/ui/layout-page";
import LayoutPageH3 from "@/ui/layout-page-h3";
import LayoutPageContent from "@/ui/layout-page-content";
import Separator from "@/ui/separator";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(CODE_PLAYLISTS).map((key, index, array) => {
        const entries = CODE_PLAYLISTS[key];
        const isLast = index + 1 === array.length;

        return (
          <React.Fragment key={key}>
            <LayoutPageH3 heading={key} />

            <LayoutPageContent>
              {entries.map((codePlaylist, index) => {
                return (
                  <CodePlaylist
                    codePlaylist={codePlaylist}
                    key={index + codePlaylist.toString()}
                  />
                );
              })}
            </LayoutPageContent>

            {isLast ? null : <Separator />}
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
