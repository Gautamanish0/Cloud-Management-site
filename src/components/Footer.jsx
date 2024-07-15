import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 '>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'> Edu Hub</h1>
            <p className=' py-4'> Edu Hub is democratising education, making it accessible to all. Join the revolution, learn on Nepal's largest learning platform. </p>
       <div className='flex justify-between md:w(75%) my-6'> 
        <FaFacebookSquare size={30}/>
        <FaInstagram size={30}/>
        <FaGithubSquare size={30}/>
        <FaDribbbleSquare size={30}/>
        <FaTwitterSquare size={30}/>
        </div>
         </div>
         <div className='lg:col-span-2 flex justify-between mt-6'>
            <div >
                <h6 className=' font-bold text-gray-400  '>Company</h6>
                <ul>
                    <li className='py-2 text-sm  cursor-pointer' >About Us</li>
                    <li className='py-2 text-sm cursor-pointer' >Careers</li>
                    <li className='py-2 text-sm cursor-pointer' >Blogs</li>
                    <li className='py-2 text-sm cursor-pointer' >Privacy policy</li>
                    <li className='py-2 text-sm cursor-pointer' > Terms and conditions</li>
                    
                </ul>
            </div>
            <div >
                <h6 className=' font-bold text-gray-400  '>Help & Support</h6>
                <ul>
                    <li className='py-2 text-sm cursor-pointer' >User Guidelines</li>
                    <li className='py-2 text-sm cursor-pointer' >Site Map</li>
                    <li className='py-2 text-sm cursor-pointer' >Refund Policy</li>
                    <li className='py-2 text-sm cursor-pointer' >Takedown Policy</li>
                    <li className='py-2 text-sm cursor-pointer' >Grievance Redressal</li>
                    
                </ul>
            </div>
            <div >
                <h6 className=' font-bold text-gray-400  '>Popular Goals</h6>
                <ul>
                    <li className='py-2 text-sm cursor-pointer' >Lok Sewa</li>
                    <li className='py-2 text-sm cursor-pointer' >CEE Preparation</li>
                    <li className='py-2 text-sm cursor-pointer' >CMAT Preparation</li>
                    <li className='py-2 text-sm cursor-pointer' >MBBS Entrance</li>
                   
                </ul>
            </div>
            <div >
                <h6 className=' font-bold text-gray-400  '>Study Material</h6>
                <ul>
                    <li className='py-2 text-sm cursor-pointer' >CEE UG Study Material</li>
                    <li className='py-2 text-sm cursor-pointer' >Lok Sewa Study Material</li>
                    <li className='py-2 text-sm cursor-pointer' >JEE Study Material</li>
                    {/* <li className='py-2 text-sm' >Insig</li> */}
                    {/* <li></li> */}
                </ul>
            </div>
         </div>
         </div>
  )
}

export default Footer