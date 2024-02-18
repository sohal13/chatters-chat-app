import React from 'react'
import { IoSend } from "react-icons/io5";

const Messageinput = () => {
  return (
    <form className=' rounded-full'>
        <div className='w-full rounded-full flex items-center bg-white'>
            <input type='text ' className='w-full outline-none px-4 rounded-full'/>
            <IoSend size={25} className='text-sky-700 cursor-pointer rounded-full bg-gray-800 w-10 h-auto p-1'/>
        </div>
    </form>
  )
}

export default Messageinput