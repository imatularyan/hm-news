import { useState, useEffect } from "react";
import { HEADLINES_API } from "./constant";

const useArticle = (category) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleData();
  }, [category]);

  const getArticleData = async () => {
    const res = await fetch(`${HEADLINES_API}${category}`);
    if (res.status >= 200 && res.status <= 299) {
      const json = await res.json();
      setArticle(json);
    } else {
      setArticle(res.status);
    }
  };

  return article;
};

export default useArticle;
