import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import userConversation from '../../../../zustans/useConversation';
import { useAuth } from '../../../../context/AuthContext';

const Message = () => {

  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = userConversation()
  const {authUser} = useAuth()
  const id = selectedConversation?._id

  const leastMesageRef = useRef();
 useEffect(()=>{
  setTimeout(()=>{
leastMesageRef.current?.scrollIntoView({behavior:"smooth"})
  },100)
 },[messages])

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true)
      try {
        const get = await axios.get(`/api/message/${id}`)
        const data = await get.data;
        if (data.success === false) {
          setLoading(false)
          console.log(data.messages);
        }
        setLoading(false)
        setMessages(data)
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    }
    if (selectedConversation?._id) getMessages()
  }, [selectedConversation?._id, setMessages])
 
  return (
    <>
      {loading && (
        <div className="flex w-full h-full flex-col items-center justify-center gap-4 bg-transparent ">
          <div className="loading loading-spinner"></div>
        </div>
      )}
      {!loading && messages?.length === 0 && (
        <p className='text-center'>Send a message to start Conversation</p>
      )}
      {!loading && messages?.length > 0 && messages?.map((message) => (
       <div key={message?._id} ref={leastMesageRef}>
<div className={`chat ${message.senderId === authUser._id ? 'chat-end' : 'chat-start' }`}>
  <div className="chat-image avatar">
  </div>
  <div className={`chat-bubble ${message.senderId === authUser._id ? 'bg-sky-600' : '' }`}>{message?.message}</div>
  <div className="chat-footer text-[10px] opacity-80">
  {new Date(message?.createdAt).toLocaleDateString('en-IN')} {new Date(message?.createdAt).toLocaleTimeString('en-IN', {hour: 'numeric', minute: 'numeric'})}
  </div>
</div>
</div>
      ))}
    </>

  )
}

export default Message