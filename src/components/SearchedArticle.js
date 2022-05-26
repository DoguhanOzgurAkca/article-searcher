import React from "react";
import { useNavigate, Link } from "react-router-dom";

export const SearchedArticle = ({ article }) => {
  const navigate = useNavigate();
  const {
    headline: { main },
    _id,
    lead_paragraph,
    pub_date,
    multimedia: url,
    web_url,
    abstract,
  } = article;
  function dateSlicer(date) {
    const changedDate = date.slice(0, 9).replaceAll("-", ".");
    return changedDate;
  }
  return (
    <section>
      <article key={_id}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go back to the results page.
        </button>
        <h1>{main}</h1>
        <h4>{dateSlicer(pub_date)}</h4>
        <h3>{abstract}</h3>
        <h3>{lead_paragraph}</h3>
        <a href={web_url}>Read the full article</a>
      </article>
    </section>
  );
};
