// ChatDashbord component
import React, { useEffect, useState } from 'react';
import Chatts from './Chatts';
import './ChatDashbord.css'
import axios from 'axios';

const ChatDashbord = () => {
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
    <div className="min-h-[400px] max-h-[400px] m overflow-y-auto scrollbar">
      <Chatts/>
    </div>
  );
};

export default ChatDashbord;
