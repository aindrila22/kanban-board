import Image from 'next/image'
import React from 'react'

const Thoughts = () => {
  return (
    <div className="relative w-full">
    <div className="w-[200px] h-[225px] bg-[#F5F5F5] p-4 text-black rounded-lg mx-auto flex flex-col justify-center items-center">
     <span className="text-sm font-semibold mx-auto py-3">Thoughts Time</span>
     <p className="text-xs font-normal text-center pb-3">We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
     <button className="w-[166px] h-[46px] bg-white text-sm font-medium">Write Message</button>
    </div>
    <div className="absolute -top-10 z-50 p-3 left-[35%] rounded-full bg-[#F5F5F5] ">
       <div className="bg-yellow-50 p-1 rounded-full">
       <Image src="/sidebar/lamp-on.svg" alt="" width={33} height={33} />
       </div>
    </div>
  </div>
  )
}

export default Thoughts