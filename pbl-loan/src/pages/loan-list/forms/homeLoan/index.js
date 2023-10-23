import React from "react";
import Link from "next/link";
export default function HomeLoan() {
  return (
    <div className="grid place-items-center h-screen">
    <div className="p-3 my-2 border-0 bd-example m-0 border-0 bg-info">
      <div className="container p-4 bg-blue-200  rounded border-2 mt-5 py-3">
        <form>
          <h4 className="py-2 text-4xl font-bold">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-indigo-400">Home Loan</span></h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="my-2">
              <label htmlFor="fullName" className="block">
                <strong>Full Name:</strong>
              </label>
              <input
                type="text"
                className="form-input rounded"
                id="fullName1"
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
                className="form-input border border-1 rounded border-secondary-subtle"
                id="dob1"
                name="dob"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
            <div className="my-2">
              <label htmlFor="ssn2" className="block">
                <strong>AADHAR CARD Number:</strong>
              </label>
              <input
                type="text"
                className="form-input border border-1 rounded border-secondary-subtle"
                id="ssn2"
                name="ssn"
                placeholder="AADHAR CARD NUMBER"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="address2" className="block">
                <strong>Address:</strong>
              </label>
              <input
                type="text"
                className="form-input border border-1 rounded border-secondary-subtle"
                id="address2"
                name="address"
                placeholder="Address"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
            <div>
              <label htmlFor="email2" className="block">
                <strong>Email:</strong>
              </label>
              <input
                type="email"
                className="form-input rounded"
                id="email2"
                name="emai2"
                placeholder="Email ID"
                required
              />
            </div>
            <div>
              <label htmlFor="phone2" className="block">
                <strong>Contact:</strong>
              </label>
              <input
                type="tel"
                className="form-input rounded"
                id="phone2"
                name="phone"
                placeholder="Contact Number"
                required
              />
            </div>
            <div>
              <label htmlFor="employmentStatus1" className="block">
                <strong>Status:</strong>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
            <div>
              <label htmlFor="CreditScore2" className="block">
                <strong>Score:</strong>
              </label>
              <input
                type="text"
                className="form-input rounded"
                id="CreditScore2"
                name="CreditScore"
                placeholder="Enter your Credit Score here"
                required
              />
            </div>
            <div>
              <label htmlFor="PreviousDebt2" className="block">
                <strong>Debts:</strong>
              </label>
              <input
                type="text"
                className="form-input rounded"
                id="PreviousDebt2"
                name="PreviosDebt"
                placeholder="Enter your Existing Debts Here.."
                required
              />
            </div>
            <div>
              <label htmlFor="income2" className="block">
                <strong>Income:</strong>
              </label>
              <input
                type="number"
                className="form-input rounded"
                id="income2"
                name="income"
                placeholder="Monthly or Annual Income"
                required
              />
            </div>
          </div>
          <div className="container rounded border-2 border-gray-400 mt-5 p-3 bg-info">
            <h4 className=" text-2xl font-bold">Home Loan Professional Detail</h4>
            <div className="row mb-3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="my-2">
                <label htmlFor="documents" className="block">
                  <strong>Documents:</strong>
                </label>
                <textarea
                  className="form-input"
                  id="documents"
                  name="documents"
                  placeholder="Please list the documents you plan to submit (e.g., pay stubs, tax returns, bank statements, property documents, etc.)"
                  required
                />
              </div>
              <div className="my-2">
                <label htmlFor="fileUpload" className="block">
                  <strong>Upload Documents:</strong>
                </label>
                <input
                  type="file"
                  className="form-input"
                  id="fileUpload"
                  name="fileUpload"
                  accept=".pdf, .doc, .docx, .jpg, .png"
                  multiple
                />
                <small className="form-text">
                  You can upload multiple files. Allowed file formats: PDF, DOC, DOCX, JPG, PNG, etc.
                </small>
              </div>
            </div>
            <div className="my-2">
              <label htmlFor="additionalInfo" className="block">
                <strong>Additional Information:</strong>
              </label>
              <textarea
                className="form-input"
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Is there any additional information or specific requirements you would like to mention?"
                required
              />
            </div>
          </div>
          <Link href="/contactPerson">
        <button type="submit" className="bg-blue-500 text-white my-2 px-4 py-2 rounded">
          Check eligibility
        </button>
        </Link>
        </form>
      </div>
    </div>
    </div>
  );
}