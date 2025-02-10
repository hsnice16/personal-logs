import BookAside from "@/ui/book-aside";

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <BookAside />
    </>
  );
}
