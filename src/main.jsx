import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Login from "./assets/components/login/login.jsx";
import Register from "./assets/components/registration/Registration.jsx";
import Index from "./assets/components/index/Index.jsx";
import PageNotFound from "./assets/components/pagenotfound/PageNotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
