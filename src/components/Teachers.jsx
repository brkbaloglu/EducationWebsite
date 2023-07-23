import React, {useState} from 'react'
import {teachers} from '../data/data'
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoPython, BiLogoSass, BiLogoTailwindCss, BiLogoAngular, BiMath} from 'react-icons/bi'

function Teachers() {
  const [person, setPerson] =useState(teachers);
  return (
    <div className=''>
      <h1 className='text-center font-bold text-4xl my-20'>Our <span className='text-purple-700'>Teachers</span></h1>
      


<div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4 px-4'>
            {person.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name}  className='w-full h-[500px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <div>
                          <p className='text-purple-700 font-bold text-2xl'>{item.name}</p>
                          <p className='text-gray-700'>Country: {item.country}</p>
                          <p className='text-gray-700'>Phone: {item.phone}</p>
                          <p className='text-gray-700'>Age: {item.age}</p>
                          <p className='text-gray-700'>E-mail: {item.email}</p>
                        </div>
                        <p className='text-purple-700 font-bold flex items-end'>{item.languages}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Teachers

