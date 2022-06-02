import React from "react";

export const PageButtons = ({ page, setPage }) => {
  const onNext = () => {
    setPage(page + 1);
  };
  const onPrev = () => {
    setPage(page - 1);
  };

  return (
    <div className="inline-flex w-auto max-w-2xl">
      <button
        className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-l mr-56 w-32 disabled:cursor-not-allowed"
        disabled={page === 0}
        onClick={onPrev}
      >
        Previous Page
      </button>
      <button
        className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-l ml-56 w-32"
        onClick={onNext}
      >
        Next Page
      </button>
    </div>
  );
};
