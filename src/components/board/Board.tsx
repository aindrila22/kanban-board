import React, { useEffect } from 'react'
import Header from './Header'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useBoardStore } from '@/store/BoardStore';

const Board = () => {
   const [board, getBoard] = useBoardStore((state)=> [
    state.board,
    state.getBoard 
  ]);
 
   useEffect(() => {
         getBoard()
   }, [getBoard]);


   console.log(board)


  return (
    <h1>hello</h1>
    )
  }
  
{/* <DragDropContext>
    <Droppable droppableId='board' direction='horizontal' type='column'>
      {(provided)=>(
        <div>
            
        </div>
      )}
    </Droppable>
</DragDropContext> */}

export default Board