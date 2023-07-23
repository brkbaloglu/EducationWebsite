import React from 'react'
import {AiFillFacebook, AiOutlineInstagram, AiFillTwitterSquare, AiOutlineWhatsApp, AiFillLinkedin} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'
function About() {
  return (
    <div className='flex items-center justify-between p-10 mt-10'>
        <img className='w-[700px] h-[400px]' src="https://i.hizliresim.com/hdwnqty.png" alt="" />
        <div className='p-6 h-[400px] w-[700px]'>
          <h1 className='text-purple-700 font-bold text-3xl mb-10'>About <span>Us</span></h1>
          <p className='leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit officiis officia, sed eius, fuga iste doloremque harum vel minima tempora atque itaque dolor mollitia asperiores libero tenetur reiciendis, impedit non ipsum corporis maxime doloribus optio? Dolore pariatur vero quasi dolorem facilis neque? Odit voluptatum voluptates modi voluptate et earum?</p>
          <div className='flex items-start mt-6'>
            <AiFillFacebook size={40} className='mx-1 text-purple-700 hover:bg-purple-700 hover:text-white p-1 rounded-xl cursor-pointer'/>
            <AiOutlineInstagram size={40} className='mx-1 text-purple-700 hover:bg-purple-700 hover:text-white p-1 rounded-xl cursor-pointer'/>
            <AiFillTwitterSquare size={40} className='mx-1 text-purple-700 hover:bg-purple-700 hover:text-white p-1 rounded-xl cursor-pointer'/>
            <AiOutlineWhatsApp size={40} className='mx-1 text-purple-700 hover:bg-purple-700 hover:text-white p-1 rounded-xl cursor-pointer'/>
            <BsPinterest size={40} className='mx-1 text-purple-700 hover:bg-purple-700 hover:text-white p-1 rounded-xl cursor-pointer'/>
            <AiFillLinkedin size={40} className='mx-1 text-purple-700 hover:bg-purple-700 hover:text-white p-1 rounded-xl cursor-pointer'/>
          </div>
        </div>
    </div>
  )
}

export default About