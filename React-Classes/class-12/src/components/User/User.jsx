import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-green-500  m-3 shadow-xl text-white text-3xl'>User :{userid}</div>
  )
}

export default User
// Timing 44:00