import Header from "./src/component/Header";
import Body from "./src/component/Body";
import Footer from "./src/component/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Latest from "./src/component/Latest";
import Contact from "./src/component/Contact";
import Random from "./src/component/Random";
import About from "./src/component/About";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
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
    ],
  },
]);

export default App;
