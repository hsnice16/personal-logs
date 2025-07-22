import React from "react";

import { CODE_PLAYLISTS } from "@/data/code-playlists";

import CodePlaylist from "@/ui/code-playlist";
import LayoutPage from "@/ui/layout-page";
import LayoutPageH3 from "@/ui/layout-page-h3";
import LayoutPageContent from "@/ui/layout-page-content";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(CODE_PLAYLISTS).map((key) => {
        const entries = CODE_PLAYLISTS[key];

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
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
