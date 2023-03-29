import Header from "./src/component/Header";
import Body from "./src/component/Body";
import Footer from "./src/component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Latest from "./src/component/Latest";
import Contact from "./src/component/Contact";

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
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default App;
