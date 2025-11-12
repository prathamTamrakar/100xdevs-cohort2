import React from 'react'

function Signin() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col border rounded p-4 '>
                <input className='border p-2 mb-4' type="text" placeholder='Username' />
                <input className='border p-2 mb-4' type="password" placeholder='password' />
                <div className='flex justify-center'>
                    <input className=' w-20 border p-2 mb-4 hover:bg-blue-500 ' type="button" value="Submit" />
                </div>
                
            </div>
        </div>
    )
}

export default Signin