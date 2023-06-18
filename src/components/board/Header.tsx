import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between justify-center sm:items-start items-center w-full max-w-7xl mx-auto p-10'>
        <div className='flex flex-col space-y-6'>
           <div className='flex justify-center items-center space-x-2'>
              <div className='sm:text-5xl text-4xl pr-2'>Mobile App</div>
              <Image src="/header/edit.svg" alt="calendar" className='cursor-pointer' width={28} height={28}/>
              <Image src="/header/link.svg" alt="calendar" className='cursor-pointer' width={28} height={28}/>
           </div>
           <div className='sm:flex hidden justify-start items-center space-x-4 pt-5'>
             <button className='sm:w-[122px] h-[40px] rounded-md text-[#787486] border border-[#787486]
              flex justify-center items-center p-2 space-x-2 text-base font-medium'>
               <Image src="/header/filter.svg" alt="filter" className='cursor-pointer' width={18} height={18}/>
                <span className='hidden sm:block'>Filter</span>
                <Image src="/header/arrowdown.svg" alt="arrow" className='cursor-pointer hidden sm:block' width={18} height={18}/>
             </button>
             <button className='sm:w-[122px] h-[40px] rounded-md text-[#787486] border border-[#787486]
              flex justify-center items-center p-2 space-x-2 text-base font-medium'>
               <Image src="/header/calendar.svg" alt="filter" className='cursor-pointer' width={18} height={18}/>
                <span className='hidden sm:block'>Today</span>
                <Image src="/header/arrowdown.svg" alt="arrow" className='cursor-pointer hidden sm:block' width={18} height={18}/>
             </button>
           </div>
        </div>
        <div className='flex flex-col space-y-6 mt-6 sm:mt-0'>
           <div className='flex justify-around items-center space-x-2'>
              <Image src="/header/addsquare.svg" alt="add" className='cursor-pointer' width={19} height={19}/>
              <div className='text-base font-medium text-[#5030E5]'>Invite</div>
              <Image src="/header/group.svg" alt="group" className='cursor-pointer' width={158} height={38}/>
           </div>
           <div className='flex justify-start items-center space-x-4 pt-5'>
           <button className=' h-[40px] rounded-md text-[#787486] border border-[#787486]
              flex sm:hidden justify-center items-center p-2 space-x-2 text-base font-medium'>
               <Image src="/header/filter.svg" alt="filter" className='cursor-pointer' width={18} height={18}/>
                <span className='hidden sm:block'>Filter</span>
                <Image src="/header/arrowdown.svg" alt="arrow" className='cursor-pointer hidden sm:block' width={18} height={18}/>
             </button>
             <button className='sm:w-[122px] h-[40px] rounded-md text-[#787486] border border-[#787486]
              flex sm:hidden justify-center items-center p-2 space-x-2 text-base font-medium'>
               <Image src="/header/calendar.svg" alt="filter" className='cursor-pointer' width={18} height={18}/>
                <span className='hidden sm:block'>Today</span>
                <Image src="/header/arrowdown.svg" alt="arrow" className='cursor-pointer hidden sm:block' width={18} height={18}/>
             </button>
             <button className='sm:w-[122px] h-[40px] rounded-md text-[#787486] border border-[#787486]
              flex justify-center items-center p-3 space-x-1 text-base font-medium'>
               <Image src="/header/user.svg" alt="share" className='cursor-pointer' width={18} height={18}/>
                <span className='hidden sm:block'>Share</span>
             </button>
             <Image src="/header/line.svg" alt="group" className='cursor-pointer' width={2} height={18}/>
             <Image src="/header/Group 614.svg" alt="group" className='cursor-pointer' width={40} height={40}/>
             <Image src="/header/Group 611.svg" alt="group" className='cursor-pointer' width={21} height={21}/>
           </div>
        </div>
    </div>
  )
}

export default Header