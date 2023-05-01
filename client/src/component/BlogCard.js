import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { checkURL } from "../utils/helper";

const Cards = ({ info }) => {
  const [checkImgURL, setCheckImgURL] = useState("");
  const { author, url, title, content, publishedAt, urlToImage, description } =
    info;

  useEffect(() => {
    checkURL(checkImgURL);
  }, [checkImgURL]);

  return (
    <div className=" text-sm w-80 mx-2 my-4 shadow-md hover:shadow-xl rounded-md transition delay-75 duration-75 ease-in-out">
      <Link to={url}>
        <img
          onLoad={() => setCheckImgURL(urlToImage)}
          className=" h-44 w-full object-cover rounded-t-md"
          src={urlToImage}
        />
      </Link>
      <div className=" px-2 py-2">
        <p className=" overflow-hidden text-ellipsis h-[124px]">
          {description}
        </p>
        <div className=" font-normal text-xs text-gray-400 pb-3">
          {author && <span className=" clear-left float-left">{author}</span>}
          <span className=" clear-right float-right">
            {publishedAt.slice(2, 10)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
