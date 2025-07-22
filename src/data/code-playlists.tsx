import { JSX } from "react";

export type CodePlaylist = {
  frameElement: JSX.Element;
};

export const CODE_PLAYLISTS: { [key: string]: CodePlaylist[] } = {
  "Jul '25": [
    {
      frameElement: (
        <iframe
          className="w-[380px] sm:w-[420px] lg:w-[500px] h-[220px] sm:h-[240px] lg:h-[275px]"
          src="https://www.youtube.com/embed/videoseries?si=z-4xwM_QookTK5LY&amp;list=PLj8MD51SiJ3ojgzg28dbuTtsX6WCuOJoB"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
    },
  ],
  "May '25": [
    {
      frameElement: (
        <iframe
          className="w-[380px] sm:w-[420px] lg:w-[500px] h-[220px] sm:h-[240px] lg:h-[275px]"
          src="https://www.youtube.com/embed/videoseries?si=yfkOwpfhtVQPfxvb&amp;list=PLj8MD51SiJ3r73k0cWMU4DBCPEu4vN_D-"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ),
    },
  ],
  "Apr '25": [
    {
      frameElement: (
        <iframe
          className="w-[380px] sm:w-[420px] lg:w-[500px] h-[220px] sm:h-[240px] lg:h-[275px]"
          src="https://www.youtube.com/embed/videoseries?si=SB9eCwP_yStIgJJe&amp;list=PLj8MD51SiJ3ol0gAqfmrS0dI8EKa_X9ut"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ),
    },
  ],
};
