import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white sticky top-0">
      <div className="h-16 p-2 flex justify-around items-center relative text-gray-900 w-3/4 m-auto">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <img width="30px" src={logo} alt="logo" />
            <span className=" text-2xl font-semibold">
              HM
              <small className=" text-xs font-light">News</small>
            </span>
          </div>
        </Link>
        <nav>
          <ul className="flex gap-5 overflow-x-auto">
            <select className=" w-28 outline-none focus:border">
              <option value="Category">Category</option>
              <option value="Todays News">Todays News</option>
              <option value="Science & Technoloy">Science & Technoloy</option>
              <option value="Politics">Politics</option>
              <option value="Business">Business</option>
              <option value="Marketing">Marketing</option>
            </select>
            <Link to="/latest">
              <li>Latest</li>
            </Link>
            <Link to="/random">
              <li>
                Random <sup className=" text-xs font-light">IN</sup>
              </li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
