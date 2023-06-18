"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
  todo: Todo,
  index: number,
  id: TypedColumn,
  innerRef: (element: HTMLElement | null) => void,
  draggableProps: DraggableProvidedDraggableProps,
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined,
};

const TodoCard = ({
  todo,
  index,
  id,
  innerRef,
  dragHandleProps,
  draggableProps,
}: Props) => {
  const [background, setBackground] = useState<string>("");

  useEffect(() => {
    if (todo.priority === "low") {
      setBackground("bg-orange-50 text-orange-600");
    } else if (todo.priority === "high") {
      setBackground("bg-red-50 text-red-600");
    } else {
      setBackground("bg-green-50 text-green-600");
    }
  }, [todo]);

  return (
    <div key={index}
      className="bg-white p-3 space-y-2 drop-shadow-sm w-full rounded-lg h-full max-w-[314px] border-2 border-[#F5F5F5]"
      {...dragHandleProps}
      {...draggableProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center w-full">
        <div className={`${background} font-medium text-xs px-2 py-1 rounded`}>
          {todo.priority}
        </div>
        <div>
          <Image src="/sidebar/3dot.svg" width={16} height={19} alt="" />
        </div>
      </div>
      <div className="text-lg font-semibold">{todo.title}</div>
      {todo.description && (
        <div className="text-xs font-normal my-1">{todo.description}</div>
      )}
      {todo.images?.length! > 0 && (
        <div
          className={`grid ${
            todo.images?.length === 1 ? "grid-cols-1" : "grid-cols-2"
          } place-items-center`}
        >
          {todo.images?.map((pic, idx) => (
            <div key={idx}>
              <Image
                src={pic.src}
                alt={pic.picId}
                className="w-full h-full rounded-lg"
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center">
          {todo.avatars?.map((avatar, idx) => (
            <Image
              src={avatar.src}
              alt={avatar.aId}
              key={avatar.aId}
              width={27}
              height={27}
              className="-mx-1"
            />
          ))}
        </div>
        <div className="flex justify-center items-end space-x-3 py-5 px-2">
          <div className="flex">
            <Image
              src="/board/comment.svg"
              alt="comment"
              width={14}
              height={14}
            />
            <span className="text-xs px-1 text-[#787486] font-medium">
              {todo.comments} comments
            </span>
          </div>
          <div className="flex">
            <Image src="/board/file.svg" alt="comment" width={14} height={14} />
            <span className="text-xs px-1 text-[#787486] font-medium">
              {todo.files} files
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
