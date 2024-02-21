// ChatDashbord component
import React, { useEffect, useState } from 'react';
import Chatts from './Chatts';
import './ChatDashbord.css'
import axios from 'axios';

const ChatDashbord = ({handleConversationClick}) => {
  const [loading , setLoading]=useState(false)
  const [constConversation ,setConversation] = useState([])
 

  useEffect(()=>{
    const getConversation =async ()=>{
        setLoading(true)
        try {
          const res = await axios.get(`/api/user`);
          const data = res.data;
          if(data.success === false){
            setLoading(false)
            console.log(data.message);
          }
          setLoading(false)
          setConversation(data)
        } catch (error) {
          setLoading(false)
          console.log(error);
        }
    }
    getConversation()
  },[])
  return (
    <div className="min-h-[70%] max-h-[80%] m overflow-y-auto scrollbar">
      <Chatts handleConversationClick={handleConversationClick} />
    </div>
  );
};

export default ChatDashbord;
