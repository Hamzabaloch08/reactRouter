import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userId} = useParams()

  return (
    <div className='bg-gray-700 text-white p-5 text-center text-2xl'>User: {userId}</div>
  )
}

export default User