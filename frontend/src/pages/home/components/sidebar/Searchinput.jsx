import React from 'react'
import { FaSearch } from "react-icons/fa";

const Searchinput = () => {
  return (
    <form className='flex items-center bg-white rounded-full'>
        <input type='text' className='px-4 outline-none rounded-full' placeholder='search user'></input>
   <button type='submit' className='btn btn-circle bg-sky-700 hover:bg-gray-950'>
   <FaSearch />
   </button>
    </form>
  )
}

export default Searchinput