import React from "react";
import { useNavigate } from "react-router-dom";

export const ArticleLink = ({ data }) => {
  //moves from search page to article page, retaining the article object via states
  const navigate = useNavigate();
  const goToArticle = (article) => {
    navigate("/articles", {
      state: article,
    });
  };

  return (
    <div>
      <div className="rounded-lg border-2 p-4 border-secondaryPink h-98">
        {/* Goes through the articles in the data array, picking up headline and id from them. */}
        {data.map((article) => {
          const {
            headline: { main },
            _id,
          } = article;

          return (
            <article key={_id} className="">
              <div
                class="m-1 bg-primaryDarkPurple text-secondaryWhite rounded-lg border-1 border-white p-1 truncate"
                onClick={() => {
                  goToArticle(article);
                }}
              >
                {main}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
