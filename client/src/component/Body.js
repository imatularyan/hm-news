import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="w-full bg-indigo-50/50 scroll-smooth">
      <Outlet />
    </div>
  );
};

export default Body;
