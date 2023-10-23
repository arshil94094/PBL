import React from "react";
import Link from "next/link";
export default function creditCardLoan() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="container bg-blue-200  rounded border-2 mt-5 p-4 mx-auto  bg-info">
        <form>
          <h4 className="py-2 text-4xl font-bold">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-indigo-400">
              Credit Card Loan
            </span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-3">
              <label htmlFor="fullName" className="block">
                <strong>Full Name :</strong>
              </label>
              <input
                type="text"
                className="form-input"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="block">
                <strong> Date of Birth :</strong>
              </label>
              <input
                type="date"
                className="form-input border border-1 border-secondary-subtle"
                id="dob"
                name="dob"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-3">
              <label htmlFor="ssn" className="block">
                <strong> ADDHAR CARD Number :</strong>
              </label>
              <input
                type="text"
                className="form-input border border-1 border-secondary-subtle"
                id="ssn1"
                name="ssn"
                placeholder="ADDHAR CARD NUMBER"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="block">
                <strong> Address : </strong>
              </label>
              <input
                type="text"
                className="form-input border border-1 border-secondary-subtle"
                id="address1"
                name="address"
                placeholder="Address"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
            <div className="mb-3">
              <label htmlFor="email1" className="block">
                <strong> Email:</strong>
              </label>
              <input
                type="email"
                className="form-input"
                id="email1"
                name="email"
                placeholder="Email ID"
                required
              />
            </div>
            <div className="mb-3 " style={{ marginLeft: "210px" }}>
              <label htmlFor="phone" className="block">
                <strong> Contact : </strong>
              </label>
              <input
                type="tel"
                className="form-input"
                id="phone1"
                name="phone"
                placeholder="Contact Number"
                required
              />
            </div>
          </div>
          <div className=" grid grid-col-2 md:grid-cols-2 gap-4 my-3">
            <div className="mb-3 inline-block text-left">
              <label htmlFor="employmentStatus" className=" block ">
                <strong> Status : </strong>
              </label>
              <select
                className="form-select"
                id="employmentStatus1"
                name="employmentStatus"
                required
              >
                <option value="employed">Employed</option>
                <option value="selfEmployed">Self-Employed</option>
                <option value="unemployed">Unemployed</option>
              </select>
            </div>
            <div
              className="mb-3 ml-30"
              // style={{ position: "relative", left: "20px" }}
            >
              <label htmlFor="jobTitle" className="block">
                <strong>Score:</strong>
              </label>
              <input
                type="text"
                className="form-input border border-1 border-secondary-subtle"
                id="CreditScore1"
                name="CreditScore"
                placeholder="Enter your Credit Score here"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div className="mb-3">
              <label htmlFor="income" className="block">
                <strong> Debts: </strong>
              </label>
              <input
                type="text"
                className="form-input border border-1 border-secondary-subtle"
                id="PreviousDebt1"
                name="PreviosDebt"
                placeholder="Enter your Existing Debts Here.. "
                required
              />
            </div>
            <div className="mb-3 inline-block ml-0">
              <label htmlFor="income" className="block">
                <strong> Income:</strong>
              </label>
              <input
                type="number"
                className="form-input"
                id="income1"
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
