import axios from 'axios';
import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const SignUp = () => {

    const navigate = useNavigate();
    const {setAuthUser}=useAuth()


    const [inputdata, setinputData] = useState({});
    const [loading, setLoading] = useState(false);


    const handelInput = (e) => {
        setinputData({
            ...inputdata, [e.target.id]: e.target.value
        })
    }

    const selectGender = (selectedGender) => {
        setinputData((prevData) => ({
            ...prevData, gender: selectedGender === inputdata.gender ? '' : selectedGender // Uncheck if already checked
    }))
}

    const handelSubmit=async(e)=>{
        e.preventDefault();
        if(inputdata.password !== inputdata.conf_password.toLowerCase()) return toast.error("pssword dosent match");
        try {
            setLoading(true)
            const res =await axios.post(`/api/auth/signup`,inputdata)
            const data = res.data;
            if(data.success === false){
                setLoading(false)
                toast.error(data.message)
                console.log(data.message);
            }
            console.log(data);
            toast.success(data?.message)
            localStorage.setItem("chatters",JSON.stringify(data))
            setAuthUser(data)
            setLoading(false)
            navigate(`/login`)
        } catch (error) {
            setLoading(false)
            toast.error(error?.response?.data?.message)
            console.log(error.message);
        }
    }

    console.log(inputdata);
    return (
        <div className='flex flex-col items-center justify-center md:min-w-[400px] max-w-full mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backderop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-bold text-center text-gray-300'>SignUp
                    <span className='text-gray-950'> Chatters</span>
                </h1>
                <form onSubmit={handelSubmit} className='flex flex-col mt-2'>
                    <div>
                        <label className='label p-1'>
                            <span className='font-bold text-gray-950 text-xl label-text'>FullName</span>
                        </label>
                        <input id='fullname'
                            type='text'
                            onChange={handelInput}
                            required
                            placeholder='Enter FullName'
                            className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-1'>
                            <span className='font-bold text-gray-950 text-xl label-text'>UserName</span>
                        </label>
                        <input
                            id="username"
                            onChange={handelInput}
                            type='text'
                            placeholder='Enter UserName'
                            className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-1'>
                            <span className='font-bold text-gray-950 text-xl label-text'>Email</span>
                        </label>
                        <input id="email"
                            onChange={handelInput}
                            type='email'
                            placeholder='Enter Email'
                            className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-1'>
                            <span className='font-bold text-gray-950 text-xl label-text'>Password</span>
                        </label>
                        <input id="password"
                            onChange={handelInput}
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-1'>
                            <span className='font-bold text-gray-950 text-xl label-text'>Conf.Password</span>
                        </label>
                        <input id="conf_password"
                            onChange={handelInput}
                            type='text'
                            
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10' />
                    </div>
                    <div>
            <div id='gender' className="flex gap-2">
                <label className="cursor-pointer label flex gap-2">
                    <span className="label-text font-semibold text-gray-950">male</span>
                    <input
                        onChange={() => selectGender('male')}
                        checked={inputdata.gender === 'male'}
                        type="checkbox" className="checkbox checkbox-info" />
                </label>
                <label className="cursor-pointer label flex gap-2">
                    <span className="label-text font-semibold text-gray-950">female</span>
                    <input
                        onChange={() => selectGender('female')}
                        checked={inputdata.gender === 'female'}
                        type="checkbox" className="checkbox checkbox-info" />
                </label>
            </div>
        </div>
                    <button type='submit' className='mt-2 self-center w-auto px-2 py-1 bg-gray-950 text-lg text-white rounded-lg hover:scale-105 hover:bg-gray-900'>
                        {loading ? "Loading..." : "SignUp"}
                        </button>
                </form>
                <div className='pt-2'>
                    <p className='text-sm font-semibold text-gray-800'> Have an Acount ? <Link to={'/login'} ><span className='text-gray-950 font-bold underline cursor-pointer hover:text-green-950'>
                        logIn Now!!</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp