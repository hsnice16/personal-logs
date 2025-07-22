import type { Talk as TTalk } from "@/data/talks";

type TalkProps = {
  talk: TTalk;
};

export default function Talk({ talk }: TalkProps) {
  return (
    <div className="sm:w-[420px] lg:w-[500px] sm:h-[240px] lg:h-[275px] bg-neutral-50">
      {talk.frameElement}
    </div>
  );
}
