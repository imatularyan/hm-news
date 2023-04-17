import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="w-full bg-indigo-50/50">
      <div className="flex flex-wrap py-10 w-11/12 scroll-smooth m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
