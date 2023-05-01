import BlogCard from "./BlogCard";
import useHeadlines from "../utils/useHeadlines";
// import useEverything from "../../utils/useEverything";
import { useContext } from "react";
import { CategoryContext, SearchContext } from "../App";
import Shimmer from "./Shimmer";

const BlogContainer = () => {
  const category = useContext(CategoryContext);
  const article = useHeadlines(category);
  // const searchText = useContext(SearchContext);
  // const searchArticle = useEverything(searchText);

  return article?.length <= 0 ? (
    <Shimmer />
  ) : (
    <>
      <h1 className=" text-4xl font-bold text-gray-700 pt-2 py-2">
        {category === "General" ? "Top Headlines" : category}
        <hr className="mt-3 w-80" />
      </h1>
      <div className="flex flex-wrap w-full">
        {article?.articles?.map(
          (info) =>
            info?.description && <BlogCard key={info?.title} info={info} />
        )}
      </div>
    </>
  );
};

export default BlogContainer;
