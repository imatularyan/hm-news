import { useState, useEffect } from "react";
import { ARTICLE_API } from "./constant";

const useArticle = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleData();
  }, []);

  const getArticleData = async () => {
    const res = await fetch(ARTICLE_API);
    if (res.status >= 200 && res.status <= 300) {
      const json = await res.json();
      setArticle(json);
    } else {
      setArticle(res.status);
    }
  };

  return article;
};

export default useArticle;
