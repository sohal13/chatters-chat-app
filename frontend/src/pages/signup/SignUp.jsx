import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-full mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backderop-filter backdrop-blur-lg bg-opacity-0'>
<h1 className='text-3xl font-bold text-center text-gray-300'>SignUp 
<span className='text-gray-950'> Chatters</span>
</h1>
<form className='flex flex-col mt-2'>
    <div>
        <label className='label p-1'>
            <span className='font-bold text-gray-950 text-xl label-text'>FullName</span>
        </label>
        <input id='email' type='email' placeholder='Enter FullName' className='w-full input input-bordered h-10'/>
    </div>
    <div>
        <label className='label p-1'>
            <span className='font-bold text-gray-950 text-xl label-text'>UserName</span>
        </label>
        <input id="password" type='password' placeholder='Enter UserName' className='w-full input input-bordered h-10'/>
    </div>
    <div>
        <label className='label p-1'>
            <span className='font-bold text-gray-950 text-xl label-text'>Email</span>
        </label>
        <input id="password" type='password' placeholder='Enter Email' className='w-full input input-bordered h-10'/>
    </div>
    <div>
        <label className='label p-1'>
            <span className='font-bold text-gray-950 text-xl label-text'>Password</span>
        </label>
        <input id="password" type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
    </div>
    <div>
        <label className='label p-1'>
            <span className='font-bold text-gray-950 text-xl label-text'>Conf.Password</span>
        </label>
        <input id="password" type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
    </div>
    <div className="flex gap-2">
  <label className="cursor-pointer label flex gap-2">
    <span className="label-text font-semibold text-gray-950">male</span>
    <input type="checkbox"  className="checkbox checkbox-info" />
  </label>
  <label className="cursor-pointer label flex gap-2">
    <span className="label-text font-semibold text-gray-950">female</span>
    <input type="checkbox" className="checkbox checkbox-info" />
  </label>
</div>
    <button type='submit' className='mt-2 self-center w-auto px-2 py-1 bg-gray-950 text-lg text-white rounded-lg hover:scale-105 hover:bg-gray-900'>SignUp</button>
</form>
<div className='pt-2'>
<p className='text-sm font-semibold text-gray-800'> Have an Acount ? <span className='text-gray-950 font-bold underline cursor-pointer hover:text-green-950'>
    logIn Now!!</span>
</p>
</div>
    </div>
</div>
  )
}

export default SignUp