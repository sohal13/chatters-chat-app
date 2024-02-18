import React from 'react'
import Searchinput from './Searchinput'
import ChatDashbord from './ChatDashbrod'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className='h-full'>
      <Searchinput/>
      <div className='divider px-3'></div>
      <ChatDashbord/>     
       <Logout/>
    </div>        
  )
}

export default Sidebar