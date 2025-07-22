import React from "react";

import { WRITINGS } from "@/data/writings";

import LayoutPage from "@/ui/layout-page";
import LayoutPageContent from "@/ui/layout-page-content";
import LayoutPageH3 from "@/ui/layout-page-h3";
import Writing from "@/ui/writing";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(WRITINGS).map((key) => {
        const entries = WRITINGS[key];

        return (
          <React.Fragment key={key}>
            <LayoutPageH3 heading={key} />

            <LayoutPageContent>
              {entries.map((writing) => {
                return <Writing writing={writing} key={writing.name} />;
              })}
            </LayoutPageContent>
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
