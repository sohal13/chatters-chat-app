import React from 'react'
import { Link } from 'react-router-dom'

const DefaultPage = () => {
  return (
    <div className='p-4 md:px-10 mb-10 flex justify-around flex-col'>
      <h1  className='text-3xl md:text-6xl text-black font-bold p-6'>
        <span className='md:text-white p-1'>Hey, what's up? </span>
        <span className='p-1'>Let's roll and start chatting,</span>
        <span className='text-white p-1'>Chatters!!</span>
        </h1>
        <div className='ml-6'>
        <Link to={`/login`}><button className="btn bg-slate-950 text-white text-xl w-1/4 self-center ">
            LogIn
        </button>
        </Link>
        </div>
  </div>
  )
}

export default DefaultPage