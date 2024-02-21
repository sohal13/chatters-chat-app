import React, { useEffect, useState } from 'react'
import Searchinput from './Searchinput'
import ChatDashbord from './ChatDashbrod'
import Logout from './Logout'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import userConversation from '../../../../zustans/useConversation'
import { useSocketContext } from '../../../../context/SocketContext'
import axios from 'axios'

const Sidebar = ({onSelectUser}) => {

  //search bar functions 
  const [search ,setSearch] = useState();
  const handelSearch=(e)=>{
    setSearch(e.target.value)
  }
  //-----------------------------
  //chats function
  const navigate = useNavigate()

    const { selectedConversation, setSelectedConversation } = userConversation();
    const [chatUser, setchatUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedUserId, setSelectedUserId] = useState(null)
    const {onlineUser} = useSocketContext()
   const nowOnline = chatUser.map(user => user._id);
   console.log(nowOnline);
   const isOnline = nowOnline.map(userId => onlineUser.includes(userId));
   console.log(isOnline);
    useEffect(() => {
        const chatUserhandler = async () => {
            try {
                setLoading(true)
                const chatters = await axios.get(`/api/user/currentChatters`)
                const data = chatters.data;
                if (data.success === false) {
                    setLoading(false)
                    console.log(data.message);
                }
                setchatUser(data)
            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        }
        chatUserhandler();
    }, [])



   const handleConversationClick = (user) => {
        onSelectUser(user);
        setSelectedConversation(user);
        setSelectedUserId(user._id);
   }
   //------------------------------------------------
console.log(chatUser);
  return (
    <div className='h-full w-auto'>
        <form className='w-auto flex items-center justify-between bg-white rounded-full'>
        <input value={search} id='search' onChange={handelSearch} type='text' className='px-4 w-auto outline-none rounded-full' placeholder='search user'></input>
   <button type='submit' className='btn btn-circle bg-sky-700 hover:bg-gray-950'>
   <FaSearch />
   </button>
    </form>
    {/*search bar finish*/}

      <div className='divider px-3'></div>
      <div className="min-h-[70%] max-h-[80%] m overflow-y-auto scrollbar ">
      <div className='w-auto'>
            {chatUser.length === 0 ? (
                <>
                    <div className='font-bold items-center flex flex-col text-xl text-yellow-500'>
                        <h1>Why are you Alone!!🤔</h1>
                        <h1>Search username to chat</h1>
                    </div>
                </>) :
                (<>
                    {chatUser.map((user,index) => (
                        <div onClick={()=>handleConversationClick(user)} key={user._id} className={`flex gap-3 items-center rounded p-2 py-1 cursor-pointer
                        ${
                            selectedUserId === user?._id ? 'bg-sky-500' : ''
                        }
                        `}
>
                            <div className={`avatar ${isOnline[index] ? 'online':''}`}>
                                <div className="w-12 rounded-full">
                                    <img src={user.profilepic} alt='user.img' />
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <p className='font-bold text-gray-950'>{user.username}</p>
                            </div>
                        </div>
                    ))}
                </>
                )}
        </div>
    </div>  
    {/*logout function */}
       <Logout/>
    </div>        
  )
}

export default Sidebar