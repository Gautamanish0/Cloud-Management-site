import React from 'react';
import { FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import supporting from '../assets/image 2.avif';
const support = () => {
  return (
    <div className='w-full h-screen mt-24'>
     <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supporting} alt="/" />
     </div>

     <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className=' px-4 py-12 '>
            <h2 className=' text-3xl pt-8  text-slate-400 uppercase text-center'>support</h2>

            <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
            <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae perferendis facilis doloribus ab unde. Aliquam officia quas dicta corrupti voluptatem?</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8 '>
                        <FaPhoneAlt className='w-16 p-4  rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'> Sales</h3>
                        <p className='text-gray-800 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, qui.</p>
                    </div>
                    <div className=' pl-8 py-4 '>
                        <p className='flex items-center'>Contact Us <FaLongArrowAltRight className='w-5 ml-2 '/> </p>
                    </div>
                    </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8 '>
                        < FcOnlineSupport className='w-16 p-4  text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-800 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, qui.</p>
                    </div>
                    <div className='pl-8 py-4 '>
                        <p className='flex items-center '>Contact Us <FaLongArrowAltRight className='w-5 ml-2 '/> </p>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8 '>
                        < FaMicrochip className='w-16 p-4 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Media Inqueries</h3>
                        <p className='text-gray-800 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, qui.</p>
                    </div>
                    <div className=' pl-8 py-4 '>
                        <p className='flex items-center'>Contact Us <FaLongArrowAltRight className='w-5 ml-2 '/> </p>
                    </div>
                </div>
                
            </div>
     </div>
    </div>
  )
}

export default support