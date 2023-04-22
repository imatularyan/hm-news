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
    <div className="flex flex-wrap w-80 h-96 mx-1 my-4 shadow-md hover:shadow-lg rounded-md text-gray-800 transition delay-75 duration-75 ease-in-out">
      <Link to={url}>
        <img
          onLoad={() => setCheckImgURL(urlToImage)}
          className="object-contain rounded-t-md"
          src={urlToImage}
        />
      </Link>
      <div className=" container px-2 py-1">
        <div className=" h-44 text-elipsis overflow-hidden break-words ">
          {description}
        </div>
        <div className=" font-light text-xs flex justify-between">
          {author && <span>{author}</span>}
          <span>{publishedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
