const Subscribe = () => {
  return (
    <div className="static bottom-0 h-80 bg-indigo-900 w-full">
      <div className="flex items-center h-full justify-evenly text-gray-200">
        <h1 className=" text-4xl font-medium break-words w-fit ">
          Subscribe to our newsletter
        </h1>
        <div className="border w-fit h-fit flex flex-row flex-nowrap">
          <input
            type="text"
            className="py-3 px-4 text-black w-64 outline-none"
            placeholder="Type your email..."
          />
          <button
            type="button"
            className="py-3 px-4 font-semibold bg-rose-900 hover:bg-pink-800"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
