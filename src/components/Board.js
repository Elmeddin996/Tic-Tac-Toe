import React from 'react'
import { Box } from './Box'
import { useAppContext } from '../context/BoxContext'

export const Board = () => {
  const {board,handleBoxClick}= useAppContext();
  return (
    <div className='board'>
    {board.map((value,idx)=>{
      return <Box value={value} onClick={() => value === null &&handleBoxClick(idx)}/>
    })}
    </div>
  )
}
