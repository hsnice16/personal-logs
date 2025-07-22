import type { Talk as TTalk } from "@/data/talks";

type TalkProps = {
  talk: TTalk;
};

export default function Talk({ talk }: TalkProps) {
  return (
    <div className="w-[380px] sm:w-[420px] lg:w-[500px] h-[220px] sm:h-[240px] lg:h-[275px] bg-neutral-50">
      {talk.frameElement}
    </div>
  );
}
