import React from 'react'

const Chatts = () => {
    return (
<div className='w-auto'>
        <div className='flex gap-3 items-center hover:bg-sky-600 rounded p-2 py-1 cursor-pointer'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='user.img' />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                    <p className='font-bold text-gray-600'>Sohal13</p>
            </div>
        </div>
        </div>
    )
}

export default Chatts