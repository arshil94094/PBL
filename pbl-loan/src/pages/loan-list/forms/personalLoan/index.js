import Link from "next/link";
import React from "react";

export default function personalLoan() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="container mt-5 bg-blue-200  rounded border-2 py-3 px-3 bg-info">
        <form className="container">
          <h4 className="py-3 text-4xl font-bold "><span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-indigo-400">Personal Loan</span></h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="my-2">
              <label htmlFor="fullName" className="block">
                <strong>Full Name:</strong>
              </label>
              <input
                type="text"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="dob" className="block">
                <strong>Date of Birth:</strong>
              </label>
              <input
                type="date"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="dob"
                name="dob"
                required
              />
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="ssn" className="block">
              <strong>AADHAR CARD Number:</strong>
            </label>
            <input
              type="text"
              className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
              id="ssn"
              name="ssn"
              placeholder="AADHAR CARD NUMBER"
              required
            />
          </div>
          <div className="my-2">
            <label htmlFor="address" className="block">
              <strong>Address:</strong>
            </label>
            <input
              type="text"
              className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
              id="address"
              name="address"
              placeholder="Address"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
            <div>
              <label htmlFor="email" className="block">
                <strong>Email:</strong>
              </label>
              <input
                type="email"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="email"
                name="email"
                placeholder="Email ID"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block">
                <strong>Contact:</strong>
              </label>
              <input
                type="tel"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="phone"
                name="phone"
                placeholder="Contact Number"
                required
              />
            </div>
            <div>
              <label htmlFor="employmentStatus" className="block">
                <strong>Status:</strong>
              </label>
              <select
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="employmentStatus"
                name="employmentStatus"
                required
              >
                <option value="employed">Employed</option>
                <option value="selfEmployed">Self-Employed</option>
                <option value="unemployed">Unemployed</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="employeeName" className="block">
              <strong>Address and Name of Employer:</strong>
            </label>
            <input
              type="text"
              className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
              id="employeeName"
              name="employeeName"
              placeholder="Address and Name of Employer"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div>
              <label htmlFor="CreditScore" className="block">
                <strong>Score:</strong>
              </label>
              <input
                type="text"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="CreditScore"
                name="CreditScore"
                placeholder="Enter your Credit Score here"
                required
              />
            </div>
            <div>
              <label htmlFor="PreviosDebt" className="block">
                <strong>Debts:</strong>
              </label>
              <input
                type="text"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="PreviosDebt"
                name="PreviosDebt"
                placeholder="Enter your Existing Debts Here.."
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div>
              <input
                type="text"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="jobTitle"
                name="jobTitle"
                placeholder="Job Title"
                required
              />
            </div>
            <div>
              <input
                type="number"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="income"
                name="income"
                placeholder="Monthly or Annual Income"
                required
              />
            </div>
          </div>
          <Link href="/contactPerson">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Check eligibility
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
