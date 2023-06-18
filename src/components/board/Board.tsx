import React, { useEffect } from 'react'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { useBoardStore } from '@/store/BoardStore';
import Column from './Column';

const Board = () => {
   const [board, getBoard] = useBoardStore((state)=> [
    state.board,
    state.getBoard 
  ]);
 
   useEffect(() => {
         getBoard()
   }, [getBoard]);


   const handleOnDragEnd = (result: DropResult) => {
     
   }
console.log(board)

  return (
      <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="board" direction="horizontal" type="column">
            {(provided) => (
              <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-start max-w-7xl px-10 mx-auto"
              {...provided.droppableProps}
              ref={provided.innerRef}
              >
                {
                  Array.from(board.columns.entries()).map(([id, column], index) => (
                    <Column key={id} id={column.id} todos={column.todos} index={index}/>
                  ))
                }  
              </div>
            )}
          </Droppable>
      </DragDropContext> 
    )
  }
  
export default Board