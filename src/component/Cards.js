const Cards = ({ info }) => {
  const { author, title, content, publishedAt, urlToImage } = info;
  return (
    <div className="">
      <div className="text-xs rounded-md flex items-center justify-between font-medium whitespace-nowrap">
        <span>{publishedAt}</span>
        <div>
          <span className="bg-gray-200 rounded-full px-2 py-1 mr-5">
            {author}
          </span>
          <span className="bg-gray-200 rounded-full px-2 py-1">Marketing</span>
        </div>
      </div>
      <div className="w-full h-fit px-1 pt-3 text-base border-b-8 border-transparent overflow-hidden break-all">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Cards;
