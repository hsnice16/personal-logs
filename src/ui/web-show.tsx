import type { WebShow as TWebShow } from "@/data/web-shows";
import Image from "next/image";

type WebShowProps = {
  webShow: TWebShow;
};

export default function WebShow({ webShow }: WebShowProps) {
  return (
    <div className="relative bg-neutral-50 w-[160px] sm:w-[200px] lg:w-[220px] h-[220px] sm:h-[240px] lg:h-[260px]">
      {webShow.img ? (
        <Image
          src={webShow.img}
          alt={webShow.img.toString()}
          placeholder="blur"
          className="max-w-[160px] sm:max-w-[200px] lg:max-w-[220px] max-h-[220px] sm:max-h-[240px] lg:max-h-[260px]"
        />
      ) : null}

      <div className="opacity-0 rounded-md absolute left-0 bottom-0 right-0 top-0 bg-linear-to-t from-brown-850 to-neutral-50/2 flex flex-col justify-end p-4 text-sm gap-1 text-neutral-200">
        <p className="font-semibold">{webShow.name}</p>
      </div>
    </div>
  );
}
