import React from "react";
import { ArticleLink } from "./articleLink";
export const SearchArticles = ({ data, status }) => {
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  }
  return (
    <section>
      <ArticleLink data={data} />
    </section>
  );
};
