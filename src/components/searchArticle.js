import React from "react";
import { Link } from "react-router-dom";
export const SearchArticles = ({ articles, currentPage }) => {
  return (
    <section>
      {articles.map((article) => {
        const {
          headline: { main },
          _id,
        } = article;
        return (
          <article key={_id}>
            <Link to="/articles" state={[article, currentPage]}>
              {main}
            </Link>
          </article>
        );
      })}
    </section>
  );
};
