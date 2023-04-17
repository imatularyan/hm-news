import { Link } from "react-router-dom";
import setting from "../assets/img/setting.svg";
import user from "../assets/img/user.svg";

const Dashboard = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex h-screen">
        <div className="h-screen basis-2/12 p-5 border-r rounded-xl shadow-sm">
          <div className=" text-lg font-bold tracking-wide text-center border-b p-1 text-indigo-500">
            Hello Admin!
          </div>
          <div className="mt-5">
            <ul className=" text-base font-sans">
              <li className=" my-10 px-5 py-1 hover:ring-4 ring-inherit ring-indigo-300 text-center hover:outline outline-offset-2 outline-indigo-200 rounded-xl cursor-pointer tracking-wide transition duration-75 ease-in-out">
                Dashboard
              </li>
              <li className=" my-10 px-5 py-1 hover:ring-4 ring-inherit ring-indigo-300 text-center hover:outline outline-offset-2 outline-indigo-200 rounded-xl cursor-pointer tracking-wide transition duration-75 ease-in-out">
                Post
              </li>
            </ul>
            <div className="w-8 absolute bottom-10 flex gap-2 items-center tracking-wide left-10">
              <img className="w-full h-full cursor-pointer" src={setting} />
              <span className=" cursor-pointer">Setting</span>
            </div>
          </div>
        </div>
        <div className=" h-screen basis-full bg-indigo-50 px-8">
          <div className="w-full flex justify-end items-center py-2">
            <div className="border border-gray-300 absolute top-0 right-36 h-12"></div>
            <div className="border border-gray-300 absolute top-0 right-72 h-12"></div>
            <div className="flex items-center gap-1 font-light tracking-wide text-sm">
              <p className="cursor-pointer">Username</p>
              <Link to="/">
                <img className="w-8 cursor-pointer" src={user} />
              </Link>
            </div>
          </div>
          <div className=" w-full mt-5">
            <div className="w-full bg-white h-40 shadow-sm rounded-xl my-5"></div>
            <div className="w-full h-[500px]  bg-white shadow-sm rounded-xl my-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
