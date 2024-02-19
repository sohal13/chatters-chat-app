import React, { useState } from 'react'
import Message from './Message'
import userConversation from '../../../../zustans/useConversation';

const Messages = () => {
  const [loading , setLoading] =  useState(false);
  const {messages }=userConversation();
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
      <Message/>
      </div>
  )
}

export default Messages