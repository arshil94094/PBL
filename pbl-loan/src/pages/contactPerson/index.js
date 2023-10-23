import React from "react";
import Link from "next/link";
export default function index() {
  return (
    <div>
      <div className="p-16 bg-gray-100">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">Age</p>
                <p className="text-gray-400"> 27</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">Window no.</p>
                <p className="text-gray-400">8</p>
              </div>
              
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Connect
              </button>
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Email 
              </button>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              Jessica Jones
              
            </h1>
            <p className="font-light text-gray-600 mt-3">Ahemdabad, Gujarat</p>
            <p className="mt-8 text-gray-500">
            Loan Officer
            </p>
            <p className="mt-2 text-gray-500">Contact the Loan-Officer within 4 working days</p>
          </div>
          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">
            It's essential for applicants to follow the lender's instructions carefully, which may include bringing hard copies of uploaded documents when required. The exact process can vary depending on the lender and the type of loan.
            </p>

            <button className="text-indigo-500 py-2 px-4 text-2xl font-medium mt-4">
            <Link href="/">
                Go Back To Home Page
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
