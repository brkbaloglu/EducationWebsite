import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoPython, BiLogoSass, BiLogoTailwindCss, BiLogoAngular, BiMath } from 'react-icons/bi';
function Courses() {
  
  // console.log(lessons)
  return (
    <div className='text-center p-6 bg-purple-700 text-white'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-center'>
          <AiFillHtml5/>
          <p>HTML5</p>
        </div>
        <div className='flex flex-col items-center'>
          <BiLogoCss3/>
          <p>CSS</p>
        </div>
        <div className='flex flex-col items-center'>
          <BiLogoJavascript/>
          <p>Javascript</p>
        </div>
        <div className='flex flex-col items-center'>
          <BiLogoReact/>
          <p>React</p>
        </div>
        <div className='flex flex-col items-center'>
          <BiLogoPython/>
          <p>Python</p>
        </div>
        <div className='flex flex-col items-center'>
          <BiLogoSass/>
          <p>SASS</p>
        </div>
        <div className='flex flex-col items-center'>
          <BiLogoTailwindCss/>
          <p>TailwindCss</p>
        </div>
        <div className='flex flex-col items-center'>
          <BiLogoAngular/>
          <p>Angular</p>
        </div>
        <div className='flex flex-col items-center'>
          <BiMath/>
          <p>Math</p>
        </div>
      </div>

    </div>
  )
}

export default Courses