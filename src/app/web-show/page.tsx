import { WEB_SHOWS } from "@/data/web-shows";
import WebShow from "@/ui/web-show";
import React from "react";

export default function Page() {
  return (
    <div className="flex-1 pr-2 pb-4">
      {Object.keys(WEB_SHOWS).map((key) => {
        const entries = WEB_SHOWS[key];

        return (
          <React.Fragment key={key}>
            <h3
              className="pb-6 rounded-md text-xl font-semibold pt-[165px] -mt-[140px]"
              id={key}
            >
              {key}
            </h3>

            <div className="flex flex-wrap items-start justify-start gap-4">
              {entries.map((webShow, index) => {
                return (
                  <WebShow
                    webShow={webShow}
                    key={index + webShow.img.toString()}
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
