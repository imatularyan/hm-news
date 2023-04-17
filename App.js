import Header from "./src/component/Header";
import Body from "./src/component/Body";
import Footer from "./src/component/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Latest from "./src/component/Latest";
import Contact from "./src/component/Contact";
import Random from "./src/component/Random";
import About from "./src/component/About";
import Subscribe from "./src/component/Subscribe";
import MainContainer from "./src/component/MainContainer";
import Dashboard from "./src/component/Dashboard";
import Login from "./src/component/Login";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Subscribe />
      <Footer />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "",
            element: <MainContainer />,
          },
          {
            path: "latest",
            element: <Latest />,
          },
          {
            path: "random",
            element: <Random />,
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
            path: "/login",
            element: <Login />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <Dashboard />,
  },
]);

export default App;
