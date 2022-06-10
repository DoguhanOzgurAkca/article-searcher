import React from "react";

export const LatestArticleButton = ({ setTerm, setPage }) => {
  const HandleClick = () => {
    setTerm("");
    setPage(0);
  };
  return (
    <div>
      <button
        className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-r ml-64 w-49"
        onClick={HandleClick}
      >
        Click for Latest News!
      </button>
    </div>
  );
};
