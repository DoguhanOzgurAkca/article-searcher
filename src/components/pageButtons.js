import React from "react";

export const PageButtons = ({ page, setPage, setSearchParams }) => {
  const onNext = () => {
    setPage(page + 1);
    console.log(page);
  };
  const onPrev = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <button disabled={page === 0} onClick={onPrev}>
        prev page
      </button>
      <button onClick={onNext}>next page</button>
    </div>
  );
};
