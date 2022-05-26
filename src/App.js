import React, { useState, useEffect } from "react";
import { Searchform } from "./components/searchform";
import { SearchedArticles } from "./components/searchArticle";
import { Link } from "react-router-dom";
const App = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=miNIUI1JocvimuhhAiBOpnLxRRmpqba1`
        );
        const articles = await res.json();
        console.log(articles.response.docs);
        setArticles(articles.response.docs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, [term]);

  return (
    <div>
      <Searchform searchText={(text) => setTerm(text)} />
      <SearchedArticles articles={articles} />
    </div>
  );
};

export default App;
