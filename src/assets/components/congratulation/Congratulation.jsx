import React from "react";

function Congratulation() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto text-center">
            <img src="/success.png" className="w-[180px] flex mx-auto" />
            <h1 className="text-6xl text-green-600 font-extrabold">
              Congratulation.
            </h1>

            <p className="mt-4 max-w-xl sm:text-lg/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-blue-primary px-12 py-3 text-md font-medium text-white shadow hover:bg-blue-primary focus:outline-none focus:ring active:bg-blue-primary sm:w-auto"
                href="#"
              >
                Thank you for taking Quiz
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Congratulation;
