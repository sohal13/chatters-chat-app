import React, { useEffect, useState } from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import { TiMessages } from "react-icons/ti";
import axios from 'axios';
import userConversation from '../../../../zustans/useConversation.js';
import { useAuth } from '../../../../context/AuthContext.jsx';

const MessageContainer = () => {

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
    <div className='md:min-w-[500px] flex flex-col px-2'>
      {/*Header*/}
     {!selectedConversation ? (
      <>
     <div className='flex items-center justify-center w-full h-full'>
  <div className='px-4 text-center sm:text-lg md:text-2xl text-gray-950 font-semibold flex flex-col items-center gap-2'>
    <p>Welcome!!👋 Sohal13😉</p>
    <p>Select a chat to start messaging</p>
    <TiMessages className='text-3xl md:text-6xl text-center'/>
  </div>
      </div>
     </>
     ) : (<>
       <div className='flex justify-between  gap-1 bg-sky-700 px-2 py-1 rounded-lg mb-2'>
       <div className='flex gap-2 justify-center items-center'>
         <span className='label-text text-xl'>To:</span>
         <span className='text-gray-950 text-xl font-bold'>{selectedConversation?.fullname}</span>
         </div>
         <div className=''>
         <img className='rounded-full w-10 h-10 cursor-pointer' src={authUser.profilepic}/>
         </div>   
       </div>   
       <Messages/>
       <Messageinput/>
       </>
     )
     }
    </div>
  )
}

export default MessageContainer;


