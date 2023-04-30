import { Formik, Form, Field } from "formik";
import signup from "../assets/img/signup.png";

const Signup = () => {
  return (
    <>
      <div className=" h-screen p-12">
        <div className="flex justify-between bg-white rounded-2xl p-4 h-[700px] shadow-md container">
          <div className=" basis-2/5 text-white bg-indigo-600 rounded-xl flex justify-center">
            <img className=" w-3/5 object-contain" src={signup} alt="signup" />
          </div>
          <div className=" basis-3/5 basis text-sm font-normal bg-white rounded-xl px-16">
            <div className="my-8">
              <h1 className=" text-2xl font-bold tracking-wide">Sign Up</h1>
              <div className=" text-indigo-500 my-1 tracking-wide">
                Have and account?
              </div>
            </div>

            <Formik
              initialValues={{
                fname: "",
                lname: "",
                email: "",
                password: "",
                cpassword: "",
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form className="flex flex-wrap container">
                <div className="flex flex-col w-72">
                  <label htmlFor="fname" className="text-gray-500 font-normal">
                    First Name
                  </label>
                  <Field
                    className="p-4 outline-none border rounded-md mt-1 mb-3 "
                    name="fname"
                    id="fname"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col ml-auto w-72">
                  <label htmlFor="lname" className="text-gray-500 font-normal">
                    Last Name
                  </label>
                  <Field
                    className="p-4 outline-none border rounded-md mt-1 mb-3 "
                    name="lname"
                    id="lname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex flex-col basis-full">
                  <label htmlFor="email" className="text-gray-500 font-normal">
                    Email
                  </label>
                  <Field
                    className="p-4 outline-none border rounded-md mt-1 mb-3 "
                    name="email"
                    id="email"
                    placeholder="xyz@mail.com"
                  />
                </div>
                <div className="flex flex-col w-72">
                  <label htmlFor="phone" className="text-gray-500 font-normal">
                    Phone
                  </label>
                  <Field
                    className="p-4 outline-none border rounded-md mt-1 mb-3 "
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                  />
                </div>
                <div className=" flex flex-col w-72 ml-auto">
                  <label className="text-gray-500 font-normal">Gender</label>
                  <div className="flex">
                    <label
                      htmlFor="male"
                      className="flex items-center text-gray-500 font-normal border rounded-md p-4 w-32 mt-1 mb-3"
                    >
                      <Field
                        type="radio"
                        className="mr-2"
                        name="gender"
                        id="male"
                      />
                      Male
                    </label>
                    <label
                      htmlFor="female"
                      className="flex items-center text-gray-500 font-normal border rounded-md p-4 w-32 mt-1 mb-3 ml-auto"
                    >
                      <Field
                        type="radio"
                        className="mr-2"
                        name="gender"
                        id="female"
                      />
                      Female
                    </label>
                  </div>
                </div>
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
                  />
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
                    name="cpassword"
                    id="confirmpassword"
                    placeholder="Confirm Password"
                  />
                </div>
                <button
                  className=" py-3 px-4 bg-indigo-600 rounded-md text-white w-40 mt-4"
                  type="submit"
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

export default Signup;
