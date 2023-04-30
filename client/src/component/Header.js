import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import search from "../assets/img/search.svg";
import Modal from "./Modal";

const Header = ({ setCategory, setSearchText }) => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <header className="h-14 px-12 flex justify-between items-center text-gray-700 w-full m-auto sticky top-0 bg-white">
        <Link to="/">
          <div className="flex items-center">
            <img width="30px" src={logo} alt="logo" />
            <span className=" text-2xl font-bold">
              HM
              <small className=" text-xs font-light">News</small>
            </span>
          </div>
        </Link>
        <nav className="flex gap-5 items-center">
          <div className=" px-1 w-fit flex bg-gray-100 shadow-inner">
            <input
              className="p-1 outline-none bg-gray-100 w-full"
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchText(e.currentTarget.value)}
            />
            <img className="w-6 bg-gray-100" src={search} alt="search" />
          </div>
          <ul className="flex gap-5 text-sm">
            <Link to="/">
              <li>Top Headlines</li>
            </Link>
            <select
              className=" w-min outline-none bg-transparent"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="General">All</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Business">Business</option>
              <option value="Health">Health</option>
              <option value="Science">Science</option>
              <option value="Sports">Sports</option>
              <option value="Technology">Technology</option>
            </select>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
          <button
            type="button"
            className="border border-indigo-500 p-1 px-2 rounded-md hover:bg-indigo-500 hover:text-white transition delay-75 duration-100 ease-in-out relative outline-none"
            onClick={() => setLogin(!login)}
          >
            LogIn
          </button>
        </nav>
        {login && <Modal setLogin={setLogin} />}
      </header>
    </>
  );
};

export default Header;
