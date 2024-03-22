import React from "react";
import { ArrowRight } from "lucide-react";

function PreQuiz() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 grid-cols-1">
        <div className="px-2">
          <h2 className="text-2xl font-bold leading-tight text-black">
            Note :-
          </h2>
          <ol class="list-decimal">
            <li className="py-3 text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              natus nesciunt iusto expedita cum nobis dolore distinctio tempore
              alias nisi.
            </li>
            <li className="py-3 text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              natus nesciunt iusto expedita cum nobis dolore distinctio tempore
              alias nisi.
            </li>
            <li className="py-3 text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              natus nesciunt iusto expedita cum nobis dolore distinctio tempore
              alias nisi.
            </li>
            <li className="py-3 text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              natus nesciunt iusto expedita cum nobis dolore distinctio tempore
              alias nisi.
            </li>
          </ol>
        </div>
        <div className="xl:mx-auto xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-2xl font-bold leading-tight text-black">
            Select Quiz Type and Number of Question
          </h2>

          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Quiz Type{" "}
                </label>
                <div className="mt-2">
                  <select
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Number of Question{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Number of question"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PreQuiz;
