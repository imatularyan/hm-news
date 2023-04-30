import { useState, useEffect } from "react";
import { WORLD_NEWS_API } from "./constant";

const useArticle = (searchText) => {
  const [queryArticle, setQueryArticle] = useState([]);

  useEffect(() => {
    getQueryArticle();
  }, []);

  const getQueryArticle = async () => {
    const res = await fetch(`${WORLD_NEWS_API}${searchText}`);
    if (res.status >= 200 && res.status <= 300) {
      const json = await res.json();
      setQueryArticle(json);
    } else {
      setQueryArticle(res.status);
    }
  };

  return queryArticle;
};

export default useArticle;
