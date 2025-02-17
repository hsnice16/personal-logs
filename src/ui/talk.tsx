import { TALKS } from "@/data/talks";

type TalkProps = {
  talk: (typeof TALKS)["Apr '24"][0];
};

export default function Talk({ talk }: TalkProps) {
  return (
    <div className="w-[500px] h-[275px] bg-neutral-50">{talk.frameElement}</div>
  );
}
