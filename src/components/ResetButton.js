import React from 'react'
import { useAppContext } from '../context/BoxContext'

export const ResetButton = () => {
const {resetBoard}=useAppContext()
  return (
    <button className='reset-btn' onClick={resetBoard}>Reset</button>
  )
}
