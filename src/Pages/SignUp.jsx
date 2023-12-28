
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data)

      if (data.success === false) {
        setLoading(false)
        setError(data.message);
        return;
      }
      setLoading(false)
      // setFormData({username:"",email:"",password:" " })  //try to autoclean form 
      navigate('/sign_in')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  return (
    <div className='max-w-sm mx-auto'>
      <h1 className='text-3xl text-slate-900 text-center font-bold my-9'>SignUp</h1>
      <form onSubmit={handleSubmit} className='p-16 bg-slate-300 shadow-2xl rounded-lg'>
        <div className='flex flex-col gap-5'>
          <input type="text" id="username" placeholder='Username' className='py-1 px-3 outline-none rounded-md' onChange={handleChange} />
          <input type="email" id="email" placeholder='email' className='py-1 px-3 outline-none rounded-md' onChange={handleChange} />
          <input type="password" id="password" placeholder='password' className='py-1 px-3 outline-none rounded-md' onChange={handleChange} />
          <input type="submit" value={loading ? "Loading..." : "Sign Up"} className='bg-orange-600 py-2 text-white rounded-md hover:opacity-80' />
          <input type="submit" value="Sign Up with Google" className='bg-blue-600 py-2 text-white rounded-md hover:opacity-80' />
          <a href="/sign_in">already have an Account ? <strong>Sign In</strong></a>
          {
            error && <p className='text-red-500 mt-5 text-center'>{error}</p>
          }
        </div>
      </form>

    </div>
  )
}

export default SignUp;
