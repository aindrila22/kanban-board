import React, { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";
import Image from "next/image";

type Props = {
  id: TypedColumn,
  todos: Todo[],
  index: number,
};

const idToColumnText: {
  [key in TypedColumn] : string;
} = {
  "todo":"To Do",
  "onprogress":"On Progress",
  "done":"Done"
}

const Column = ({ id, todos, index }: Props) => {
  const [bullet, setBullet] = useState<string>("");
  const [line, setLine] = useState<string>("");

  useEffect(() => {
    if (id === "todo") {
      setBullet("/board/bulletpurple.svg");
      setLine("bg-[#5030E5]");
    } else if (id === "onprogress") {
      setBullet("/sidebar/bulletorange.svg");
      setLine("bg-[#FFA500]");
    } else {
      setBullet("/sidebar/bulletgreen.svg");
      setLine("bg-[#8BC48A]");
    }
  }, [id]);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="max-w-[394px] w-full grid place-items-center bg-[#F5F5F5] rounded-xl py-4"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <div className="flex justify-start items-center space-x-2 w-full px-4 xl:px-1 ">
                  <Image src={bullet} alt="" width={8} height={8} />
                  <h2 className="lg:text-base text-sm">
                    {idToColumnText[id]}
                  </h2>
                  <div className="w-[24px] h-[24px] rounded-full bg-[#E0E0E0] text-[#625F6D] text-xs text-center pt-1">
                    {todos.length}
                  </div>
                  {id === "todo" && (
                    <div className="flex justify-end lg:w-8/12 w-7/12 items-end">
                      <Image
                        src="/board/add-square.svg"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                  )}
                </div>
                <hr className={`${line} h-[3px] w-full my-4`} />
                <div className={`space-y-4 py-2`}>
                  {todos.map((todo, index) => (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <TodoCard
                          snapshot={snapshot}
                          todo={todo}
                          index={index}
                          id={id}
                          innerRef={provided.innerRef}
                          draggableProps={provided.draggableProps}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;