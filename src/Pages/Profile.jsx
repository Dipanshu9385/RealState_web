import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div className='max-w-lg  mx-auto my-10 py-7'>
      <h1 className='text-3xl text-blue-600 text-center font-bold'>Profile</h1>

      <form className='px-20  rounded-lg'>
        <div className='flex flex-col gap-5 pt-10'>
          <img src={currentUser.avatar} className='w-32 mb-6 rounded-full self-center cursor-pointer' alt="" />
          <input type="text" id='username' value={currentUser.username} className='py-1 px-3 outline-none rounded-md min-w-50 ' />
          <input type="email" id='email' value={currentUser.email} className='py-1 px-3 outline-none rounded-md min-w-50 ' />
          <input type="password" id='password' value={currentUser.password} className='py-1 px-3 outline-none rounded-md min-w-50 ' />
          <button className='py-2 px-3 bg-blue-600 text-white outline-none rounded-md min-w-50 '>Update</button>
        </div>
      </form>
      <div className='flex justify-between px-20 mt-2 font-semibold'>
        <span className='text-red-600 cursor-pointer'>account delete</span>
        <span className='text-red-600 cursor-pointer'>sign out</span>
      </div>
        
    </div>
  )
}

export default Profile
