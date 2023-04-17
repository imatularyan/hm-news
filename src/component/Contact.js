import { Formik, Form, Field } from "formik";
import call from "../assets/img/call.svg";
import mail from "../assets/img/mail.svg";
import location from "../assets/img/location.svg";
import facebook from "../assets/img/facebook.svg";
import youtube from "../assets/img/youtube.svg";
import instagram from "../assets/img/instagram.svg";

const Contact = () => {
  return (
    <div className=" h-screen w-full">
      <div className="h-fit bg-[#1B2259] w-full rounded-xl flex p-14">
        <div className=" basis-2/5 text-white">
          <h1 className=" text-3xl font-bold leading-10 tracking-wide">
            Contact
          </h1>
          <p className=" opacity-60 font-light mt-3">
            Fill up the form and out Team will be get back to you within 24
            hours.
          </p>
          <div className="my-16 text-sm font-light w-fit h-fit">
            <div className="flex my-4 gap-3 py-3 px-4 w-56 rounded-md hover:outline hover:outline-indigo-500 cursor-pointer">
              <img className=" w-5" src={call} alt="call" />
              <span>+9112 3456 7890</span>
            </div>
            <div className="flex my-4 gap-3 py-3 px-4 rounded-md hover:outline hover:outline-indigo-500 cursor-pointer">
              <img className="w-5" src={mail} alt="mail" />
              <span>xyz@mail.com</span>
            </div>
            <div className="flex my-4 gap-3 py-3 px-4 rounded-md hover:outline hover:outline-indigo-500 cursor-pointer">
              <img className="w-5" src={location} alt="location" />
              <span>Darbhanga, Bihar</span>
            </div>
          </div>
          <div className="flex gap-6">
            <span className=" w-12 rounded-full hover:bg-indigo-500 p-3 transition delay-75 cursor-pointer">
              <img className="w-full" src={facebook} alt="facebook" />
            </span>
            <span className="w-12 rounded-full hover:bg-indigo-500 p-3 transition delay-75 cursor-pointer">
              <img className="w-full" src={youtube} alt="youtube" />
            </span>
            <span className="w-12 rounded-full hover:bg-indigo-500 p-3 transition delay-75 cursor-pointer">
              <img className="w-full" src={instagram} alt="instagram" />
            </span>
          </div>
        </div>
        <div className=" basis-2/5 border border-white bg-white rounded-xl text-sm font-normal ml-auto">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className="flex flex-col w-full p-5">
              <label htmlFor="name">Your Name</label>
              <Field
                className="p-3 outline-none border border-gray-200 rounded-md mt-1 mb-3"
                id="name"
                name="name"
                placeholder="Name"
              />
              <label htmlFor="email">Mail</label>
              <Field
                className="p-3 outline-none border border-gray-200 rounded-md mt-1 mb-3"
                id="email"
                name="email"
                placeholder="xyz@mail.com"
                type="email"
              />
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                className="p-3 outline-none bg-gray-100 rounded-md mt-1 mb-3 h-44"
                id="message"
                name="message"
                placeholder="Message"
              ></Field>
              <button
                className=" py-3 px-4 bg-indigo-500 rounded-md text-white w-40 ml-auto mt-4 styl"
                type="submit"
              >
                Send Message
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
