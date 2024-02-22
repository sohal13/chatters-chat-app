import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const Profile = () => {
    const { authUser } = useAuth();
    const [ updateData , setUpdateData ] = useState();


    const handelInput=(e)=>{
        setUpdateData({
            ...updateData,[e.target.id]:e.target.value
        })
    }
    console.log(updateData);
    return (
        <div className='flex flex-col items-center justify-center md:min-w-[400px] max-w-full mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backderop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-bold text-center text-white'>Profile
                    <form className='flex flex-col justify-center items-center'>
                        <div className='mt-4 p-1 text-black items-center flex flex-col'>
                            <img src={authUser.profilepic} className='h-14 w-14 items-center cursor-pointer' />
                            <input use className='hidden'/>
                            <label className='label p-1'>
                                <span className='font-bold text-green-900 text-[14px] text-center label-text'>update picture</span>
                            </label>
                        </div>
                        <div>
                            <label className='label p-1'>
                                <span className='font-bold text-gray-950 text-xl label-text'>FullName</span>
                            </label>
                            <input id='fullname'
                                type='text'
                                defaultValue={authUser?.fullname}
                                onChange={handelInput}
                                required
                                placeholder='Enter FullName'
                                className='w-full input text-black  input-bordered h-10' />
                        </div>
                        <div>
                            <label className='label p-1'>
                                <span className='font-bold text-gray-950 text-xl label-text'>UserName</span>
                            </label>
                            <input id='username'
                                type='text'
                                defaultValue={authUser.username}
                                onChange={handelInput}
                                required
                                placeholder='Enter FullName'
                                className='w-full input text-black input-bordered h-10' />
                        </div>
                        <div>
                            <label className='label p-1'>
                                <span className='font-bold text-gray-950 text-xl label-text'>Email</span>
                            </label>
                            <input id='email'
                                type='email'
                                defaultValue={authUser.email}
                                onChange={handelInput}
                                required
                                placeholder='Enter Email'
                                className='w-full input text-black input-bordered h-10' />
                        </div>
                        <h1 className='text-sm mt-2 underline text-red-100 cursor-pointer'>Reset Password ?</h1>
                        <div className='mt-4'>
                            <button type='submit' className='px-4 bg-sky-700 text-[20px] rounded-lg cursor-pointer hover:scale-105'>Update</button>
                        </div>

                    </form>
                </h1>
            </div>
        </div>

    )
}

export default Profile