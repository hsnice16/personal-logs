import { JSX } from "react";

export type Talk = {
  frameElement: JSX.Element;
};

export const TALKS: { [key: string]: Talk[] } = {
  "Apr '24": [
    {
      frameElement: (
        <iframe
          width="500"
          height="275"
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
