import React from "react";

export const PageButtons = ({ currentPage, setCurrentPage }) => {
  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const onPrev = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <button onClick={onPrev}>prev page</button>
      <button onClick={onNext}>next page</button>
    </div>
  );
};
