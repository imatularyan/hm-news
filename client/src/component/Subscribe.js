const Subscribe = () => {
  return (
    <div className="static bottom-0 h-80 bg-indigo-900 w-full">
      <div className="flex items-center h-full justify-evenly text-gray-200">
        <h1 className=" text-4xl font-medium break-words w-fit ">
          Subscribe to our newsletter
        </h1>
        <p>
          "Stay informed and never miss a beat. Sign up for our newsletter today
          and be the first to receive breaking news, exclusive stories, and
          in-depth coverage on the topics that matter to you. Join our community
          of informed readers and stay ahead of the curve."
        </p>
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
