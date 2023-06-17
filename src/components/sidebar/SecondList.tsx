import Image from 'next/image';
import React, { useState } from 'react';

type ListObject = {
    id: number,
    src: string,
    title: string,
}

interface Props {
    list: ListObject[]
}

const SecondList = ({list}:Props) => {
    const [hoveredItemId, setHoveredItemId] = useState<number | null >(null);
  return (
    <div className="my-4 w-full">
    <ul className="flex flex-col w-full px-4 text-sm">
      {list.map((item, idx) => {
        return (
          <div key={idx}>
            <li
              key={item.id}
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
              className={`flex justify-between items-center w-full px-2 py-4 cursor-pointer text-[#787486] rounded ${
                hoveredItemId === item.id && "text-black bg-[#5030e514]"
              }`}
            >
              <div className="flex justify-start space-x-2 items-center w-10/12">
                <Image src={item.src} alt="" width={8} height={8} />
                <span>{item.title}</span>
              </div>
              <div
                className={`${
                  hoveredItemId === item.id && "opacity-100"
                } opacity-0 w-2/12`}
              >
                <Image
                  src="/sidebar/3dot.svg"
                  alt=""
                  width={16}
                  height={19}
                />
              </div>
            </li>
          </div>
        );
      })}
    </ul>
  </div>
  )
}

export default SecondList