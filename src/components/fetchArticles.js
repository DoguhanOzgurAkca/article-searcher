export const fetchArticles = async ({ queryKey }) => {
  const response = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryKey[1]}&page=${queryKey[2]}&api-key=miNIUI1JocvimuhhAiBOpnLxRRmpqba1`
  );
  const articles = await response.json();
  return articles.response.docs;
};
