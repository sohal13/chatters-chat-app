import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const Searchinput = () => {
   const [search ,setSearch] = useState();
    const handelSearch=(e)=>{
      setSearch(e.target.value)
    }
  return (
    <form className='flex items-center justify-between bg-white rounded-full'>
        <input value={search} id='search' onChange={handelSearch} type='text' className='px-4 outline-none rounded-full' placeholder='search user'></input>
   <button type='submit' className='btn btn-circle bg-sky-700 hover:bg-gray-950'>
   <FaSearch />
   </button>
    </form>
  )
}

export default Searchinput