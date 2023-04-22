const Shimmer = () => {
  return (
    <div className="flex flex-wrap px-1 py-5 mx-auto w-11/12 min-h-screen">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="h-56 w-[246px] mx-2 my-2 bg-gray-400 rounded-md"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
