import BookAside from "@/ui/book-aside";

export const metadata = {
  title: "Book",
};

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
