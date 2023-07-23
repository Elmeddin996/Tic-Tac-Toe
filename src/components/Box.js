import React from 'react'
import { useAppContext } from '../context/BoxContext';

export const Box = ({value, onClick}) => {
  const {gameOver,resetBoard}= useAppContext();
  const style =value ==="X"?"box x":"box o"
  return (
<>
<button className={style} onClick={gameOver?resetBoard: onClick}>{value}</button>
</>
  )
}
