import React from "react";

import { BOOKS } from "@/data/books";

import Book from "@/ui/book";
import LayoutPage from "@/ui/layout-page";
import LayoutPageContent from "@/ui/layout-page-content";
import LayoutPageH3 from "@/ui/layout-page-h3";

export default function Page() {
  return (
    <LayoutPage>
      {Object.keys(BOOKS).map((key) => {
        const entries = BOOKS[key];

        return (
          <React.Fragment key={key}>
            <LayoutPageH3 heading={key} />

            <LayoutPageContent>
              {entries.map((book) => {
                return <Book book={book} key={book.name} />;
              })}
            </LayoutPageContent>
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
