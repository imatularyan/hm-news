import BlogCard from "./BlogCard";
import useArticle from "../../utils/useArticle";

const MainContainer = () => {
  const article = useArticle();
  console.log(article?.articles);
  return (
    <>
      {article?.articles?.map(
        (info) =>
          info?.description && <BlogCard key={info?.title} info={info} />
      )}
    </>
  );
};

export default MainContainer;
