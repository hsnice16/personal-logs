import React from "react";

import { WEB_SHOWS } from "@/data/web-shows";

import LayoutPage from "@/ui/layout-page";
import LayoutPageContent from "@/ui/layout-page-content";
import LayoutPageH3 from "@/ui/layout-page-h3";
import WebShow from "@/ui/web-show";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(WEB_SHOWS).map((key) => {
        const entries = WEB_SHOWS[key];

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
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
