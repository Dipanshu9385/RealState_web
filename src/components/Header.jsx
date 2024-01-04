import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const { currentUser } = useSelector(state => state.user)
  return (
    <header className=' w-full bg-slate-300 shadow-xl py-4 '>
      <div className=' flex flex-wrap flex-row justify-between items-center gap-4 px-4 max-w-6xl mx-auto'>
        <Link to="/">
          <h1 className=' text-sm ss:text-sm font-semibold'>
            <span className='text-red-600'><span className='text-3xl font-serif'>R</span>oyal</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>

        <form className='bg-zinc-100 py-1 px-5 rounded-lg flex justify-between items-center w-60  ss:w-24 sm:w-32 lg:48'>
          <input type="text" placeholder='Search...' className='bg-transparent outline-none' />
          <FaSearch className='' />
        </form>

        <nav>
          <ul className='flex gap-10 font-semibold items-center'>

            {
              currentUser ? (
                <li className='ss:block sm:hidden'>
              <NavLink to="/"
                className={({ isActive }) => ` duration-200 ${isActive ? 'text-orange-500' : 'text-slate-900'}`}>
                Home
              </NavLink>
            </li>
              ): ""
            }
            {
              currentUser ? (
                <li className='ss:block sm:hidden'>
              <NavLink to="/about"
                className={({ isActive }) => ` duration-200 ${isActive ? 'text-orange-500' : 'text-slate-900'}`}>
                About
              </NavLink>
            </li>
              ): ""
            }
           
            <li>
              <NavLink to="/profile"
                className={({ isActive }) => `duration-200 ${isActive ? 'text-orange-500' : 'text-slate-900'}`}>
                {
                  currentUser ? <img src={currentUser.avatar} alt="Profile" className='w-10 rounded-full object-cover' /> : "Sign In"
                }

              </NavLink>
            </li>



          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
