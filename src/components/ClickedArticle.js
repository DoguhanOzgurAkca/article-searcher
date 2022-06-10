import React from "react";
import { useNavigate } from "react-router-dom";
export const ClickedArticle = ({ article }) => {
  const navigate = useNavigate();
  // pulls headline, id and such from the article array.
  const {
    headline: { main },
    _id,
    lead_paragraph,
    pub_date,
    web_url,
    abstract,
  } = article;
  // slices the date we got from the article array to just have day month and year.
  function dateSlicer(date) {
    const changedDate = date.slice(0, 9).replaceAll("-", ".");
    return changedDate;
  }

  return (
    <div className="container w-auto max-w-2xl mt-20 border-8 border-double border-secondaryPink rounded-md p-5">
      <article key={_id}>
        <section className="w-auto max-w-2xl flex flex-wrap">
          <div>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-l w-15 h-15"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go back
            </button>

            <div className="bg-primaryDarkPurple border-2 rounded-lg mb-2 p-1 mt-2">
              <p className="text-2xl text-secondaryWhite">{main}</p>
              <p className="mt-2 text-secondaryWhite ">
                {dateSlicer(pub_date)}
              </p>
            </div>

            <div className="bg-primaryPurple border-2 rounded-lg p-2">
              <p className="text-xl mb-5">{abstract}</p>
              <p className="text-xl mt-5 mb-5">{lead_paragraph}</p>
            </div>
            <div className="mt-5 ml-100 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-r">
              <a className="" href={web_url}>
                Read the full article
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};
