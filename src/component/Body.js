import { Link } from "react-router-dom";
import Cards from "./Cards";
import useArticle from "../../utils/useArticle";

const Body = () => {
  const article = useArticle();
  // console.log(article?.articles);

  return (
    <div className="">
      <div className="flex flex-wrap px-5 py-10 w-3/4 m-auto border-r-2 border-l-2 bg-white mb-1 border-b-2">
        {article?.articles?.map((info) => (
          <Link
            to="/"
            key={info.title}
            className="h-fit w-96 shadow-md p-2 rounded-lg mx-auto my-4 overflow-hidden text-gray-900 "
          >
            <Cards info={info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
