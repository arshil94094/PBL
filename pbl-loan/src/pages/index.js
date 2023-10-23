import BOB from "@/assets/BankOfBarodaLogo.svg";
import SBI from "@/assets/WhatsApp Image 2023-10-15 at 19.22.35_65b17c15.jpg";
import HDFC from "@/assets/WhatsApp Image 2023-10-15 at 19.22.35_855e004f.jpg";
import ICICI from "@/assets/WhatsApp Image 2023-10-15 at 19.22.36_6ef9d4d8.jpg";
import AXIS from "@/assets/WhatsApp Image 2023-10-15 at 19.22.36_af5aae6c.jpg";
import BOI from "@/assets/Bank_of_India_logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="grid place-items-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {/* <a href="#"> */}
            <div className="w-400 h-250">
              <Image
                className="rounded-t-lg"
                src={BOB}
                alt="Bank of Baroda"
                height={250}
                width={400}
                style={{height:"130px"}}
              />
            </div>
          {/* </a> */}
          <div className="p-5">
            {/* <a href="#"> */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bank of Baroda
              </h5>
            {/* </a> */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "Bank of Baroda offers trusted banking services, competitive
              rates, and digital convenience to empower your financial journey
              and future."
            </p>
            <Link
              href="/loan-list"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {/* <a href="#"> */}
            <div className="w-400 h-250">
              <Image
                className="rounded-t-lg"
                src={SBI}
                alt="hello"
                height={250}
                width={400}
                style={{height:"130px"}}
              />
            </div>
          {/* </a> */}
          <div className="p-5">
            {/* <a href="#"> */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                State Bank of India
              </h5>
            {/* </a> */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "State Bank of India, the nation's largest bank, provides diverse
              financial solutions and digital access, ensuring your financial
              success."
            </p>
            <Link
              href="/loan-list"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {/* <a href="#"> */}
          <div className="w-382 h-130 ">
            <Image
              className="rounded-t-lg h-130 "
              src={HDFC}
              alt="hello"
              height={130}
              width={382}
              style={{height:"130px"}}
            />
          </div>
          {/* </a> */}
          <div className="p-5">
            {/* <a href="#"> */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                HDFC Bank
              </h5>
            {/* </a> */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "HDFC Bank, your trusted financial partner, offers a wide range of
              services with a commitment to your financial well-being."
            </p>
            <Link
              href="/loan-list"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {/* <a href="#"> */}
            <div className="w-400 h-250">
              <Image
                className="rounded-t-lg"
                src={ICICI}
                alt="hello"
                style={{height:"130px"}}
                height={250}
                width={400}
              />
            </div>
          {/* </a> */}
          <div className="p-5">
            {/* <a href="#"> */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ICICI Bank
              </h5>
            {/* </a> */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "ICICI Bank, your financial solutions expert, is dedicated to
              empowering your financial dreams with innovative and
              customer-centric services."
            </p>
            <Link
              href="/loan-list"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {/* <a href="#"> */}
          <div className="w-400 h-250">
            <Image
              className="rounded-t-lg"
              src={AXIS}
              alt="hello"
              height={250}
              width={400}
              style={{height:"130px"}}
            />
          </div>
          {/* </a> */}
          <div className="p-5">
            {/* <a href="#"> */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                AXIS Bank
              </h5>
            {/* </a> */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "AXIS Bank, your trusted financial partner, provides tailored
              banking solutions to help you achieve your financial goals with
              ease and confidence."
            </p>
            <Link
              href="/loan-list"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {/* <a href="#"> */}
            <div className="w-400 h-250">
              <Image
                className="rounded-t-lg"
                src={BOI}
                alt="hello"
                height={250}
                style={{height:"130px"}}
                width={400}
              />
            </div>
          {/* </a> */}
          <div className="p-5">
            {/* <a href="#"> */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bank Of India
              </h5>
            {/* </a> */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "Bank of India, your financial companion, offers a wide range of
              banking services, ensuring your financial well-being and
              security."
            </p>
            <Link
              href="/loan-list"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
