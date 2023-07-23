import React from 'react'
import {AiFillFacebook, AiOutlineInstagram, AiFillTwitterSquare, AiFillLinkedin, AiOutlineArrowRight, AiOutlineCopyrightCircle} from 'react-icons/ai'

function Footer() {
  return (
    <div className='mt-10'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
      <div className=" w-[400px] flex items-center justify-center flex-col ml-6 mr-4">
        <img src="https://i.hizliresim.com/czp121n.png" className='w-[300px] h-[300px]' alt="" />
      </div>
      <div className="flex items-center justify-center flex-col border-x-2 border-purple-700">
        <h5 className='text-2xl mb-8 text-purple-700 font-bold border-b-2 border-purple-700'>Follow Us</h5>
        <ul>
          <li className='flex items-center my-2 hover:scale-105 duration-300 cursor-pointer text-lg'><AiFillFacebook/>Facebook</li>
          <li className='flex items-center my-2 hover:scale-105 duration-300 cursor-pointer text-lg'><AiOutlineInstagram/>Instagram</li>
          <li className='flex items-center my-2 hover:scale-105 duration-300 cursor-pointer text-lg'><AiFillTwitterSquare/>Twitter</li>
          <li className='flex items-center my-2 hover:scale-105 duration-300 cursor-pointer text-lg'><AiFillLinkedin/>Linkedin</li>
        </ul>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h5 className='text-2xl mb-8 text-purple-700 font-bold border-b-2 border-purple-700'>Quick Links</h5>
        <ul>
          <li className='flex items-center my-2 hover:translate-x-2 duration-300 cursor-pointer text-lg'><AiOutlineArrowRight />Home</li>
          <li className='flex items-center my-2 hover:translate-x-2 duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>About</li>
          <li className='flex items-center my-2 hover:translate-x-2 duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Courses</li>
          <li className='flex items-center my-2 hover:translate-x-2 duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Teachers</li>
          <li className='flex items-center my-2 hover:translate-x-2 duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Reviews</li>
          <li className='flex items-center my-2 hover:translate-x-2 duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Contact</li>
        </ul>
      </div>
      </div>
      <div className='flex items-center pl-10 py-2 mt-8 mb-10 bg-purple-700'>
        <AiOutlineCopyrightCircle className='mx-2 text-white'/>
        <p className=' text-white'>Copyright 2023 | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer