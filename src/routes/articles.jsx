import { useLocation } from "react-router-dom";
import { SearchedArticle } from "../components/SearchedArticle";

export default function Articles() {
  const location = useLocation();
  const article = location.state;
  return (
    <div>
      <SearchedArticle article={article} />
    </div>
  );
}
