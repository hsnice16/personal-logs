import React from "react";

import { TALKS } from "@/data/talks";

import Talk from "@/ui/talk";
import LayoutPage from "@/ui/layout-page";
import LayoutPageH3 from "@/ui/layout-page-h3";
import LayoutPageContent from "@/ui/layout-page-content";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(TALKS).map((key) => {
        const entries = TALKS[key];

        return (
          <React.Fragment key={key}>
            <LayoutPageH3 heading={key} />

            <LayoutPageContent>
              {entries.map((talk, index) => {
                return <Talk talk={talk} key={index + talk.toString()} />;
              })}
            </LayoutPageContent>
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
