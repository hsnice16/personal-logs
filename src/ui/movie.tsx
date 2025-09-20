import moviePoster from "@/icon/movie-poster.png";
import type { Movie as TMovie } from "@/data/movies";
import Image from "next/image";
import clsx from "clsx";

type MovieProps = {
  movie: TMovie;
};

export default function Movie({ movie }: MovieProps) {
  return (
    <div className="rounded-md bg-neutral-50 flex justify-center items-center relative overflow-hidden hover:[&_div:nth-child(2)]:movie-hover cursor-help">
      <div className="w-[160px] sm:w-[200px] lg:w-[220px] h-[220px] sm:h-[240px] lg:h-[260px] relative">
        <Image src={moviePoster} alt="movie-poster" className="h-full w-full" />

        {movie.img ? (
          <Image
            src={movie.img}
            alt={movie.name}
            placeholder="blur"
            className={clsx(
              "absolute max-w-[102px] sm:max-w-[122px] lg:max-w-[132px] max-h-[152px] sm:max-h-[162px] lg:max-h-[172px] top-[42px] sm:top-[52px] left-[30px] sm:left-[36px] border border-white"
            )}
          />
        ) : null}
      </div>

      <div className="opacity-0 rounded-md absolute left-0 bottom-0 right-0 top-0 bg-linear-to-t from-brown-850 to-neutral-50/2 flex flex-col justify-end p-4 text-sm gap-1 text-neutral-200">
        <p className="font-semibold">{movie.name}</p>
      </div>
    </div>
  );
}
