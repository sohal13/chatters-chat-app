import React, { useEffect, useState } from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import { TiMessages } from "react-icons/ti";
import axios from 'axios';
import userConversation from '../../../../zustans/useConversation.js';
import { useAuth } from '../../../../context/AuthContext.jsx';
import { IoArrowBackSharp } from "react-icons/io5";

const MessageContainer = ({onBackUser}) => {

  const { selectedConversation,setSelectedConversation} = userConversation()
  const {authUser} = useAuth();

  const [chats , setChats] = useState(); 
  const [loading ,setLoading] = useState(false);
  const id = selectedConversation?._id
  useEffect(()=>{
    const getChats=async()=>{
      setLoading(true)
try {
  if(selectedConversation === null) return ("Waitting for id")
  const chat = await axios.get(`/api/message/${id}`)
  const data = chat.data;
  if(data.success === false){
    setLoading(false)
    console.log(data.message);
  }
  setLoading(false);
  setChats(data)
} catch (error) {
  setLoading(false)
  console.log(error);
}
    }
    getChats();
  },[selectedConversation])

  return (
    <div className='md:min-w-[500px] h-full flex flex-col px-2 py-2'>
      {/*Header*/}
      {selectedConversation === null ? (
    <div className='flex items-center justify-center w-full h-full'>
    <div className='px-4 text-center text-2xl text-gray-950 font-semibold flex flex-col items-center gap-2'>
      {console.log(authUser.username)}
      <p className="text-2xl">Welcome!!👋 {authUser.username}😉</p>
      <p className="text-lg">Select a chat to start messaging</p>
      <TiMessages className='text-6xl text-center'/>
    </div>
  </div>
  
    ) : (
      <>
        <div className='flex justify-between gap-1 bg-sky-600 md:px-2  rounded-lg h-10 md:h-12'>
          <div className='flex gap-2 md:justify-between items-center w-full'>
            <div className=' md:hidden ml-1 self-center'>
              <button onClick={()=>onBackUser(true)} className='bg-white rounded-full px-2 py-1 self-center'>
              <IoArrowBackSharp size={25}/>
              </button>
              </div>
              <div className='flex justify-between mr-2 gap-2'>
          <div className='self-center '>
            <img className='rounded-full w-6 h-6 md:w-10 md:h-10 cursor-pointer' src={selectedConversation?.profilepic}/>
          </div> 
            <span className='text-gray-950 self-center text-sm  md:text-xl font-bold'>{selectedConversation?.username}</span>
          </div> 
          </div>  

        </div>   
        <Messages/>
        <Messageinput/>
      </>
    )}
    </div>
  )
}

export default MessageContainer;


