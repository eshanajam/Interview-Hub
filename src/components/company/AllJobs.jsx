import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Button } from '../ui/button'

const AllJobs = () => {
  return (
    <div className='bg-gray-400 p-9 m-4 duration-1000 drop-shadow-sm border flex flex-col items-center animate-in fade-in-0 rounded-md space-y-4'>
      <h1 className='text-xl text-center text-gray-600'>ALL POSTED JOBS</h1>
      <Table>
        <TableCaption>List of All Jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sr.#</TableHead>
            <TableHead>Job ID</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Applicants</TableHead>
            <TableHead className="">Edit</TableHead>
            <TableHead className="">Delete</TableHead>
            <TableHead className="">View</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="font-medium">SR001</TableCell>
            <TableCell>1</TableCell>
            <TableCell>Software Developer</TableCell>
            <TableCell className="">17-12-23</TableCell>
            <TableCell className="">Hiring</TableCell>
            <TableCell className="">12</TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600'>Edit</button></TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600' border-2 border-gray-600>Delete</button></TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600'>View</button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">SR002</TableCell>
            <TableCell>2</TableCell>
            <TableCell>Database Administrator</TableCell>
            <TableCell className="">17-12-23</TableCell>
            <TableCell className="">Closed</TableCell>
            <TableCell className="">15</TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600'>Edit</button></TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600' border-2 border-gray-600>Delete</button></TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600'>View</button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">SR003</TableCell>
            <TableCell>3</TableCell>
            <TableCell>Backend Developer</TableCell>
            <TableCell className="">17-12-23</TableCell>
            <TableCell className="">Hiring</TableCell>
            <TableCell className="">10</TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600'>Edit</button></TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600' border-2 border-gray-600>Delete</button></TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600'>View</button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default AllJobs