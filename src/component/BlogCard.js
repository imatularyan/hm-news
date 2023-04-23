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
    <div className=" text-sm w-80 mx-2 my-4 shadow-md hover:shadow-xl rounded-md text-gray-800 transition delay-75 duration-75 ease-in-out">
      <Link to={url}>
        <img
          onLoad={() => setCheckImgURL(urlToImage)}
          className="object-contain rounded-t-md"
          src={urlToImage}
        />
      </Link>
      <div className=" px-2 py-2">
        <p className=" overflow-hidden text-ellipsis">{description}</p>
        <div className=" font-light text-xs mt-1">
          {author && <span>{author}</span>}
          <span className="float-right">{publishedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
