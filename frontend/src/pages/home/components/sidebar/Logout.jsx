import axios from 'axios';
import React, { useState } from 'react'
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext';

const Logout = () => {
const navigate = useNavigate();
const {setAuthUser} = useAuth();

const [loading , setLoading] = useState(false)
  const handelLogOut=async()=>{
    try {
      setLoading(true)
      const res = await axios.post('/api/auth/logout')
      const data = res.data;
      if(data.success === false){
        setLoading(false)
        console.log(data.message);
      }
      console.log(data);
      localStorage.removeItem("chatters")
      setAuthUser(null);
      setLoading(false)
      navigate(`/login`)
    } catch (error) {
      setLoading(false)
      console.log(error);
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