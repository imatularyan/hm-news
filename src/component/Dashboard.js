import { Link, Outlet } from "react-router-dom";
import setting from "../assets/img/setting.svg";
import user from "../assets/img/user.svg";
import home from "../assets/img/home.svg";
import file from "../assets/img/file.svg";

const Dashboard = () => {
  const admin = () => "Atul Aryan";
  return (
    <div className=" flex text-gray-700">
      <div className=" w-56 rounded-xl py-5 h-screen relative">
        <Link to="/admin">
          <div className=" text-lg font-bold tracking-wide text-center border-b py-1 mx-5 text-indigo-600 hover:text-indigo-500 ">
            Hello {admin()}!
          </div>
        </Link>
        <ul className=" text-base font-sans text-center tracking-wide leading-10 py-3 w-full pl-5">
          <Link to="/admin">
            <li className="flex gap-3 pl-3 cursor-pointer hover:bg-indigo-50 hover:text-indigo-500 rounded-l-3xl transition duration-75 ease-in-out">
              <img className="w-6" src={home} />
              Dashboard
            </li>
          </Link>
          <Link to="post">
            <li className="flex gap-3 pl-3 cursor-pointer hover:bg-indigo-50 hover:text-indigo-500 rounded-l-3xl transition duration-75 ease-in-out">
              <img className="w-6" src={file} />
              Post
            </li>
          </Link>
          <li className="w-min flex gap-3 items-center tracking-wide absolute bottom-8 left-8">
            <img className="w-8 h-full cursor-pointer" src={setting} />
            <span className=" cursor-pointer hover:text-indigo-500">
              Setting
            </span>
          </li>
        </ul>
      </div>
      <div className="container p-2 bg-indigo-50">
        <div className="flex items-center justify-end tracking-wide text-sm">
          <p className="cursor-pointer">{admin()}</p>
          <Link
            to="/"
            className="border rounded-full m-1 p-1 bg-white hover:bg-gray-50 focus:border-indigo-500"
          >
            <img className="w-8 cursor-pointer" src={user} />
          </Link>
        </div>
        <div className=" w-full my-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
