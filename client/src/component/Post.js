import { Formik, Form, Field } from "formik";

const Post = () => {
  return (
    <>
      <div className="  font-poppins container bg-white shadow-sm border rounded-xl w-full h-fit text-gray-700">
        <h1 className="text-center text-3xl pt-5 font-semibold">Post Blog</h1>
        <Formik
          initialValues={{
            title: "",
            author: "",
            publishedAt: "",
            description: "",
            content: "",
            referUrl: "",
            urlToImage: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="flex flex-wrap gap-2 items-center justify-between p-8">
            <div className="flex w-full flex-col">
              <label htmlFor="title">Title</label>
              <Field
                className="p-3 outline-none border border-gray-200 rounded-md w-full focus:ring-2 ring-indigo-300"
                id="title"
                name="title"
                placeholder="Title"
                type="text"
              />
            </div>
            <div className="flex flex-col w-7/12">
              <label htmlFor="author">Author</label>
              <Field
                className="p-3 outline-none border rounded-md w-full focus:ring-2 ring-indigo-300"
                id="author"
                name="author"
                type="author"
                placeholder="Enter author name"
              />
            </div>
            <div className="flex  flex-col w-2/5">
              <label htmlFor="publishedAt">Published Date</label>
              <Field
                className="p-3 outline-none border rounded-md w-full focus:ring-2 ring-indigo-300"
                id="publishedAt"
                name="publishedAt"
                type="date"
                placeholder="Enter published date"
              />
            </div>
            {/* <div className="flex w-1/5 flex-col ml-1">
              <label htmlFor="img">Select or Drop Image</label>
              <Field
                className="p-3 outline-none border rounded-md focus:ring-2 ring-indigo-300"
                id="img"
                name="img"
                placeholder="Select Image"
                type="file"
              />
            </div> */}
            <div className="flex flex-col w-full">
              <label htmlFor="description">Description</label>
              <Field
                className="p-3 outline-none border rounded-md focus:ring-2 ring-indigo-300"
                as="textarea"
                id="description"
                name="description"
                placeholder="Enter description"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="content">Content</label>
              <Field
                className="p-3 outline-none border rounded-md focus:ring-2 ring-indigo-300"
                as="textarea"
                id="content"
                name="content"
                placeholder="Enter content"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="referUrl">Post Refer URL</label>
              <Field
                className="p-3 outline-none border rounded-md focus:ring-2 ring-indigo-300"
                id="referUrl"
                name="referUrl"
                placeholder="Enter post refer url"
                type="url"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="urlToImage">Image URL</label>
              <Field
                className="p-3 outline-none border border-gray-200 rounded-md focus:ring-2 ring-indigo-300"
                id="urlToImage"
                name="urlToImage"
                placeholder="Enter image url"
                type="url"
              />
            </div>
            <button
              className=" py-3 px-4 bg-indigo-500 rounded-md text-white w-40 mt-4 ml-auto"
              type="submit"
            >
              Publish
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Post;
