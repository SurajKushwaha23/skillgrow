import React, { useState } from "react";

const people = [
  {
    name: "John Doe",
    title: "Front-end Developer",
    department: "Engineering",
    email: "john@devui.com",
    role: "Developer",
    image:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
];

function Result() {
  const [qualify, setQualify] = useState(false);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto px-4 py-2 lg:flex lg:items-center">
          <div className="mx-auto text-center">
            <img src="/success.png" className="w-[100px] flex mx-auto" />
            <h1 className="text-4xl text-green-600 font-extrabold">
              Congratulation.
            </h1>
            <img src="/error.png" className="w-[100px] flex mx-auto" />
            <h1 className="text-4xl text-red-600 font-extrabold">OHHOOO!</h1>
            <p className="mt-4 max-w-xl font-semibold sm:text-lg/relaxed">
              You have not successfully qualify this exame.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 py-4 bg-white">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold md:px-6 lg:px-6">Result</h2>
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      <span>Employee</span>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Title
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-4 py-3.5">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.name}>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="text-sm text-gray-700">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-12 py-4">
                        <div className="text-sm text-gray-900 ">
                          {person.title}
                        </div>
                        <div className="text-sm text-gray-700">
                          {person.department}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        {person.role}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a href="#" className="text-gray-700">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <div className=" py-8 bg-white flex flex-wrap justify-center gap-4">
        <a
          className="inline-flex bg-blue-primary py-2  px-5 bg-violet-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-primary focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
          href="#"
        >
          Thank you for taking Quiz
        </a>
      </div>
    </>
  );
}

export default Result;
