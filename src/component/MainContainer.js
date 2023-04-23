import BlogCard from "./BlogCard";
// import useHeadlines from "../../utils/useHeadlines";
// import useEverything from "../../utils/useEverything";
// import { useContext } from "react";
// import { CategoryContext, SearchContext } from "../../App";
import Shimmer from "./Shimmer";
import { info } from "../../utils/constant";

const MainContainer = () => {
  // const category = useContext(CategoryContext);
  // const article = useHeadlines(category);
  // const searchText = useContext(SearchContext);
  // const searchArticle = useEverything(searchText);
  console.log(info);

  return info.length <= 0 ? (
    <Shimmer />
  ) : (
    <>
      <h1 className=" text-4xl font-bold text-gray-700 px-16 pt-2 py-2">
        {"Top Headlines"}
        <hr className="mt-3 w-80" />
      </h1>
      <div className="flex flex-wrap w-full px-12">
        {info?.map(
          (info, index) =>
            info?.description && <BlogCard key={index} info={info} />
        )}
      </div>
    </>
  );
};

//   return article.length <= 0 ? (
//     <Shimmer />
//   ) : (
// <>
// <h1 className="">Top Headlines</h1>
//     <div className="flex flex-wrap px-1 py-5 mx-auto w-11/12">
//       {article?.articles?.map(
//         (info) =>
//           info?.description && <BlogCard key={info?.title} info={info} />
//       )}
//     </div>
// </>
//   );
// };

export default MainContainer;
