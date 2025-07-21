import type { CodePlaylist as TCodePlaylist } from "@/data/code-playlists";

type CodePlaylistProps = {
  codePlaylist: TCodePlaylist;
};

export default function CodePlaylist({ codePlaylist }: CodePlaylistProps) {
  return (
    <div className="w-[500px] h-[275px] bg-neutral-50">
      {codePlaylist.frameElement}
    </div>
  );
}
