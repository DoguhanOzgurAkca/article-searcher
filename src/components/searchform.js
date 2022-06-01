import React, { useState } from "react";
export const Searchform = ({ searchText, setPage }) => {
  const [text, setText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
    setPage(0);
  };

  return (
    <div>
      <form className="w-auto max-w-2xl" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Search for a NY times article."
          ></input>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={!text}
          >
            Search
          </button>{" "}
        </div>
      </form>
    </div>
  );
};
