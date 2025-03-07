import { WEB_SHOWS } from "@/data/web-shows";
import Image from "next/image";

type WebShowProps = {
  webShow: (typeof WEB_SHOWS)["Previous"][0];
};

export default function WebShow({ webShow }: WebShowProps) {
  return (
    <div className="bg-neutral-50 w-[220px] h-[260px]">
      {webShow.img ? (
        <Image
          src={webShow.img}
          alt={webShow.img.toString()}
          placeholder="blur"
          className="max-w-[220px] max-h-[260px]"
        />
      ) : null}
    </div>
  );
}
