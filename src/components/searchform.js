import React, { useState } from "react";
export const SearchForm = ({ setTerm }) => {
  const [text, setText] = useState();
  //sets the term to text whenever the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm(text);
  };

  return (
    <div>
      <form className="w-auto max-w-2xl" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-primaryPurple ">
          <input
            className="appearance-none bg-transparent border-none w-full text-secondaryWhite mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Search for a NY times article."
          ></input>
          <button
            className="bg-primaryPurple hover:bg-primaryDarkPurple text-white font-bold py-2 px-4 rounded"
            disabled={!text}
          >
            Search
          </button>{" "}
        </div>
      </form>
    </div>
  );
};
