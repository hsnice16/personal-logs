import { CODE_PLAYLISTS } from "@/data/code-playlists";

type CodePlaylistProps = {
  codePlaylist: (typeof CODE_PLAYLISTS)["Apr '25"][0];
};

export default function CodePlaylist({ codePlaylist }: CodePlaylistProps) {
  return (
    <div className="w-[500px] h-[275px] bg-neutral-50">
      {codePlaylist.frameElement}
    </div>
  );
}
