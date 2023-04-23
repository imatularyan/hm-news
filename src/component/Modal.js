import { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

const Modal = ({ setLogin }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  }, []);

  return ReactDOM.createPortal(
    <>
      <div
        onClick={() => setLogin(false)}
        className=" fixed top-0 bottom-0 left-0 right-0 bg-gray-300/50 backdrop-blur"
      ></div>

      <div className="fixed top-1/2 left-1/2 shadow-sm transform -translate-x-1/2 -translate-y-1/2 w-96 h-fit bg-white rounded-lg p-2 text-gray-700">
        <span
          className=" float-right cursor-pointer"
          onClick={() => setLogin(false)}
        >
          ╳
        </span>
        <h1 className=" text-2xl font-bold tracking-wide text-center">
          Log In
        </h1>
        <div className=" text-indigo-500 m-1 text-center text-sm">
          <span className="cursor-pointer">Sign Up</span>{" "}
          <span className="text-black">or</span>{" "}
          <Link to="/admin">
            {" "}
            <span>Admin Login</span>
          </Link>
        </div>
        <div className=" rounded-md text-sm font-normal">
          <Formik
            initialValues={{
              userName: "",
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className="flex flex-col w-full p-5">
              <label htmlFor="username">Username</label>
              <Field
                className="p-3 outline-none border border-gray-200 rounded-md mt-1 mb-3"
                id="username"
                name="userName"
                type="username"
                placeholder="abcname"
              />
              <div className=" text-center">Or</div>
              <label htmlFor="email">Email</label>
              <Field
                className="p-3 outline-none border border-gray-200 rounded-md mt-1 mb-3"
                id="email"
                name="email"
                type="email"
                placeholder="abc@mail.com"
              />
              <label htmlFor="password">Password</label>
              <Field
                className="p-3 outline-none border border-gray-200 rounded-md mt-1 mb-3"
                id="password"
                name="password"
                placeholder="Abc@1234"
                type="password"
              />
              <p className="text-indigo-500 cursor-pointer text-sm">
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
    </>,
    document.querySelector(".modal")
  );
};

export default Modal;
