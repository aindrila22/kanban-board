import Image from 'next/image';
import React from 'react';

type ListObject = {
    id: number,
    icon: string,
    title: string,
}

interface Props {
    list: ListObject[]
}

const FirstList = ({list}:Props) => {
  return (
    <div className="my-6 w-full text-base">
    <ul className="flex flex-col space-y-5 w-full text-[#787486] px-4">
      {list.map((item, idx) => {
        return (
          <>
            <li
              key={item.id}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <Image src={item.icon} alt="" width={24} height={24} />
              <span>{item.title}</span>
            </li>
          </>
        );
      })}
    </ul>
  </div>
  )
}

export default FirstList