import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userConversation from '../../../../zustans/useConversation.js'

const Chatts = () => {

    const navigate = useNavigate()

    const { selectedConversation, setSelectedConversation } = userConversation()
    const [chatUser, setchatUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedUserId, setSelectedUserId] = useState(null)

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
        setSelectedConversation(user);
        setSelectedUserId(user._id);   
}

    return (
        <div className='w-auto'>
            {chatUser.length === 0 ? (
                <>
                    <div className='font-bold items-center flex flex-col text-xl text-yellow-500'>
                        <h1>Why are you Alone!!🤔</h1>
                        <h1>Search username to chat</h1>
                    </div>
                </>) :
                (<>
                    {chatUser.map((user) => (
                        <div onClick={()=>handleConversationClick(user)} key={user._id} className={`flex gap-3 items-center rounded p-2 py-1 cursor-pointer
                        ${
                            selectedUserId === user?._id ? 'bg-sky-500' : ''
                        }
                        `}
>
                            <div className="avatar online">
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
    )
}

export default Chatts