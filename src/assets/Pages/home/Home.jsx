import React from "react";
import { MoveRight } from "lucide-react";

const categories = [
  {
    code: "GK",
    title: "General Knowledge",
    question: "200",
    bgColor: "rgb(219 39 119)",
  },
  {
    code: "SK",
    title: "Suraj Kushwaha",
    question: "350",
    bgColor: "rgb(147 51 234)",
  },
  {
    code: "CD",
    title: "Component Design",
    question: "350",
    bgColor: "rgb(234 179 8)",
  },
  {
    code: "rc",
    title: "React Components",
    question: "350",
    bgColor: "rgb(34 197 94)",
  },
  {
    code: "T",
    title: "Templates",
    question: "350",
    bgColor: "rgb(87 81 225)",
  },
  {
    code: "AK",
    title: "Anya Kushwaha",
    question: "350",
    bgColor: "rgb(70 148 187)",
  },
  {
    code: "SK",
    title: "Suman Kushwaha",
    question: "350",
    bgColor: "rgb(125 102 225)",
  },
  {
    code: "AK",
    title: "Ans Kushwaha",
    question: "350",
    bgColor: "rgb(235 97 220)",
  },
];

function Home() {
  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
              <p className="text-xs font-medium md:text-sm">
                Lorem ipsum dolor sit amet consectetur.
                <span className="ml-2 cursor-pointer font-bold text-blue-primary">
                  Read More &rarr;
                </span>
              </p>
            </div>
            <h1 className="mt-8 max-w-full text-4xl font-bold text-black md:text-5xl lg:text-7xl">
              People who really cares about your growth.
            </h1>
            <p className="mt-8 max-w-full text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              ipsam nulla aperiam quo possimus, nihil molestiae modi tenetur
              esse qui repudiandae cum fuga aspernatur ea? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Officia ipsam nulla aperiam quo
              possimus, nihil molestiae modi tenetur esse qui repudiandae cum
              fuga aspernatur ea?
            </p>
            <div className="mt-8">
              <button
                type="button"
                className="inline-flex bg-blue-primary py-2  px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-primary focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
              >
                Start Free Trial
                <MoveRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
        <div class="mx-auto lg:text-center">
          <h2 class="text-xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
            Our Categories
          </h2>
          <p class="mt-4 max-w-4xl text-lg text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            dolores eligendi corporis, quasi et modi atque incidunt eveniet
            molestias obcaecati?
          </p>
        </div>
        <div className=" container px-4 py-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((item) => (
              <li className="shadow rounded-md flex col-span-1 mb-4">
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="text-2xl font-bold text-white max-w-7xl justify-center items-center w-16 shrink-0 flex rounded-l uppercase"
                >
                  {item.code}
                </div>
                <div className="bg-white border-gray-200 flex flex-1 justify-between items-center rounded-r">
                  <div className="text-md px-4 py-4 truncate flex-1">
                    <a href="#" className="text-gray-900 font-medium">
                      {item.title}
                    </a>
                    <p className="text-slate-500">{item.question} Question</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
