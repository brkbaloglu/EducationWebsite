import React,{useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiOutlineHome, AiOutlineBook} from 'react-icons/ai'
import {BsFillCartFill, BsBookmark} from 'react-icons/bs'
import {HiOutlineAcademicCap} from 'react-icons/hi'
import {BiCommentDetail} from 'react-icons/bi'
import {MdOutlineContactSupport} from 'react-icons/md'

function Header() {

  const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1600] max-h-[150px] mx-auto flex justify-between items-center p-3'>
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
        <AiOutlineMenu className='text-purple-900 ml-4' size={30}/>
        </div>
        <div>
          <img className='hidden md:flex w-[150px] h-[150px] object-cover rounded-t-lg mx-6' src="https://i.hizliresim.com/czp121n.png" alt="" />
        </div>
        
      </div>
      <div className='flex items-center border-2  border-purple-700'>
      <input type="text" placeholder='Search Courses' className='w-[200px] sm:w-[400px] h-[50px] bg-white placeholder:text-purple-700 p-4  '/>
      <AiOutlineSearch size={20} className='mx-2 text-purple-900 rounded-lg  hover:text-white hover:bg-purple-800 w-[30px] h-[30px] cursor-pointer'/>

      </div>
      <div>
      <BsFillCartFill size={35} className='hidden md:flex mr-4 p-1 rounded-lg  text-purple-800 hover:text-white hover:bg-purple-800 cursor-pointer '/>
      </div>

      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 '></div> : ''}

      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 '  : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 ' }>
        <AiOutlineClose className='hover:rotate-180 duration-300 cursor-pointer absolute right-1 top-1' onClick={() => setNav(!nav)} size={30}/>
        <img src="../img/EdW.png" alt="" />
        <nav>
          <ul >
            <li className='flex items-center m-2 mx-4 mt-8 text-xl text-purple-700 hover:text-white hover:bg-purple-700 p-2 rounded-lg cursor-pointer  '><AiOutlineHome className='mr-3'/>Home</li>
            <li className='flex items-center m-2 mx-4 text-xl text-purple-700 hover:text-white hover:bg-purple-700 p-2 rounded-lg cursor-pointer  '><BsBookmark className='mr-3'/>About</li>
            <li className='flex items-center m-2 mx-4 text-xl text-purple-700 hover:text-white hover:bg-purple-700 p-2 rounded-lg cursor-pointer  '><AiOutlineBook className='mr-3'/>Courses</li>
            <li className='flex items-center m-2 mx-4 text-xl text-purple-700 hover:text-white hover:bg-purple-700 p-2 rounded-lg cursor-pointer  '><HiOutlineAcademicCap className='mr-3'/>Teachers</li>
            <li className='flex items-center m-2 mx-4 text-xl text-purple-700 hover:text-white hover:bg-purple-700 p-2 rounded-lg cursor-pointer  '><BiCommentDetail className='mr-3'/>Reviews</li>
            <li className='flex items-center m-2 mx-4 text-xl text-purple-700 hover:text-white hover:bg-purple-700 p-2 rounded-lg cursor-pointer  '><MdOutlineContactSupport className='mr-3'/>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
    
  )
}

export default Header