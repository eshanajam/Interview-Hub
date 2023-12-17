import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from "../ui/textarea"
import { Button } from '../ui/button'

const UpdateProfile = () => {
  return (
    <div className='bg-gray-400 p-9 m-4 duration-1000 drop-shadow-sm border flex flex-col items-center animate-in fade-in-0 rounded-md'>
      <h1 className='text-center text-xl'>UPDATE PROFILE</h1><br />
      <div className='flex justify-center items-center w-[40%]'>
        <form action="" className='w-full'>
          <Input type="text" placeholder="Full Name" className="" />
          <Textarea placeholder="Short Indroduction" />
          <Input type="text" placeholder="Email" className="" />
          <Input type="text" placeholder="Phone" className="" />
          <Input type="text" placeholder="Experience" className="" />
          <Input type="text" placeholder="Location" className="" />
          <Input type="file" placeholder="Resume" className="" /><br />
          <div className='flex flex-row space-x-4 w-full'>
            <Button type="submit" className="w-full bg-blue-500 font-semibold">Update</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile