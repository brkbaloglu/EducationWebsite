import React from 'react'
import {FaGraduationCap} from 'react-icons/fa'
import {GiTeacher} from 'react-icons/gi'
import {PiMedalFill} from 'react-icons/pi'

function Home() {
  return (
    <div>
      <div className='w-full h-[600px] text-white bg-gradient-to-r from-violet-500 to-fuchsia-500  bg-center bg-cover flex items-center justify-between flex-col'>
        <div className='mt-10 w-[800px] flex items-center justify-between flex-col'>
        <h3 className='font-bold text-4xl mb-10'>Learn Online From Home</h3>
        <p className='text-lg mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque accusamus consectetur tempore, ducimus placeat corporis sunt sit harum quaerat fuga.</p>
        <button className='bg-purple-700 text-white px-6 py-3 rounded-xl hover:bg-white hover:text-purple-700 hover:border-2 border-purple-700 '>Learn More</button>
        </div>
        <div className='flex items-center justify-between mb-20 mx-auto'>
          <div className='w-[400px] flex items-center justify-between flex-col mx-2 h-[200px] bg-white text-purple-700 p-4 rounded-xl'>
            <FaGraduationCap size={40}/>
            <h3 className='text-xl font-bold'>Trending Courses</h3>
            <p className='max-w-[300px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corrupti voluptate perspiciatis quam cum molestiae!</p>
          </div>

          <div className='w-[400px] flex items-center justify-between flex-col mx-2 h-[200px] bg-white text-purple-700 p-4 rounded-xl'>
            <GiTeacher size={40}/>
            <h3 className='text-xl font-bold'>Expert Teachers</h3>
            <p className='max-w-[300px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corrupti voluptate perspiciatis quam cum molestiae!</p>
          </div>

          <div className='w-[400px] flex items-center justify-between flex-col mx-2 h-[200px] bg-white text-purple-700 p-4 rounded-xl'>
            <PiMedalFill size={40}/>
            <h3 className='text-xl font-bold'>Certifications</h3>
            <p className='max-w-[300px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home