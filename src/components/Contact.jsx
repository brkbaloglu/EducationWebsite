import React from 'react'

function Contact() {
  return (
    <div className='bg-purple-700 p-2 mt-8'>
      <h1 className='text-center font-bold text-5xl my-10'>Contact <span className='text-white'>Us</span></h1>
      <form action="" className='flex flex-col items-center justify-center '>
        <input type="text" name="" placeholder='Enter Your Name' id="" className='w-[500px] my-2 h-[40px] rounded-xl p-2 placeholder:text-purple-700'/>
        <input type="email" name="" placeholder='Enter Your Email' id="" className='w-[500px] my-2 h-[40px] rounded-xl p-2 placeholder:text-purple-700'/>
        <input type="number" name="" placeholder='Enter Your Phone' id="" className='w-[500px] my-2 h-[40px] rounded-xl p-2 placeholder:text-purple-700'/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Enter Your Message' className='w-[500px] my-2 h-[200px] rounded-xl p-2 placeholder:text-purple-700 resize-none'></textarea>
        <button type="submit" className='my-10 border-2 py-2 px-4 rounded-xl border-white text-white hover:bg-white hover:text-purple-700'>Submit</button>
      </form>
    </div>
  )
}

export default Contact