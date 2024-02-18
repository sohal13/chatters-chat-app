import React from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noCharSelected = true;
  return (
    <div className='md:min-w-[500px] flex flex-col px-2'>
      {/*Header*/}
     {noCharSelected ? (
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
         <span className='text-gray-950 text-xl font-bold'>Aniqah13</span>
         </div>
         <div className=''>
         <img className='rounded-full w-10 h-10 cursor-pointer' src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'/>
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


