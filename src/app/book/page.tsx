import { BOOKS } from "@/data/books";
import Book from "@/ui/book";
import React from "react";

export default function Page() {
  return (
    <div className="flex-1 pr-2 pb-4">
      {Object.keys(BOOKS).map((key) => {
        const entries = BOOKS[key];

        return (
          <React.Fragment key={key}>
            <h3
              className="pb-6 rounded-md text-xl font-semibold pt-[165px] -mt-[140px]"
              id={key}
            >
              {key}
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {entries.map((book) => {
                return <Book book={book} key={book.name} />;
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
