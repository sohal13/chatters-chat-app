import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
import {toast} from 'react-toastify'
const Login = () => {

    const navigate = useNavigate();
    const {setAuthUser}=useAuth()

    const [inputData , setInputData] = useState({})
    const [loading, setLoading] = useState(false);

    const handelInput=(e)=>{
        setInputData({
            ...inputData,[e.target.id]:e.target.value
        })
    }
    console.log(inputData);
    const handelSubmit=async(e)=>{
        e.preventDefault();
        try {
            setLoading(true)
            const res = await axios.post(`/api/auth/login`,inputData)
            const data = res.data;
            if(data.success === false){
                setLoading(false)
                return console.log(data.message);    
            }
            toast.success(data.message)
            localStorage.setItem("chatters",JSON.stringify(data))
            setAuthUser(data)
           setLoading(false)
            navigate(`/`)
        } catch (error) {
            setLoading(false)
            toast.error(error?.response?.data?.message)
        }
    }
 
  return (
    <div className='flex flex-col items-center justify-center mix-w-full mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backderop-filter backdrop-blur-lg bg-opacity-0'>
    <h1 className='text-3xl font-bold text-center text-gray-300'>LogIn  
    <span className='text-gray-950'> Chatters</span>
    </h1>
    <form onSubmit={handelSubmit} className='flex flex-col'>
        <div>
            <label className='label p-2'>
                <span className='font-bold text-gray-950 text-xl label-text'>Email</span>
            </label>
            <input 
            id='email' 
            onChange={handelInput}
            type='email' 
            placeholder='Enter UserName' 
            required
            className='w-full input input-bordered h-10'
            />
        </div>
        <div>
            <label className='label p-2'>
                <span className='font-bold text-gray-950 text-xl label-text'>Password</span>
            </label>
            <input id="password" 
            onChange={handelInput}
            type='password' 
            placeholder='Enter Password' 
            className='w-full input input-bordered h-10'
            required
            />
        </div>
        <button type='submit' className='mt-4 self-center w-auto px-2 py-1 bg-gray-950 text-lg text-white rounded-lg hover:scale-105 hover:bg-gray-900'>{loading ? "Loading...":"LogIn"}</button>
    </form>
    <div className='pt-2'>
    <p className='text-sm font-semibold text-gray-800'>Dont have an Acount ? <Link to={'/signup'}><span className='text-gray-950 font-bold underline cursor-pointer hover:text-green-950'>
        Register Now!!</span></Link> 
    </p>
    <p className='text-sm font-semibold text-gray-800'>forgot password ? <Link to={'/signup'}><span className='text-gray-950 font-bold underline cursor-pointer hover:text-green-950'>
        Click Me</span></Link>
        </p>
    </div>
        </div>
    </div>
  )
}

export default Login