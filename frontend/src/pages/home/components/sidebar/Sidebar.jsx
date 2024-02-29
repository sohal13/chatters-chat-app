import React, { useEffect, useState } from 'react'
import Logout from './Logout'
import { FaSearch } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'
import userConversation from '../../../../zustans/useConversation'
import { useSocketContext } from '../../../../context/SocketContext'
import axios from 'axios'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useAuth } from '../../../../context/AuthContext'
import { toast } from 'react-toastify'

const Sidebar = ({ onSelectUser }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const { authUser } = useAuth()
    const { messages, selectedConversation, setSelectedConversation } = userConversation();
    const [chatUser, setchatUser] = useState([])
    const [selectedUserId, setSelectedUserId] = useState(null)
    const { onlineUser, socket } = useSocketContext()
    const [newMessageUsers, setNewMessageUsers] = useState('');
    const nowOnline = chatUser.map((user) => (user._id));

    //chats function
    const isOnline = nowOnline.map(userId => onlineUser.includes(userId));

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
                setLoading(false)
                setchatUser(data)
            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        }
        chatUserhandler();

    }, [messages])

    const handleConversationClick = (user) => {
        onSelectUser(user);
        setSelectedConversation(user);
        setSelectedUserId(user._id);
        setSearchUsersID(user._id)
        setNewMessageUsers('')
    }
    //------------------------------------------------

    //search bar functions 
    const [loading, setLoading] = useState(false)
    const [searchinput, setSearch] = useState('');
    const [searchUsers, setSearchUsers] = useState([])
    const [searchUsersID, setSearchUsersID] = useState([]);

    const handelSubmitSearch = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const search = await axios.get(`/api/user/search?search=${searchinput}`)
            const data = search.data
            if (data.success === false) {
                setLoading(false)
                console.log(data.message);
            }
            setLoading(false)
            if (data.length === 0) {
                toast.info("User Not Found")
            } else {
                setSearchUsers(data)
            }

        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

 
    const handelSearchBackButton = () => {
        setSearchUsers([])
        setSearch('')
    }

    
  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        setNewMessageUsers(newMessage)
    })
    return ()=> socket?.off("newMessage")
  },[socket,messages])

    //-----------------------------
    return (
        <div className='h-full w-auto px-1'>
            {/*search bar finish*/}
            <div className='flex justify-between gap-2'>
                <form onSubmit={handelSubmitSearch} className='w-auto flex items-center justify-between bg-white rounded-full '>
                    <input value={searchinput} onChange={(e) => setSearch(e.target.value)} type='text' className='px-4 w-auto bg-transparent outline-none rounded-full' placeholder='search user' />
                    <button type='submit' className='btn btn-circle bg-sky-700 hover:bg-gray-950'>
                        <FaSearch />
                    </button>
                </form>
                <img onClick={() => navigate(`/profile/${authUser._id}`)} src={authUser.profilepic} className='self-center h-12 w-12 hover:scale-110 cursor-pointer' />
            </div>
            <div className='divider px-3'></div>
            {/*search bar finish*/}
            {searchUsers?.length > 0 ? (
                <>
                    <div className="min-h-[70%] max-h-[80%] m overflow-y-auto scrollbar ">
                        <div className='w-auto'>
                            {searchUsers?.map((user, index) => (
                                <div key={user._id} >
                                    <div onClick={() => handleConversationClick(user)} key={user._id}
                                        className={`flex gap-3 items-center rounded p-2 py-1 cursor-pointer
                                ${searchUsersID === user?._id ? 'bg-sky-500' : ''}
                        `} >
                                        <div className={`avatar ${isOnline[index] ? 'online' : ''}`}>
                                            <div className="w-12 rounded-full">
                                                <img src={user.profilepic} alt='user.img' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col flex-1'>
                                            <p className='font-bold text-gray-950'>{user.username}</p>
                                        </div>
                                    </div>
                                    <div className='divider divide-solid px-3 h-[1px]'></div>
                                </div>

                            )

                            )}

                        </div>
                    </div>
                    <div className='mt-auto px-1 py-1 flex'>
                        <button onClick={handelSearchBackButton} className='bg-white rounded-full px-2 py-1 self-center'>
                            <IoArrowBackSharp size={25} />
                        </button>
                    </div>
                </>
            )
                : (<>
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
                                    {chatUser.map((user, index) => (
                                        < div key={user._id}>
                                            <div onClick={() => handleConversationClick(user)} key={user._id} className={`flex gap-3 items-center rounded p-2 py-1 cursor-pointer
                        ${selectedUserId === user?._id ? 'bg-sky-500' : ''
                                                } `}>
                                                <div className={`avatar ${isOnline[index] ? 'online' : ''}`}>
                                                    <div className="w-12 rounded-full">
                                                        <img src={user.profilepic} alt='user.img' />
                                                    </div>
                                                </div>
                                                <div className='flex flex-col flex-1'>
                                                    <p className='font-bold text-gray-950'>{user.username}</p>
                                                </div>
                                                <div>
                                                    {selectedConversation === null && newMessageUsers.reciverId === authUser._id  && newMessageUsers.senderId === user._id ? <div className="rounded-full bg-green-700 text-sm text-white px-[4px]">+1</div>:<></>}
                                                </div>
                                            </div>
                                            <div className='divider divide-solid px-3 h-[1px]'></div>
                                        </div>
                                    ))}
                                </>
                                )}
                        </div>
                    </div>
                    {/*logout function */}
                    <Logout />
                </>)}
        </div>
    )
}

export default Sidebar