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
    <section className="self-center">
      <div className="inline-flex w-auto max-w-2xl">
        <p className="mr-2 mb-2 mt-4 bg-gray-300 text-gray-800 font-bold py-1 px-1 rounded-l w-18   ">
          Results:
        </p>
      </div>
      <ArticleLink data={data} />
    </section>
  );
};
