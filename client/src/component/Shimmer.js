const Shimmer = () => {
  return (
    <div className="mx-auto flex flex-wrap w-full">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="h-72 w-80 mx-2 my-4 bg-gray-300 rounded-md "
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
