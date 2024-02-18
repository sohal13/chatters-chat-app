import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center mix-w-full mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backderop-filter backdrop-blur-lg bg-opacity-0'>
    <h1 className='text-3xl font-bold text-center text-gray-300'>LogIn  
    <span className='text-gray-950'> Chatters</span>
    </h1>
    <form className='flex flex-col'>
        <div>
            <label className='label p-2'>
                <span className='font-bold text-gray-950 text-xl label-text'>UserName</span>
            </label>
            <input id='email' type='email' placeholder='Enter UserName' className='w-full input input-bordered h-10'/>
        </div>
        <div>
            <label className='label p-2'>
                <span className='font-bold text-gray-950 text-xl label-text'>Password</span>
            </label>
            <input id="password" type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
        </div>
        <button type='submit' className='mt-4 self-center w-auto px-2 py-1 bg-gray-950 text-lg text-white rounded-lg hover:scale-105 hover:bg-gray-900'>LogIn</button>
    </form>
    <div className='pt-2'>
    <p className='text-sm font-semibold text-gray-800'>Dont have an Acount ? <span className='text-gray-950 font-bold underline cursor-pointer hover:text-green-950'>
        Register Now!!</span>
    </p>
    <p className='text-sm font-semibold text-gray-800'>forgot password ? <span className='text-gray-950 font-bold underline cursor-pointer hover:text-green-950'>
        Click Me</span>
        </p>
    </div>
        </div>
    </div>
  )
}

export default Login