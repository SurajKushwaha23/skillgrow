import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./assets/Pages/login/login.jsx";
import Register from "./assets/Pages/registration/registration.jsx";
import Home from "./assets/Pages/home/Home.jsx";

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
        element: <Home />,
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
