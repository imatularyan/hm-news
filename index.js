import App from "./App";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { appRouter } from "./App";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </StrictMode>
);
