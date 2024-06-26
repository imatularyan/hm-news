import { useState, useEffect } from "react";
import { HEADLINES_API } from "./constant";

const useArticle = (category) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleData();
  }, [category]);

  const getArticleData = async () => {
    try {
      const res = await fetch(`${HEADLINES_API}${category}`);
      if (res.status >= 200 && res.status <= 299) {
        const json = await res.json();
        setArticle(json);
      } else {
        setArticle(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return article;
};

export default useArticle;
