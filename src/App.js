import React, { useState } from "react";
import { Searchform } from "./components/searchform";
import { SearchArticles } from "./components/searchArticle";
import { ArticleFetcher } from "./components/articleFetcher";
import { PageButtons } from "./components/pageButtons";
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation().state;
  const newLocation = location === null ? 0 : location;
  console.log(newLocation);
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(newLocation);

  ArticleFetcher(setArticles, term, currentPage);
  return (
    <div>
      <div>
        <Searchform searchText={(text) => setTerm(text)} />
        <SearchArticles articles={articles} currentPage={currentPage} />
      </div>
      <div>
        <PageButtons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default App;
