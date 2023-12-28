import React from 'react'

const SignUp = () => {
  return (
    <div className='max-w-sm mx-auto'>
      <h1 className='text-3xl text-slate-900 text-center font-bold my-9'>SignUp</h1>
        <form action="/signup" method='post' className='p-16 bg-slate-300 shadow-2xl rounded-lg'>
      <div className='flex flex-col gap-5'>
          <input type="text" name="" id="" placeholder='Username' className='py-1 px-3 outline-none rounded-md' />
          <input type="email" name="" id="" placeholder='email' className='py-1 px-3 outline-none rounded-md' />
          <input type="password" name="" id="" placeholder='password' className='py-1 px-3 outline-none rounded-md' />
          <input type="submit" value="Sign Up" className='bg-orange-600 py-2 text-white rounded-md hover:opacity-80'/>
          <input type="submit" value="Sign Up with Google" className='bg-blue-600 py-2 text-white rounded-md hover:opacity-80'/>
          <a href="/sign_in">already have an Account ? <strong>Sign In</strong></a>
      </div>
        </form>

    </div>
  )
}

export default SignUp
