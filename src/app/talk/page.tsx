import React from "react";
import { TALKS } from "@/data/talks";
import Talk from "@/ui/talk";

export default function Page() {
  return (
    <div className="flex-1 pr-2 pb-4">
      {Object.keys(TALKS).map((key) => {
        const entries = TALKS[key];

        return (
          <React.Fragment key={key}>
            <h3
              className="pb-6 rounded-md text-xl font-semibold pt-[165px] -mt-[140px]"
              id={key}
            >
              {key}
            </h3>

            <div className="flex flex-wrap items-center gap-4">
              {entries.map((talk, index) => {
                return <Talk talk={talk} key={index + talk.toString()} />;
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
