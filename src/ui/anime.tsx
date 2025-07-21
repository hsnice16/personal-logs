import type { Anime as TAnime } from "@/data/animes";
import Image from "next/image";
import animeCd from "@/icon/anime-cd.png";
import clsx from "clsx";

type AnimeProps = {
  anime: TAnime;
};

export default function Anime({ anime }: AnimeProps) {
  return (
    <div className="flex flex-col border border-black-750 w-[240px] h-[240px]">
      <div className="border-b p-1">
        <p className="py-1 px-2 bg-primary-100 text-primary font-semibold">
          {anime.name}
        </p>
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={animeCd}
          alt="anime-cd"
          className="-ml-[36px] max-w-[280px]"
        />

        {anime.img ? (
          <Image
            src={anime.img}
            alt={anime.name}
            placeholder="blur"
            className={clsx(
              "absolute max-w-[172px] max-h-[164px] ml-[24px] -mt-[36px] rotate-x-[59deg] rotate-y-[4deg] -rotate-z-[34deg] anime-clip",
              {
                "h-[164px]": anime?.shape === "square",
              }
            )}
          />
        ) : null}
      </div>
    </div>
  );
}
