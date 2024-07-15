import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='w-screen h-{80px} z-10 bg-zinc-100 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                <ul className="hidden md:flex cursor-pointer">
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platform</li>
                <li>Pricing</li>
                </ul>
            </div>
            <form className='  w-[300px] relative'>
              <div className='relative'>
                <input type="Search" placeholder='Search' className='w-full p-4 rounded-full bg-slate-300 border-none ' />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-5 border-none rounded-full'>
                <AiOutlineSearch/>
                </button>
              </div>
            </form>

            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-2'>Sign Out</button>
            </div>
            </div>
    </div>

  )
}

export default Navbar