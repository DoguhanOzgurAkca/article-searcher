import { Link, useLocation } from "react-router-dom";
import { SearchedArticle } from "../components/SearchedArticle";

export default function Articles() {
  const location = useLocation();
  const article = location.state;
  console.log(article);
  return (
    <div>
      <SearchedArticle article={article} />
    </div>
  );
}
