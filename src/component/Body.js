import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-wrap px-5 py-10 w-3/4 mx-auto scroll-smooth">
      <Outlet />
    </div>
  );
};

export default Body;
