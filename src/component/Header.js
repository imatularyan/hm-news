import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white sticky top-0">
      <div className="h-16 p-2 flex justify-around items-center relative text-gray-900 w-3/4 m-auto">
        <div className="flex gap-2 items-center">
          <img width="30px" src={logo} alt="logo" />
          <span className=" text-2xl font-semibold">
            HM
            <small className=" text-xs font-light">News</small>
          </span>
        </div>
        <nav>
          <ul className="flex gap-5 overflow-x-auto">
            <li>Category</li>
            <li>Latest</li>
            <li>
              Random <sup className=" text-xs font-light">IN</sup>
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
