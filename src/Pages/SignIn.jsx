import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js'
import OAuth from '../components/OAuth.jsx';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data)

      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data))
      // setFormData({username:"",email:"",password:" " })  //try to autoclean form 
      navigate('/')
    } catch (error) {
      dispatch(signInFailure(error.message))
      // console.log(error)
    }
  }
  return (
    <div className='max-w-sm mx-auto'>
      <h1 className='text-3xl text-slate-900 text-center font-bold my-9'>SignIn</h1>
      <form onSubmit={handleSubmit} className='p-16 bg-slate-300 shadow-2xl rounded-lg'>
        <div className='flex flex-col gap-5'>
          <input type="email" id="email" placeholder='email' className='py-1 px-3 outline-none rounded-md' onChange={handleChange} />
          <input type="password" id="password" placeholder='password' className='py-1 px-3 outline-none rounded-md' onChange={handleChange} />
          <input type="submit" value={`${loading ? "Loading..." : "Sign In"}`} className='bg-orange-600 py-2 text-white rounded-md hover:opacity-80' />

          <OAuth />
        </div>
      </form>
      <a href="/sign_up">Don't have an Account ? <strong>Sign Up</strong></a>
      {
        error && <p className='text-red-500 mt-5 text-center'>{error.message}</p>
      }

    </div>
  )
}

export default SignIn
