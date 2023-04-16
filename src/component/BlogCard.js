import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Cards = ({ info }) => {
  const [checkImgURL, setCheckImgURL] = useState("");
  const { author, url, title, content, publishedAt, urlToImage, description } =
    info;

  useEffect(() => {
    checkURL(checkImgURL);
  }, [checkImgURL]);

  function checkURL(url) {
    const res = url.match(/\.(jpeg|jpg|gif|png)$/) != null;
    console.log(res);
    return res;
  }

  return (
    <div className="h-fit w-96 shadow-md p-2 rounded-lg mx-auto my-4 overflow-hidden text-gray-900">
      <div className="text-xs font-medium break-words text-gray-700 flex items-center justify-between py-2">
        <span>{publishedAt.slice(0, 10)}</span>
        <div className="flex items-center ">
          {author && (
            <span className="bg-gray-100 rounded-full px-2 py-1 mr-5">
              {author}
            </span>
          )}
        </div>
      </div>
      {checkImgURL && (
        <Link to={url}>
          <div className="py-2">
            <img
              onLoad={() => setCheckImgURL(urlToImage)}
              className="w-full h-full border border-gray-500 rounded-sm"
              src={urlToImage}
              alt="blogimg"
            />
          </div>
        </Link>
      )}
      <div className=" p-2 h-fit text-sm border-b-8 border-b-transparent overflow-hidden break-words">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cards;
