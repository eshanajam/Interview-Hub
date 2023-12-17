import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "../ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"
import CompanyDashboard from './CompanyDashboard'
import PostJob from './PostJob'
import AllJobs from './AllJobs'
import Applicants from './Applicants'


const CompanySideMenu = () => {

  const [item, setItem] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    const id = e.target.id;
    setItem(id);
    if (id === 'item-5') {
      navigate("/");
    }
  }


  return (
    <div className="flex font-semibold bg-gray-300">
      {/* Sidebar */}
      <div className="bg-gray-300 w-1/6 h-screen" id='sideMenu'>
        {/* Sidebar content */}
        <div className='text-black mt-12 flex flex-col justify-center '>
          {/* <img src="labaik hospital.png" alt="" className='mb-3 w-28 ml-10' /> */}
          <ul>
            <li
              id="item-1"
              onClick={handleClick}
              className={`bg-gray-300 border-gray-800 block px-4 py-2 text-black transition duration-300 ease-in-out hover:bg-gray-400 hover:border-gray-400 hover:text-gray-800 cursor-pointer ${(item === 'item-1' || item === '') && 'select'}`}>
              Dashboard
            </li>

            {<li
              id="item-2"
              onClick={handleClick}
              className={` bg-gray-300 border-gray-800 border-t-2 border-b-0 block px-4 py-2 font-semibold text-black transition duration-300 ease-in-out hover:bg-gray-400 hover:border-gray-400 hover:text-gray-800 cursor-pointer ${item === "item-2" ? 'select' : ''}`}>
              Post a Job
            </li>}
            {<li
              id="item-3"
              onClick={handleClick}
              className={` bg-gray-300 border-gray-800 border-t-2 border-b-0 block px-4 py-2 font-semibold text-black transition duration-300 ease-in-out hover:bg-gray-400 hover:border-gray-400 hover:text-gray-800 cursor-pointer ${item === "item-3" ? 'select' : ''}`}>
              All Jobs
            </li>}
            {<li
              id="item-4"
              onClick={handleClick}
              className={` bg-gray-300 border-gray-800 border-t-2 border-b-0 block px-4 py-2 font-semibold text-black transition duration-300 ease-in-out hover:bg-gray-400 hover:border-gray-400 hover:text-gray-800 cursor-pointer ${item === "item-4" ? 'select' : ''}`}>
              Applicants
            </li>}
            {<li
              id="item-5"
              onClick={handleClick}
              className={` bg-gray-300 border-gray-800 border-t-2 border-b-0 block px-4 py-2 font-semibold text-black transition duration-300 ease-in-out hover:bg-gray-400 hover:border-gray-400 hover:text-gray-800 cursor-pointer ${item === "item-5" ? 'select' : ''}`}>
              logout
            </li>}
          </ul>
        </div>
      </div>

      <div className="flex-1 text-gray-800">
        {/* body */}
        <div className="bg-gray-300 h-12 text-center p-4" id='headerTitle'>
          <h2>Welcome to Interview Hub Dashboard</h2>
        </div>
        <div>
          {(item === 'item-1' || item === '') && <CompanyDashboard />}
          {(item === 'item-2') && <PostJob />}
          {(item === 'item-3') && <AllJobs />}
          {(item === 'item-4') && <Applicants />}
        </div>
      </div>
    </div>
  )
}

export default CompanySideMenu