import React from "react";
import { Link, useNavigate } from "react-router-dom";
export const SearchedArticles = ({ articles }) => {
  return (
    <section>
      {articles.map((article) => {
        const {
          headline: { main },
          _id,
        } = article;
        return (
          <article key={_id}>
            <Link to="/articles" state={article}>
              {main}
            </Link>
          </article>
        );
      })}
    </section>
  );
};
