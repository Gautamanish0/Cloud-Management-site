import React from 'react';
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import image from '../assets/cyber.png';
const Hero = () => {
  return (
    <div className='w-full h-screen  flex flex-col justify-between '>
        <div className='grid md:grid-cols-2  m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-2xl '> Revolutionizing Cloud Management</p>
            <h1 className='py-3 text-5xl md:text-6xl font-bold'>Cloud  < ReactTyped className='md:text-6xl sm:text-5xl text-10xl font-bold md:pl-4 pl-2 text-gray-400 ' strings={['Management']}
        typeSpeed={200}
        backSpeed={150}
        loop />                       </h1>
            <p className='text-2xl'>Empowering Your Business with Advanced Cloud Solutions  </p>
            
            <button className='py-3 mt-2  px-6  sm:v-[60%]'>Explore Our Solutions</button>
            </div>
            <div >
                <img className='w-full ' src={image} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[800px] bottom-[-10%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-slate-50 border-slate-300 rounded-xl text-center shadow-xl hover:scale-105 duration-300 ' >
                <p className='font-bold text-2xl  '> Our Services</p>

                <div className='flex justify-between flex-wrap px-4'> 

                 <p className=' flex text-xl px-4 py-2 cursor-pointer'><AiOutlineSecurityScan className=' h-6' /> App Security</p>

                 <p className=' flex text-xl px-4 py-2 cursor-pointer'><RiDashboardFill className=' h-6'/>Dashboard Design</p>

                <p className=' flex text-xl px-4 py-2 cursor-pointer'> <FaDatabase className=' h-6'/> Cloud Data</p>
                
                <p className=' flex text-xl px-4 py-2 cursor-pointer'> <TbApi className=' h-6' />Api Integration</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero