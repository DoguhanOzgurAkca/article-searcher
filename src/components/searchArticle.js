import React from "react";
import { ArticleLink } from "./articleLink";
import { LatestArticleButton } from "./LatestArticleButton";

export const SearchArticles = ({ data, status, setTerm }) => {
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <section className="self-center">
      <div className="inline-flex w-auto max-w-2xl">
        {/* Result: and latest news button*/}
        <p className="mr-22 mb-2 mt-4 bg-gray-300 text-gray-800 font-bold py-1 px-1 rounded-l w-18   ">
          Results:
        </p>
        <LatestArticleButton setTerm={setTerm} />
      </div>
      {/* Articles that get rendered, Data is an array of 10 articles that we get from the API*/}
      <ArticleLink data={data} />
    </section>
  );
};
