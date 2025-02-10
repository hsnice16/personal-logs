import bookCover from "@/icon/book-cover.webp";
import { BOOKS } from "@/data/books";
import Image from "next/image";
import clsx from "clsx";

type BookProps = {
  book: (typeof BOOKS)["Previous"][0];
};

export default function Book({ book }: BookProps) {
  return (
    <div className="rounded-md bg-neutral-50 flex-1 flex justify-center items-center relative">
      <div className="relative w-[240px] h-[240px]">
        <Image src={bookCover} alt="book-cover" />

        {book.img ? (
          <Image
            src={book.img}
            alt="steve-jobs"
            placeholder="blur"
            className={clsx(
              "absolute max-h-[165px] max-w-[136px] left-[42px] top-[27px] rotate-x-[38deg] -rotate-y-[24deg] rotate-z-[19deg]",
              {
                "h-[166px]": book?.shape === "square",
              }
            )}
          />
        ) : null}
      </div>

      <div className="rounded-md absolute left-0 bottom-0 right-0 top-0 bg-linear-to-t from-neutral-200 to-neutral-50/8 flex flex-col justify-end p-4 text-sm gap-1">
        <p className="font-semibold">{book.name}</p>
        <p className="text-xs italic">by {book.author}</p>

        {book.tags?.length ? (
          <div className="flex gap-2 mt-1 flex-wrap">
            {book.tags.map((tag) => {
              return (
                <span
                  className="px-1 bg-neutral-300 rounded-md text-xs font-medium"
                  key={tag}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
