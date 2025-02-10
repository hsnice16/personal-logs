import { WRITINGS } from "@/data/writings";
import Writing from "@/ui/writing";
import React from "react";

export default function Page() {
  return (
    <div className="flex-1 pr-2 pb-4">
      {Object.keys(WRITINGS).map((key) => {
        const entries = WRITINGS[key];

        return (
          <React.Fragment key={key}>
            <h3
              className="pb-6 rounded-md text-xl font-semibold pt-[165px] -mt-[140px]"
              id={key}
            >
              {key}
            </h3>

            <div className="flex flex-wrap items-center justify-start gap-4">
              {entries.map((writing) => {
                return <Writing writing={writing} key={writing.name} />;
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
