import React, { useRef } from 'react'
import PuzzleBoard from '../../components/PuzzleBoard'
import RetryBtn from '../../components/RetryBtn'
import BoardOuter from '../../components/BoardOuter'


export const PuzzleGame = () => {

  const gameRef = useRef(null)
  return (
    <div className='grow flex flex-col justify-center items-center'>
      <h1 className='text-white font-bold text-4xl mb-10 relative left-5'>
        Puzzle Game
      </h1>
      <div className='flex' id='game-container'>
        <BoardOuter/>
        <PuzzleBoard/>
      </div>
      <RetryBtn/>
    </div>
  )
}
