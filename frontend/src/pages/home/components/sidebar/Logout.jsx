import React from 'react'
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  return (
    <div className='mt-auto px-1 py-1 flex'>
        <BiLogOut size={25} className='hover:bg-red-600 w-10 cursor-pointer hover:text-white rounded-lg'/>
        <p className='text-sm py-1'>Logout</p>
    </div>
  )
}

export default Logout