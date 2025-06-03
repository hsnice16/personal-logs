import React from "react";
import { CODE_PLAYLISTS } from "@/data/code-playlists";
import CodePlaylist from "@/ui/code-playlist";

export default function Page() {
  return (
    <div className="flex-1 pr-2 pb-4">
      {Object.keys(CODE_PLAYLISTS).map((key) => {
        const entries = CODE_PLAYLISTS[key];

        return (
          <React.Fragment key={key}>
            <h3
              className="pb-6 rounded-md text-xl font-semibold pt-[165px] -mt-[140px]"
              id={key}
            >
              {key}
            </h3>

            <div className="flex flex-wrap items-center gap-4">
              {entries.map((codePlaylist, index) => {
                return (
                  <CodePlaylist
                    codePlaylist={codePlaylist}
                    key={index + codePlaylist.toString()}
                  />
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
