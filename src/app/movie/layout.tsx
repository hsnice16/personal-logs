import MovieAside from "@/ui/movie-aside";

export const metadata = {
  title: "Movie",
};

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <MovieAside />
    </>
  );
}
