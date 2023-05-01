import { useState } from "react";
import { Formik, Form, Field, useFormik, validateYupSchema } from "formik";
import signup from "../assets/img/signup.png";
import { signUpSchema } from "../schemas";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("data", values);
        setUser(values);
        action.resetForm();
      },
    });

  const PostData = async (e) => {
    e.preventDefault();
    const { fname, lname, email, phone, password, confirmPassword } = user;
    console.log(user);
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        phone,
        password,
        confirmPassword,
      }),
    });
    const data = await res;
    console.log(data);
    if (res.status === 422 || !data) {
      window.alert("Registration failed!");
    } else {
      window.alert("Registration successful");

      // navigate("/");
    }
  };

  return (
    <>
      <div className=" h-screen p-12 font-poppins">
        <div className="flex justify-between bg-white rounded-2xl p-4 h-[700px] shadow-sm border container">
          <div className=" basis-2/5 text-white bg-indigo-700 rounded-xl flex p-10 border">
            <div className=" tracking-wide">
              <h1 className=" text-lg font-semibold mb-4">HMnews </h1>
              <h3 className=" text-5xl font-semibold my-4">
                Start your journey with us.
              </h3>
              <p className=" font-light text-gray-200 break-words my-5">
                "Join our community of informed readers and be the first to know
                about the latest news and updates from around the world.
                Register now and stay ahead of the curve!"
              </p>
              <img
                className=" w-80 object-contain mx-auto mt-10"
                src={signup}
                alt="signup"
              />
            </div>
          </div>
          <div className=" basis-3/5 basis text-sm font-normal rounded-xl px-16">
            <div className="my-8">
              <h1 className=" text-2xl font-bold tracking-wide">Sign Up</h1>
              <div className=" text-indigo-500 my-1 tracking-wide">
                Have an account?
              </div>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validateYupSchema}
              onSubmit={onsubmit}
            >
              <Form
                className="flex flex-wrap container"
                onSubmit={handleSubmit}
                method="POST"
              >
                <div className="flex flex-col w-72 mb-4">
                  <label htmlFor="fname" className="text-gray-500 font-normal">
                    First Name
                  </label>
                  <Field
                    className="p-4 outline-none border rounded-md mt-1 "
                    name="fname"
                    id="fname"
                    placeholder="First Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fname}
                  />
                  {errors.fname && touched.fname ? (
                    <p className=" text-sm font-light text-red-700">
                      {errors.fname}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col ml-auto w-72 mb-4">
                  <label htmlFor="lname" className="text-gray-500 font-normal">
                    Last Name
                  </label>
                  <Field
                    className="p-4 outline-none border rounded-md mt-1 "
                    name="lname"
                    id="lname"
                    placeholder="Last Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lname}
                  />
                  {errors.lname && touched.lname ? (
                    <p className=" text-sm font-light text-red-700">
                      {errors.lname}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col basis-full mb-4">
                  <label htmlFor="email" className="text-gray-500 font-normal">
                    Email
                  </label>
                  <Field
                    className="p-4 outline-none border rounded-md mt-1 "
                    name="email"
                    id="email"
                    placeholder="xyz@mail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <p className=" text-sm font-light text-red-700">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col w-72 mb-4">
                  <label htmlFor="phone" className="text-gray-500 font-normal">
                    Phone
                  </label>
                  <Field
                    className="p-4 outline-none border rounded-md mt-1 "
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone ? (
                    <p className=" text-sm font-light text-red-700">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>
                {/* <div className=" flex flex-col w-72 ml-auto mb-4">
                  <label className="text-gray-500 font-normal">Gender</label>
                  <div className="flex">
                    <label
                      htmlFor="male"
                      className="flex items-center text-gray-500 font-normal border rounded-md p-4 w-32 mt-1"
                    >
                      <Field
                        type="radio"
                        className="mr-2"
                        name="gender"
                        id="male"
                        value="male"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      Male
                    </label>
                    <label
                      htmlFor="female"
                      className="flex items-center text-gray-500 font-normal border rounded-md p-4 w-32 mt-1 ml-auto"
                    >
                      <Field
                        type="radio"
                        className="mr-2"
                        name="gender"
                        id="female"
                        value="female"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      Female
                    </label>
                  </div>
                </div> */}
                <div className="flex flex-col w-72">
                  <label
                    htmlFor="password"
                    className="text-gray-500 font-normal"
                  >
                    Password
                  </label>
                  <Field
                    className="p-4 outline-none border rounded-md mt-1 mb-3 "
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <p className=" text-sm font-light text-red-700">
                      {errors.password}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col w-72 ml-auto">
                  <label
                    htmlFor="confirmpassword"
                    className="text-gray-500 font-normal"
                  >
                    Confirm Password
                  </label>
                  <Field
                    className="p-4 outline-none border rounded-md mt-1 mb-3 "
                    name="confirmPassword"
                    id="confirmpassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <p className=" text-sm font-light text-red-700">
                      {errors.confirmPassword}
                    </p>
                  ) : null}
                </div>
                <button
                  className="py-3 px-4 bg-indigo-600 rounded-md text-white w-40 mt-4 tracking-wide"
                  type="submit"
                  onClick={PostData}
                >
                  Register
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
