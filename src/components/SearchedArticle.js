import React from "react";
import { useNavigate } from "react-router-dom";
export const SearchedArticle = ({ article, currentPage }) => {
  const navigate = useNavigate();
  const {
    headline: { main },
    _id,
    lead_paragraph,
    pub_date,
    web_url,
    abstract,
  } = article;

  function dateSlicer(date) {
    const changedDate = date.slice(0, 9).replaceAll("-", ".");
    return changedDate;
  }

  return (
    <article key={_id}>
      <section className="w-auto max-w-2xl flex flex-wrap">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-l w-15 h-15"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back.
        </button>
        <div className="bg-gray-500">
          <p className="text-2xl">{main}</p>
          <p className="mr-2 mb-4">{dateSlicer(pub_date)}</p>
          <p className="text-xl mb-5">{abstract}</p>
          <p className="text-xl mt-5 mb-5">{lead_paragraph}</p>
          <a
            className="ml-120 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-l"
            href={web_url}
          >
            Read the full article
          </a>
        </div>
      </section>
    </article>
  );
};
