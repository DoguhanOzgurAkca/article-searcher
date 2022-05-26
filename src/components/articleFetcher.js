import { useEffect } from "react";

export const ArticleFetcher = (setArticles, term, currentPage) => {
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&page=${currentPage}&api-key=miNIUI1JocvimuhhAiBOpnLxRRmpqba1`
        );
        const articles = await res.json();
        console.log(articles.response.docs);
        setArticles(articles.response.docs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, [term, currentPage]);
};
