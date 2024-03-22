import React from "react";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="py-24">
        <div className="text-center">
          <p className="text-base font-bold text-9xl text-blue-primary">404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Sorry, we couldn&apos:t find the page you&apos;re looking for.
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-3">
            <NavLink
              to="/"
              className="inline-flex mx-auto bg-blue-primary py-2  px-5 bg-violet-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-primary focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
            >
              Home
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
