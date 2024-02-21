import axios from 'axios';
import React, { useState } from 'react'
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext';
import {toast} from 'react-toastify'

const Logout = () => {
const navigate = useNavigate();
const {authUser , setAuthUser} = useAuth();
const [loading , setLoading] = useState(false)
  const handelLogOut=async()=>{
    const confirmation = window.prompt("Type your 'username' to confirm logout:");
    console.log(confirmation);
    if (confirmation === authUser.username) {
    try {
      setLoading(true)
      const res = await axios.post('/api/auth/logout')
      const data = res.data;
      if(data.success === false){
        setLoading(false)
        console.log(data.message);
      }
      toast.info(data.message)
      localStorage.removeItem("chatters")
      setAuthUser(null);
      setLoading(false)
      navigate(`/login`)
    } catch (error) {
      setLoading(false)
      console.log(error);
      toast.error(error?.response?.data?.message)
    }
  }else{
    toast.info("LogOut Cancelled")
  }
}
  return (
    <div onClick={handelLogOut} className='mt-auto px-1 py-1 flex'>
        <BiLogOut size={25} className='hover:bg-red-600 w-10 cursor-pointer hover:text-white rounded-lg'/>
        <p className='text-sm py-1'>Logout</p>
    </div>
  )
}

export default Logout