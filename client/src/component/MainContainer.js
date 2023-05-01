import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <>
      <div className="font-poppins px-12">
        <Outlet />
      </div>
    </>
  );
};

export default MainContainer;
