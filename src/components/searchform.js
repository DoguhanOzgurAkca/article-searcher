import React, { useState } from "react";

export const Searchform = ({ searchText }) => {
  const [text, setText] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "50em", margin: "5px", padding: "5px" }}
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Search for a NY times article."
        ></input>
        <button
          style={{
            padding: "6px",
            margin: "3px",
            border: "1px solid white",
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
};
