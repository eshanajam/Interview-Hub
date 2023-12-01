import React from "react";
import { Link } from "react-router-dom";

const Hub = () => {
  return (
    <div className="bg-blue-700 w-full h-screen">
      <div className="flex flex-row h-[100%] justify-center items-center space-x-8">
        <div className="bg-white w-[30%] h-[50%] rounded-md flex flex-col justify-center items-center">
          <Link to="/login" state={"company"}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="10em"
              width="10em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 19h2V6l6.394 2.74a1 1 0 01.606.92V19h2v2H1v-2h2V5.65a1 1 0 01.594-.914l7.703-3.424A.5.5 0 0112 1.77V19z" />
            </svg>
            <h1 className="text-3xl font-semibold">Company</h1>
          </Link>
        </div>
        <div className="bg-white w-[30%] h-[50%] rounded-md flex flex-col justify-center items-center">
          <Link to="/login" state={"jobseeker"}>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="10em"
              width="10em"
            >
              <path d="M6.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3zM11 8a3 3 0 11-6 0 3 3 0 016 0z" />
              <path d="M4.5 0A2.5 2.5 0 002 2.5V14a2 2 0 002 2h8a2 2 0 002-2V2.5A2.5 2.5 0 0011.5 0h-7zM3 2.5A1.5 1.5 0 014.5 1h7A1.5 1.5 0 0113 2.5v10.795a4.2 4.2 0 00-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 00-.776.492V2.5z" />
            </svg>
            <h1 className="text-3xl font-semibold ">Job Seeker</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hub;
