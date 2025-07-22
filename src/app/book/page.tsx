import React from "react";

import { BOOKS } from "@/data/books";

import Book from "@/ui/book";
import LayoutPage from "@/ui/layout-page";
import LayoutPageContent from "@/ui/layout-page-content";
import LayoutPageH3 from "@/ui/layout-page-h3";
import Separator from "@/ui/separator";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(BOOKS).map((key, index, array) => {
        const entries = BOOKS[key];
        const isLast = index + 1 === array.length;

        return (
          <React.Fragment key={key}>
            <LayoutPageH3 heading={key} />

            <LayoutPageContent>
              {entries.map((book) => {
                return <Book book={book} key={book.name} />;
              })}
            </LayoutPageContent>

            {isLast ? null : <Separator />}
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
