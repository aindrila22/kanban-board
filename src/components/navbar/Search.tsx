import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className='w-[417px] h-[44px] bg-[#F5F5F5] flex justify-start items-center px-6 rounded-lg'>
        <Image src="/navbar/search-normal.svg" alt="search" className='mr-3' width={17} height={17}/>
        <input className='text-sm bg-[#F5F5F5] w-full outline-none' placeholder='Search for anything...' />
    </div>
  )
}

export default Search