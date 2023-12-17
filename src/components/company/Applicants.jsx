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

const Applicants = () => {
  return (
    <div className='bg-gray-400 p-9 m-4 duration-1000 drop-shadow-sm border flex flex-col items-center animate-in fade-in-0 rounded-md space-y-4'>
      <h1 className='text-xl text-center text-gray-600'>ALL APPLICANTS LIST</h1>
      <Table>
        <TableCaption>List of All Applicants.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sr.#</TableHead>
            <TableHead className="text-center">Applicant ID</TableHead>
            <TableHead className="text-center">Applicant Name</TableHead>
            <TableHead className="text-center">Applied For</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Contact No.</TableHead>
            <TableHead className="text-center">Experience</TableHead>
            <TableHead className="text-center">Time Slot</TableHead>
            <TableHead className="text-center">Resume</TableHead>
            <TableHead className="text-center">Interview call</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="font-medium">001</TableCell>
            <TableCell>1</TableCell>
            <TableCell>Esha Najam</TableCell>
            <TableCell className="">Frontend Developer</TableCell>
            <TableCell className="">esha@gmail.com</TableCell>
            <TableCell className="">03xxxxxxxxx</TableCell>
            <TableCell className="">2 Years</TableCell>
            <TableCell className="text-center">02:00 PM</TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600'>Download</button></TableCell>
            <TableCell className=""><button className='p-1 py-2 rounded-md border-2 border-gray-600'>Send Mail</button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">002</TableCell>
            <TableCell>2</TableCell>
            <TableCell>Kaynat Khalid</TableCell>
            <TableCell className="">Backend Developer</TableCell>
            <TableCell className="">kaynat@gmail.com</TableCell>
            <TableCell className="">03xxxxxxxxx</TableCell>
            <TableCell className="">2 Years</TableCell>
            <TableCell className="text-center">06:00 PM</TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600'>Download</button></TableCell>
            <TableCell className=""><button className='p-1 py-2 rounded-md border-2 border-gray-600'>Send Mail</button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">003</TableCell>
            <TableCell>3</TableCell>
            <TableCell>Saira</TableCell>
            <TableCell className="">Database Administrator</TableCell>
            <TableCell className="">saira@gmail.com</TableCell>
            <TableCell className="">03xxxxxxxxx</TableCell>
            <TableCell className="">1.5 Years</TableCell>
            <TableCell className="text-center">12:00 PM</TableCell>
            <TableCell className=""><button className='p-2 rounded-md border-2 border-gray-600'>Download</button></TableCell>
            <TableCell className=""><button className='p-1 py-2 rounded-md border-2 border-gray-600'>Send Mail</button></TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </div>
  )
}

export default Applicants