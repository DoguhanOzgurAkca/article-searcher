import { useLocation } from "react-router-dom";
import { ClickedArticle } from "../components/ClickedArticle";

export default function Articles() {
  //puts the data of the article that user clicked to article
  const location = useLocation();
  const article = location.state;
  return (
    <div>
      <ClickedArticle article={article} />
    </div>
  );
}
