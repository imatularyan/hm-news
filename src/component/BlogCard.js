import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { checkURL } from "../../utils/helper";

const Cards = ({ info }) => {
  const [checkImgURL, setCheckImgURL] = useState("");
  const { author, url, title, content, publishedAt, urlToImage, description } =
    info;

  useEffect(() => {
    checkURL(checkImgURL);
  }, [checkImgURL]);

  return (
    <div className="h-fit w-80 hover:outline hover:outline-gray-300 p-2 my-4 mx-[5px] overflow-hidden text-gray-900">
      <div className="text-xs font-light break-words flex items-center justify-between py-1">
        <span>{publishedAt.slice(0, 10)}</span>
        <div className="flex items-center ">
          {author && (
            <span className="bg-gray-200 rounded-full font-light px-2 py-1 break-words">
              {author}
            </span>
          )}
        </div>
      </div>
      <Link to={url}>
        <div className="py-2">
          <img
            onLoad={() => setCheckImgURL(urlToImage)}
            className="w-full h-full border border-gray-400 rounded-sm"
            src={urlToImage}
            alt="blogimg"
          />
        </div>
      </Link>{" "}
      <div className=" p-2 h-fit text-sm border-b-8 border-b-transparent overflow-hidden break-words">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cards;
