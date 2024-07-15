import React from 'react'


const About = () => {
  return (
      <div className='w-full my-32  '>
<div className='max-w-[1240px] mx-auto'>
  <div className=' text-center'>
    <h2 className='text-5xl font-bold'>Trusted By the Developers across Worldwide</h2>
    <p className='text-3xl py-6 text-gray-600'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim asperiores reiciendis nulla odit exercitationem laborum facere, dolore illum ipsum sint!</p>
  </div>
  <div className=' grid md:grid-cols-3 gap-1 px-2 text-center'>
    <div className='border py-8 rounded-xl shadow-xl'>
      <p className='text-6xl font-bold text-indigo-400'>100%</p>
      <p className='mt-4 text-black-400'>Completion</p>
    </div>
    <div className='border py-8 rounded-xl  shadow-xl'>
      <p className='text-6xl font-bold text-indigo-400'>24/7</p>
      <p className='mt-4 text-black-400'>Delivery</p>
    </div>
    <div className='border py-8 rounded-xl  shadow-xl'>
      <p className='text-6xl font-bold text-indigo-400'>100K</p>
      <p  className='mt-4 text-black-400'>Transactions</p>
    </div>
  </div>
</div>
      </div>
  )
}

export default About