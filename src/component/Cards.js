const Cards = ({ info }) => {
  const { author, title, content, publishedAt, urlToImage } = info;
  return (
    <div className="">
      <div className="text-xs font-medium break-words border-b border-b-gray-200 text-gray-700 flex items-center justify-between py-2">
        <span>{publishedAt.slice(0, 10)}</span>
        <div className="flex items-center ">
          <span className="bg-gray-100 rounded-full px-2 py-1 mr-5">
            {author}
          </span>
          <span className="bg-gray-100 rounded-full px-2 py-1">Marketing</span>
        </div>
      </div>
      <div className=" p-2 h-fit text-sm font-medium border-b-8 border-b-transparent overflow-hidden break-all">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Cards;
