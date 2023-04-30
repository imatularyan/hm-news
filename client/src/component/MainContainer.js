import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <>
      <div className=" px-12">
        <Outlet />
      </div>
    </>
  );
};

export default MainContainer;
