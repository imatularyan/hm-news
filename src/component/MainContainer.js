import BlogCard from "./BlogCard";
import useArticle from "../../utils/useArticle";

const MainContainer = () => {
  const article = useArticle();
  return (
    <div className="flex flex-wrap py-5 w-11/12 scroll-smooth m-auto gap-3">
      {article?.articles?.map(
        (info) =>
          info?.description && <BlogCard key={info?.title} info={info} />
      )}
    </div>
  );
};

export default MainContainer;
