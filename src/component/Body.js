import Cards from "./Cards";

const Body = () => {
  return (
    <div className="">
      <div className="flex flex-wrap px-5 py-10 w-3/4 m-auto border-r-2 border-l-2 bg-white mb-1 border-b-2">
        {Array(20)
          .fill("")
          .map((index) => (
            <Cards key={index} />
          ))}
      </div>
    </div>
  );
};

export default Body;
