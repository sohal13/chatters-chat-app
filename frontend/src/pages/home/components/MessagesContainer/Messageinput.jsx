import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import userConversation from '../../../../zustans/useConversation';
import axios from 'axios';

const Messageinput = () => {

  const [loading , setLoading]= useState(false);
  const {messages , setMessages , selectedConversation}=userConversation()
  const [sendData , setSnedData] = useState("")
  const id=selectedConversation?._id;
    const handelMessages=(e)=>{
      setSnedData(e.target.value)
    }

const hadelSubmit=async(e)=>{
  e.preventDefault();
  setLoading(true)
  try {
    const res = await axios.post(`/api/message/send/${id}`,{message:sendData})
    const data = res.data;
    if(data.success === false){
      setLoading(false)
      console.log(data.messages);
    }
    setLoading(false)
    setSnedData("")
    setMessages([...messages,data])
  } catch (error) {
    setLoading(false)
    console.log(error);
  }
}
  return (
    <form onSubmit={hadelSubmit} className=' rounded-full'>
        <div className='w-full rounded-full flex items-center bg-white'>
            <input value={sendData}  required onChange={handelMessages} id='message'  type='text ' className='w-full outline-none px-4 rounded-full'/>
           <button type='submit'>
            {loading ?<div className='loading loading-spinner'></div>:<IoSend size={25} className='text-sky-700 cursor-pointer rounded-full bg-gray-800 w-10 h-auto p-1'/>}
            </button>
        </div>
    </form>
  )
}

export default Messageinput