import React from 'react'
import axios from 'axios'

async function page() {
    const userData = await getUserDetails()
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>
                        <strong>Name:</strong> {userData?.name}
                    </div>

                    <div>
                        <strong>Email:</strong> {userData?.email}
                    </div>
                </div>
            </div>
        </div>
    )
}

async function getUserDetails() {
    const response = axios.get('http://localhost:3000/api/user').then((res) => {
        return res.data
    })
    return response
}

export default page