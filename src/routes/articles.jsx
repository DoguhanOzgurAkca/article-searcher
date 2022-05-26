import { useLocation } from "react-router-dom";
import { SearchedArticle } from "../components/SearchedArticle";

export default function Articles() {
  const location = useLocation();
  const article = location.state[0];
  const currentPage = location.state[1];

  return (
    <div>
      <SearchedArticle article={article} currentPage={currentPage} />
    </div>
  );
}
