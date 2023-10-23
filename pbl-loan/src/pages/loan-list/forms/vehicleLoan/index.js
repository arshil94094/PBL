import React from "react";
import Link from "next/link";
export default function VehicleLoan() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="container rounded bg-blue-200 border-2 mt-5 py-3 p-4 bg-info">
        <form>
          <h4 className="py-2 text-4xl font-bold"><span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-indigo-400">Vehicle Loan</span></h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="my-2">
              <label htmlFor="loanType5" className="block">
                <strong>Loan Type:</strong>
              </label>
              <select
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="loanType5"
                name="loanType5"
                required
              >
                <option value="twoWheeler5">Two-Wheeler Loan</option>
                <option value="car5">Car Loan</option>
              </select>
            </div>
            <div className="my-2">
              <label htmlFor="fullName5" className="block">
                <strong>Full Name:</strong>
              </label>
              <input
                type="text"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="fullName5"
                name="fullName5"
                placeholder="Full Name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="my-2">
              <label htmlFor="twoWheelerDetails5" className="block">
                <strong>Two-Wheeler Details:</strong>
              </label>
              <textarea
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="twoWheelerDetails5"
                name="twoWheelerDetails5"
                placeholder="Please provide details about the two-wheeler you plan to purchase."
                required
              ></textarea>
            </div>
            <div className="my-2">
              <label htmlFor="carDetails5" className="block">
                <strong>Car Details:</strong>
              </label>
              <textarea
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="carDetails5"
                name="carDetails5"
                placeholder="Please provide details about the car you plan to purchase."
                required
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="my-2">
              <label htmlFor="insuranceDetails5" className="block">
                <strong>Insurance Details:</strong>
              </label>
              <textarea
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="insuranceDetails5"
                name="insuranceDetails5"
                placeholder="Please provide details about the insurance policy for the vehicle (if applicable)."
                required
              ></textarea>
            </div>
            <div className="my-2">
              <label htmlFor="creditScore5" className="block">
                <strong>Credit Score:</strong>
              </label>
              <input
                type="number"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="creditScore5"
                name="creditScore5"
                placeholder="Enter your credit score"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="my-2">
              <label htmlFor="documents5" className="block">
                <strong>Documents:</strong>
              </label>
              <textarea
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="documents5"
                name="documents5"
                placeholder="Please list the documents you plan to submit (e.g., pay stubs, tax returns, bank statements, etc.)"
                required
              ></textarea>
            </div>
            <div className="my-2">
              <label htmlFor="fileUpload5" className="block">
                <strong>Upload Documents:</strong>
              </label>
              <input
                type="file"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="fileUpload5"
                name="fileUpload5"
                accept=".pdf, .doc, .docx, .jpg, .png"
                multiple
              />
              <small className="text-gray-600">
                You can upload multiple files. Allowed file formats: PDF, DOC,
                DOCX, JPG, PNG, etc.
              </small>
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="additionalInfo5" className="block">
              <strong>Additional Information:</strong>
            </label>
            <textarea
              className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
              id="additionalInfo5"
              name="additionalInfo5"
              placeholder="Is there any additional information or specific requirements you would like to mention?"
              required
            ></textarea>
          </div>
          <div className="my-2">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            >
              <Link href="/contactPerson">Check Eligibility</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
