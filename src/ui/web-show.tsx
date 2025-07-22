import type { WebShow as TWebShow } from "@/data/web-shows";
import Image from "next/image";

type WebShowProps = {
  webShow: TWebShow;
};

export default function WebShow({ webShow }: WebShowProps) {
  return (
    <div className="bg-neutral-50 sm:w-[200px] lg:w-[220px] sm:h-[240px] lg:h-[260px]">
      {webShow.img ? (
        <Image
          src={webShow.img}
          alt={webShow.img.toString()}
          placeholder="blur"
          className="sm:max-w-[200px] lg:max-w-[220px] sm:max-h-[240px] lg:max-h-[260px]"
        />
      ) : null}
    </div>
  );
}
