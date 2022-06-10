import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { SearchArticles } from "./searchArticle";
import { SearchForm } from "./searchForm";
import { PageButtons } from "./pageButtons";
import { useSearchParams } from "react-router-dom";
import { fetchArticles } from "./fetchArticles";

export const MainFetcher = () => {
  // takes and places search parameters
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("term");
  const searchPage = searchParams.get("page");

  // sets the search term and page numbers. If there are useable search parameters, uses them, otherwise sets them to their default values.
  const [term, setTerm] = useState(searchTerm === null ? "" : searchTerm);
  const [page, setPage] = useState(
    searchPage === null ? 0 : parseInt(searchPage)
  );

  // sets search parameters to search term and page number whenever they change.
  useEffect(() => {
    setSearchParams({ term, page });
  }, [term, page, setSearchParams]);

  // sets page number to 0 whenever term changes(whenever a new search is made)
  useEffect(() => {
    setPage(0);
  }, [term]);

  // react query.
  const { data, status } = useQuery(["characters", term, page], fetchArticles);

  return (
    <div className=" container w-auto max-w-2xl mt-20 border-8 border-double border-secondaryPink rounded-md p-5">
      <SearchForm setTerm={setTerm} />
      <SearchArticles
        data={data}
        status={status}
        setTerm={setTerm}
        setPage={setPage}
      />
      <PageButtons page={page} setPage={setPage} />
    </div>
  );
};
