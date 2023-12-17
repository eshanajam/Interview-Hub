import React, { useState } from 'react'
import { Button } from '../ui/button'

const SearchJobs = () => {
  const [job, setJob] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(job)
  }


  const data = [
    { company: "Devsinc", title: "Web Designer", Description: "We need a very skilled and expereinced Developer" },
    { company: "Systems", title: "Frontend Developer", Description: "We need a very skilled and expereinced Developer" },
    { company: "RB Soft", title: "Backend Developer", Description: "We need a very skilled and expereinced Developer" },
    { company: "Devsinc", title: "Backend Developer", Description: "We need a very skilled and expereinced Developer" },
    { company: "Netsole", title: "Backend Developer", Description: "We need a very skilled and expereinced Developer" },
    { company: "RB Soft", title: "Web Designer", Description: "We need a very skilled and expereinced Developer" },
    { company: "Netsole", title: "Web Designer", Description: "We need a very skilled and expereinced Developer" },
  ]

  return (
    <div className="flex flex-col items-center bg-gray-400 rounded-md p-9 m-2 drop-shadow-sm border animate-in fade-in-0 duration-1000 text-gray-700 print:hidden" id='srch'>
      <h1 className="text-gray-600 text-center text-2xl pb-5">Search Patient</h1>
      <form onSubmit={handleSearch} className='flex justify-center'>
        {/* <label htmlFor="name">Name:</label> */}
        <div className='space-y-2'>
          <div className=''>
            <select type="text" className='sm:rounded-sm mr-2 indent-2 ring-0 focus:outline-0 p-2'
              onChange={e => setJob(e.target.value)}>
              <option value="">Select</option>
              <option value="Web Designer">Web Designer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>
            <button type='submit'>Search</button>
          </div>
        </div>
      </form>
      {job !== "" ? <div className='flex flex-row flex-wrap justify-center items-center'>
        <br />
        {data.map((item) => {
          if (item.title === job) {
            return (
              <div className='w-[300px] border-2 h-[300px] p-3 m-3'>
                <br />
                <h1>Company Name: {item.company}</h1>
                <br />
                <hr />
                <br />
                <h1>Job Title: {item.title}</h1>
                <br />
                <h1>Job Description: {item.Description}</h1>
                <br />
                <hr />
                <br />
                <Button className="bg-slate-800 text-white">Apply</Button>
              </div>
            )
          }
        })}
      </div> : <div>
        <br />
        <h1 className='text-center text-lg'>Search for Jobs</h1>
      </div>
      }
    </div >

  )
}

export default SearchJobs