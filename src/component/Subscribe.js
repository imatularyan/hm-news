const Subscribe = () => {
  return (
    <div className="static bottom-0 h-64 bg-indigo-900 w-full mt-14">
      <div className="flex items-center h-full justify-evenly text-gray-200">
        <h1 className=" text-4xl font-medium break-words w-fit ">
          Subscribe to our newsletter
        </h1>
        <div className="border w-fit flex flex-row flex-nowrap">
          <input
            type="text"
            className="py-3 px-4 outline-none text-black w-64"
            placeholder="Type your email..."
          />
          <button type="button" className="py-3 px-4 font-semibold bg-rose-900">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
