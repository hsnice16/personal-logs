import type { Writing as TWriting } from "@/data/writings";
import Image from "next/image";

type WritingProps = {
  writing: TWriting;
};

export default function Writing({ writing }: WritingProps) {
  return (
    <a href={writing.link} target="_blank">
      <div className="flex flex-col w-[180px] sm:w-[200px] lg:w-[240px] min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] gap-1">
        {writing.img ? (
          <Image
            src={writing.img}
            alt={writing.name}
            placeholder="blur"
            className="max-w-[180px] sm:max-w-[200px] lg:max-w-[240px] max-h-[262px] sm:max-h-[282px] lg:max-h-[302px]"
          />
        ) : null}

        <p className="text-[10px] sm:text-xs text-right underline text-black-700">
          {writing.name}
        </p>
      </div>
    </a>
  );
}
