import React from 'react'
import { useAppContext } from '../context/BoxContext'

export const ScoreBoard = () => {
    const {scores, xPlaying}=useAppContext();
    const {oScore,xScore}=scores;
  return (
    <div className='scoreboard'>
    <span className={`score x-score ${!xPlaying&&"inactive"}`}>X-{xScore}</span>
    <span className={`score o-score ${xPlaying&&"inactive"}`}>O-{oScore}</span>
    </div>
  )
}
