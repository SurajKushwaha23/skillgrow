import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./assets/components/login/login.jsx";
import Register from "./assets/components/registration/Registration.jsx";
import Index from "./assets/components/index/Index.jsx";
import Congratulation from "./assets/components/congratulation/Congratulation.jsx";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },

  {
    path: "/",
    element: <App />,
    message: "",
    children: [
      {
        path: "/",
        element: <Index />,
        message: "",
      },
      {
        path: "congratulation",
        element: <Congratulation />,
        message: "",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
