import { useState, useEffect } from "react";
import { ARTICLE_API } from "./constant";

const useArticle = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleData();
  }, []);

  const getArticleData = async () => {
    const response = await fetch(ARTICLE_API);
    if (response.status >= 200 && response.status <= 300) {
      const json = await response.json();
      setArticle(json);
      //   console.log("Article", json);
    } else {
      setArticle(json);
      //   console.log("Article", response.status);
    }
  };

  return article;
};

export default useArticle;
