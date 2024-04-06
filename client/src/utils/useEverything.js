import { useState, useEffect } from "react";
import { WORLD_NEWS_API } from "./constant";

const useArticle = (searchText) => {
  const [queryArticle, setQueryArticle] = useState([]);

  useEffect(() => {
    getQueryArticle();
  }, []);

  const getQueryArticle = async () => {
    try {
      const res = await fetch(`${WORLD_NEWS_API}${searchText}`);
      if (res.status >= 200 && res.status <= 300) {
        const json = await res.json();
        setQueryArticle(json);
      } else {
        setQueryArticle(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return queryArticle;
};

export default useArticle;
