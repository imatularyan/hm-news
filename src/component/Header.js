import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import facebook from "../assets/img/facebook.svg";
import youtube from "../assets/img/youtube.svg";
import instagram from "../assets/img/instagram.svg";

const Header = () => {
  const [showUser, setShowUser] = useState(false);
  const userMenu = useRef();
  const imgUserMenu = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (e.target !== userMenu.current && e.target !== imgUserMenu.current) {
        setShowUser(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <header className="w-full shadow-sm sticky top-0 bg-white">
      <div className="h-16 p-6 flex justify-between items-center relative text-gray-900 w-full m-auto">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <img width="30px" src={logo} alt="logo" />
            <span className=" text-2xl font-semibold">
              HM
              <small className=" text-xs font-light">News</small>
            </span>
          </div>
        </Link>
        <nav className="flex gap-5 items-center">
          <ul className="flex gap-5 overflow-x-auto text-sm">
            <select className=" w-24 outline-none focus:border bg-transparent border-none">
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
          <button
            ref={imgUserMenu}
            type="button"
            className="border border-indigo-500 p-1 px-2 rounded-md hover:bg-indigo-500 hover:text-white transition delay-75 duration-100 ease-in-out relative"
            onClick={() => !showUser && setShowUser(true)}
          >
            LogIn
          </button>
          {console.log(showUser)}
        </nav>
      </div>
      {showUser && (
        <div className="w-full h-screen bg-gray-200/90 absolute backdrop-blur">
          <div
            ref={userMenu}
            className="absolute w-[30%] h-fit bg-indigo-50 rounded-xl px-12 py-6  left-[35%] top-16 z-50"
            onClick={() => setShowUser(true)}
          >
            <h1 className=" text-2xl font-bold tracking-wide text-center">
              LogIn
            </h1>
            <div className=" text-indigo-500 m-2 text-center text-sm">
              <span className="cursor-pointer">Sign Up</span>{" "}
              <span className="text-black">or</span>{" "}
              <Link to="/admin">
                {" "}
                <span>Admin Login</span>
              </Link>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <span className=" w-6 bg-gray-700 rounded-full hover:bg-indigo-500 p-1 transition delay-75 cursor-pointer">
                <img className="w-full" src={facebook} alt="facebook" />
              </span>
              <span className="w-6 bg-gray-700 rounded-full hover:bg-indigo-500 p-1 transition delay-75 cursor-pointer">
                <img className="w-full" src={youtube} alt="youtube" />
              </span>
              <span className="w-6 bg-gray-700 rounded-full hover:bg-indigo-500 p-1 transition delay-75 cursor-pointer">
                <img className="w-full" src={instagram} alt="instagram" />
              </span>
            </div>
            <div className=" rounded-md text-sm font-normal">
              <Formik
                initialValues={{
                  userName: "",
                  password: "",
                }}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                <Form className="flex flex-col w-full p-5">
                  <label htmlFor="email">Email</label>
                  <Field
                    className="p-3 outline-none border border-gray-200 rounded-md mt-1 mb-3"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="abcname or abc@mail.com"
                  />
                  <label htmlFor="password">Password</label>
                  <Field
                    className="p-3 outline-none border border-gray-200 rounded-md mt-1 mb-3"
                    id="password"
                    name="password"
                    placeholder="Abcd@123"
                    type="password"
                  />
                  <p className="text-indigo-500 cursor-pointer">
                    Forgot Password?
                  </p>
                  <button
                    className=" py-3 px-4 bg-indigo-500 rounded-md text-white w-40 mt-4 ml-auto"
                    type="submit"
                  >
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
