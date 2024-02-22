import React from 'react'
import { useAuth } from '../../context/AuthContext'

const Profile = () => {
    const {authUser} = useAuth();
    return (
        <div className='flex flex-col items-center justify-center md:min-w-[400px] max-w-full mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backderop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-bold text-center text-gray-300'>Hii 
                    <span className='text-gray-950'> {authUser.fullname}</span>
                </h1>
            </div>
        </div>

    )
}

export default Profile