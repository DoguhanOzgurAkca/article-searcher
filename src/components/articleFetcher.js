import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { SearchArticles } from "./searchArticle";
import { Searchform } from "./searchform";
import { PageButtons } from "./pageButtons";
import { useParams, useSearchParams } from "react-router-dom";
export const ArticleFetcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("term");
  const searchPage = searchParams.get("page");

  const [term, setTerm] = useState(searchTerm === null ? "" : searchTerm);
  const [page, setPage] = useState(searchPage === null ? 0 : searchPage);

  useEffect(() => {
    setSearchParams({ term, page });
  }, [term, page, setSearchParams]);

  const fetchArticles = async ({ queryKey }) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryKey[1]}&page=${queryKey[2]}&api-key=miNIUI1JocvimuhhAiBOpnLxRRmpqba1`
    );
    const articles = await response.json();
    return articles.response.docs;
  };

  const { data, status } = useQuery(["characters", term, page], fetchArticles);

  return (
    <div>
      <Searchform
        searchText={(text) => setTerm(text)}
        setSearchParams={setSearchParams}
      />
      <SearchArticles data={data} status={status} />
      <div>
        <PageButtons
          page={page}
          setPage={setPage}
          setSearchParams={setSearchParams}
        />
      </div>
    </div>
  );
};
