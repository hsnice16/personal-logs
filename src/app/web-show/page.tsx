import React from "react";

import { WEB_SHOWS } from "@/data/web-shows";

import LayoutPage from "@/ui/layout-page";
import LayoutPageContent from "@/ui/layout-page-content";
import LayoutPageH3 from "@/ui/layout-page-h3";
import WebShow from "@/ui/web-show";
import Separator from "@/ui/separator";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(WEB_SHOWS).map((key, index, array) => {
        const entries = WEB_SHOWS[key];
        const isLast = index + 1 === array.length;

        return (
          <React.Fragment key={key}>
            <LayoutPageH3 heading={key} />

            <LayoutPageContent>
              {entries.map((webShow, index) => {
                return (
                  <WebShow
                    webShow={webShow}
                    key={index + webShow.img.toString()}
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
