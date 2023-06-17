import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import TodoCard from './TodoCard'

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number
}

const idToColumnText: {
    [key in TypedColumn] : string;
} = {
    "todo":"To Do",
    "onprogress":"On Progress",
    "done":"Done"
}

const Column = ({id, todos, index}: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
        {(provided) => (
            <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
             <Droppable droppableId={index.toString()} type="card">
                {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`p-2 rounded-2xl shadow-sm
                        ${snapshot.isDraggingOver ? "bg-green-200": "bg-white/50"}
                        `}
                      >
                            <h2>{idToColumnText[id]}
                            <span>{todos.length}</span>
                            </h2>

                            <div className='space-y-2'>
                                 {todos.map((todo, index)=>(
                                    <Draggable 
                                    key={todo.id}
                                    draggableId={todo.id}
                                    index={index}>

                                        {(provided) => (
                                            <TodoCard
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
}

export default Column