import bookCover from "@/icon/book-cover.webp";
import type { Book as TBook } from "@/data/books";
import Image from "next/image";
import clsx from "clsx";

type BookProps = {
  book: TBook;
};

export default function Book({ book }: BookProps) {
  return (
    <div className="rounded-md bg-neutral-50 flex-1 flex justify-center items-center relative">
      {book.providers?.length ? (
        <div className="absolute top-0 right-0 flex flex-col p-4 gap-2">
          {book.providers.map((provider) => {
            return (
              <a
                href={provider.link}
                target="_blank"
                className="flex text-sm gap-1 items-center justify-center bg-neutral-50 p-1 rounded-md shadow-md text-black-700 z-10 hover:[&_img]:animate-pendulum"
                key={provider.link}
              >
                <Image
                  src={provider.img}
                  alt=""
                  width={20}
                  height={20}
                  className="opacity-75"
                />
              </a>
            );
          })}
        </div>
      ) : null}

      <div className="relative w-[190px] sm:w-[220px] lg:w-[240px] h-[190px] sm:h-[220px] lg:h-[240px]">
        <Image src={bookCover} alt="book-cover" />

        {book.img ? (
          <Image
            src={book.img}
            alt={book.name}
            placeholder="blur"
            className={clsx(
              "absolute max-h-[133px] sm:max-h-[150px] lg:max-h-[165px] max-w-[108px] sm:max-w-[124px] lg:max-w-[136px] left-[33px] sm:left-[40px] lg:left-[42px] top-[21px] sm:top-[25px] lg:top-[27px] rotate-x-[38deg] -rotate-y-[24deg] rotate-z-[19deg]",
              {
                "h-[166px]": book?.shape === "square",
              }
            )}
          />
        ) : null}
      </div>

      <div className="rounded-md absolute left-0 bottom-0 right-0 top-0 bg-linear-to-t from-neutral-200 to-neutral-50/2 flex flex-col justify-end p-4 gap-1">
        <p className="text-xs lg:text-sm font-semibold">{book.name}</p>
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
