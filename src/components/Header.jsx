import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className=' w-full bg-gray-400 shadow-xl py-4 '>
      <div className=' flex flex-wrap flex-row justify-between items-center gap-4 px-4 max-w-6xl mx-auto'>
        <Link to="/">
        <h1 className=' text-sm sm:text-xl font-semibold'>
          <span className='text-red-600'>Royal</span>
          <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>

        <form className='bg-zinc-100 py-1 px-5 rounded-lg flex justify-between items-center w-58  sm:w-72'>
          <input type="text" placeholder='Search...' className='bg-transparent outline-none' />
          <FaSearch className=''/>
        </form>

        <nav>
          <ul className='flex gap-10 font-semibold'>

            <li className='hidden sm:inline'>
              <NavLink to="/"
                className={({ isActive }) => ` duration-200 ${isActive ? 'text-orange-500' : 'text-slate-100'}`}>
                Home
              </NavLink>
            </li>
            <li className='hidden sm:inline'>
              <NavLink to="/about"
                className={({isActive}) => ` duration-200 ${isActive ? 'text-orange-500' : 'text-slate-100'}`}>
                About
              </NavLink>
            </li>



            <li>
              <NavLink to="/sign_in"
                className={({ isActive }) => `duration-200 ${isActive ? 'text-orange-500' : 'text-slate-100'}`}>
                Sign In
              </NavLink>
            </li>


          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header