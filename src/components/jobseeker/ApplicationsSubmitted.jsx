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

const ApplicantsSubmitted = () => {

  return (
    <div className='bg-gray-400 p-9 m-4 duration-1000 drop-shadow-sm border flex flex-col items-center animate-in fade-in-0 rounded-md space-y-4'>
      <h1 className='text-xl text-center text-gray-600'>ALL APPPLICATIONS SUBMITTED LIST</h1>
      <Table>
        <TableCaption>List of All Applications Submitted.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sr.#</TableHead>
            {/* <TableHead className="text-center">Application ID</TableHead> */}
            <TableHead className="text-center">Company Name</TableHead>
            <TableHead className="text-center">Application Title</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Contact No.</TableHead>
            <TableHead className="text-center">Experience</TableHead>
            <TableHead className="text-center">Time Slot</TableHead>
            <TableHead className="text-center">Interview Status</TableHead>
            <TableHead className="text-center">Job Details</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="font-medium">001</TableCell>
            {/* <TableCell>1</TableCell> */}
            <TableCell className="text-center w-auto">RB Soft</TableCell>
            <TableCell className="text-center w-auto">Frontend Developer</TableCell>
            <TableCell className="text-center w-auto">esha@gmail.com</TableCell>
            <TableCell className="text-center w-auto">03xxxxxxxxx</TableCell>
            <TableCell className="text-center w-auto">2 Years</TableCell>
            <TableCell className="text-center w-auto">06:00 PM</TableCell>
            <TableCell className="text-center w-auto">Pending</TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600 m-auto'>View</button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">002</TableCell>
            {/* <TableCell>1</TableCell> */}
            <TableCell className="text-center w-auto">Netsole</TableCell>
            <TableCell className="text-center w-auto">Frontend Developer</TableCell>
            <TableCell className="text-center w-auto">esha@gmail.com</TableCell>
            <TableCell className="text-center w-auto">03xxxxxxxxx</TableCell>
            <TableCell className="text-center w-auto">2 Years</TableCell>
            <TableCell className="text-center w-auto">08:00 PM</TableCell>
            <TableCell className="text-center w-auto">Done</TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600 m-auto'>View</button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">003</TableCell>
            {/* <TableCell>1</TableCell> */}
            <TableCell className="text-center w-auto">Devsinc</TableCell>
            <TableCell className="text-center w-auto">Frontend Developer</TableCell>
            <TableCell className="text-center w-auto">esha@gmail.com</TableCell>
            <TableCell className="text-center w-auto">03xxxxxxxxx</TableCell>
            <TableCell className="text-center w-auto">2 Years</TableCell>
            <TableCell className="text-center w-auto">02:00 PM</TableCell>
            <TableCell className="text-center w-auto">Done</TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600 m-auto'>View</button></TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </div>
  )
}

export default ApplicantsSubmitted