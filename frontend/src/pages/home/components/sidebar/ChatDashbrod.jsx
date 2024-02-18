// ChatDashbord component
import React from 'react';
import Chatts from './Chatts';
import './ChatDashbord.css'

const ChatDashbord = () => {
  // Assuming users is an array containing user data
  const users = [/* Array of user data */];

  return (
    <div className="max-h-[410px] overflow-y-auto scrollbar">
      {/*users.map(user => (
        // Render user component here
        <div key={user.id}>{}</div>
      ))*/}
      <Chatts/>
      <Chatts/>
      <Chatts/>
      <Chatts/>
      <Chatts/>
      <Chatts/>
      <Chatts/>
      <Chatts/>
      <Chatts/>
      <Chatts/>
      <Chatts/>
      <Chatts/>
      <Chatts/>

    </div>
  );
};

export default ChatDashbord;
