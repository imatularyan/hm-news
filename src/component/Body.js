import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import useArticle from "../../utils/useArticle";

const Body = () => {
  const article = useArticle();
  console.log(article?.articles);

  return (
    <>
      <div className="flex flex-wrap px-5 py-10 w-3/4 m-auto border-r-2 border-l-2 bg-white mb-1 border-b-2">
        {article?.articles?.map(
          (info) =>
            info?.description && <BlogCard key={info?.title} info={info} />
        )}
      </div>
    </>
  );
};

export default Body;
