import Image from 'next/image'
import React from 'react'
import Search from './Search'

const Navbar = () => {
  return (
    <div className='w-full '>
      <div className='w-full flex justify-between items-start'>
        <div className='w-full h-[56px] px-6 mt-2'>
          <Search/>
        </div>
        <div className='w-full h-[56px] flex justify-center items-center mt-2'>
          <div className='flex justify-center items-center space-x-5 w-full'>
            <Image src="/navbar/calendar-2.svg" alt="calendar" className='cursor-pointer' width={20} height={20}/>
            <Image src="/navbar/message-question.svg" alt="message" className='cursor-pointer' width={20} height={20}/>
            <Image src="/navbar/notification.svg" alt="notification" className='cursor-pointer' width={20} height={20}/>
          </div>
          <div className='flex justify-center items-center w-full px-6'>
            <div className='text-end mr-3'>
              <span className='text-base'>Anima Agrawal</span><br/>
              <span className='text-sm text-[#787486]'>U.P, India</span>
            </div>
            <div className='flex ml-2'>
              <Image src="/navbar/Mask Group.svg" alt="calendar" className='cursor-pointer rounded-full' width={40} height={40}/>
              <Image src="/navbar/arrow-down.svg" alt="calendar" className='cursor-pointer ml-2' width={18} height={18}/>
            </div>
          </div>
        </div>
     </div>
     <hr/>
    </div>
  )
}

export default Navbar