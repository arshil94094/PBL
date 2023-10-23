import React from "react";
import Link from "next/link";
export default function SmallBusinessLoan() {
  return (
    <div className="grid place-items-center h-screen ">
      <div className="container bg-blue-300 rounded border-2 mt-5 p-5 bg-info">
        <form className="">
          <h4 className="py-2 text-4xl font-bold"><span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-indigo-400">Small Bussiness Loan</span></h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="my-2">
              <label htmlFor="businessNameSBL" className="block">
                <strong>Business Name:</strong>
              </label>
              <input
                type="text"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="businessNameSBL"
                name="businessNameSBL"
                placeholder="Business Name"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="ownerNameSBL" className="block">
                <strong>Owner's Name:</strong>
              </label>
              <input
                type="text"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="ownerNameSBL"
                name="ownerNameSBL"
                placeholder="Owner's Name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="my-2">
              <label htmlFor="businessTypeSBL" className="block">
                <strong>Business Type:</strong>
              </label>
              <select
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="businessTypeSBL"
                name="businessTypeSBL"
                required
              >
                <option value="retail">Retail</option>
                <option value="service">Service</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="my-2">
              <label htmlFor="annualRevenueSBL" className="block">
                <strong>Annual Revenue:</strong>
              </label>
              <input
                type="number"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="annualRevenueSBL"
                name="annualRevenueSBL"
                placeholder="Annual Revenue"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="my-2">
              <label htmlFor="yearsInBusinessSBL" className="block">
                <strong>Years in Business:</strong>
              </label>
              <input
                type="number"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="yearsInBusinessSBL"
                name="yearsInBusinessSBL"
                placeholder="Years in Business"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="creditScoreSBL" className="block">
                <strong>Credit Score:</strong>
              </label>
              <input
                type="number"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="creditScoreSBL"
                name="creditScoreSBL"
                placeholder="Enter your credit score"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="my-2">
              <label htmlFor="documentsSBL" className="block">
                <strong>Documents:</strong>
              </label>
              <textarea
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="documentsSBL"
                name="documentsSBL"
                placeholder="Please list the documents you plan to submit (e.g., financial statements, business plan, etc.)"
                required
              ></textarea>
            </div>
            <div className="my-2">
              <label htmlFor="fileUploadSBL" className="block">
                <strong>Upload Documents:</strong>
              </label>
              <input
                type="file"
                className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
                id="fileUploadSBL"
                name="fileUploadSBL"
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
            <label htmlFor="additionalInfoSBL" className="block">
              <strong>Additional Information:</strong>
            </label>
            <textarea
              className="border border-1 border-secondary-subtle rounded-md px-3 py-2"
              id="additionalInfoSBL"
              name="additionalInfoSBL"
              placeholder="Is there any additional information or specific requirements you would like to mention?"
              required
            ></textarea>
          </div>
          <div className="my-2">
            <Link href="/contactPerson">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Check eligibility
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
