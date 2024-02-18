import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import MessageContainer from './components/MessagesContainer/MessageContainer'

const Home = () => {
  return (
    <div className='flex justify-between md:min-w-[550px] sm:h-[450px] md:h-[550px] 
    p-2 rounded-xl shadow-lg bg-gray-400 
    bg-clip-padding backderop-filter backdrop-blur-lg bg-opacity-0'>
 <Sidebar/>
 <div className='hidden md:flex'>
 <MessageContainer/>
 </div>
 </div>


  )
}

export default Home