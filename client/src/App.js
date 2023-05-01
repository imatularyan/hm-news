import Header from "../src/component/Header";
import Body from "../src/component/Body";
import Footer from "../src/component/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "../src/component/Contact";
import About from "../src/component/About";
import Subscribe from "../src/component/Subscribe";
import MainContainer from "../src/component/MainContainer";
import Dashboard from "../src/component/Dashboard";
import { useState, createContext } from "react";
import Error from "../src/component/Error";
import Post from "../src/component/Post";
import Status from "../src/component/Status";
import SignUp from "../src/component/SignUp";
import BlogContainer from "../src/component/BlogContainer";

export const CategoryContext = createContext();
export const SearchContext = createContext();

const App = () => {
  const [category, setCategory] = useState("General");
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <CategoryContext.Provider value={category}>
        <SearchContext.Provider value={searchText}>
          <Header setCategory={setCategory} setSearchText={setSearchText} />
          <Outlet />
          <Footer />
        </SearchContext.Provider>
      </CategoryContext.Provider>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "",
            element: <MainContainer />,
            children: [
              {
                path: "",
                element: <BlogContainer />,
              },
              {
                path: "about",
                element: <About />,
              },
              {
                path: "contact",
                element: <Contact />,
              },
              {
                path: "register",
                element: <SignUp />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Status />,
      },
      {
        path: "post",
        element: <Post />,
      },
    ],
  },
]);

export default App;
