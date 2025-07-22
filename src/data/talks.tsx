import { JSX } from "react";

export type Talk = {
  frameElement: JSX.Element;
};

export const TALKS: { [key: string]: Talk[] } = {
  "Apr '24": [
    {
      frameElement: (
        <iframe
          className="w-[380px] sm:w-[420px] lg:w-[500px] h-[220px] sm:h-[240px] lg:h-[275px]"
          src="https://www.youtube.com/embed/5nwA9B9LSaM?si=Vxmwn1wZ2aw-LrA8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ),
    },
  ],
};
