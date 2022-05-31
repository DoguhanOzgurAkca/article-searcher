import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

export const SearchArticles = ({ data, status }) => {
  const navigate = useNavigate();
  const goToArticle = () => {
    navigate({
      pathname: "/posts",
    });
  };
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  }
  return (
    <section>
      <div>
        {data.map((article) => {
          const {
            headline: { main },
            _id,
          } = article;
          return (
            <article key={_id}>
              <Link to="/home/articles" state={[article]}>
                {main}
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};
