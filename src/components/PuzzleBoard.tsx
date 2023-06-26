import { useSwitchPuzzle } from '../hooks/useSwitchPuzzle'
import Result from './Result'


export default function PuzzleBoard() {
  const puzzle_nums: number[] = Array.from({length:9}, (v,i) => i+1)
  const { dragStart, dragOver, dropEvent, isCorrect} = useSwitchPuzzle()
  // console.log(isCorrect)
  return (
    <div className='w-96 relative'>
      <div className={`flex bg-slate-400 w-96 flex-wrap duration-1000 ${isCorrect && '-translate-x-1/2 scale-110 pointer-events-none'}`} id='puzzle-board'>
        {
          puzzle_nums.map( (n:number) =>
          <div className={`bg-neutral-700 w-32 h-32 border border-neutral-500 flex justify-center items-center ${isCorrect && 'border-none'}`} key={n}
          draggable="true" onDragStart={isCorrect ? (e)=> {e.preventDefault()} : dragStart } onDragOver={dragOver} onDrop={dropEvent} id={`board-${n}`} >
            {/* <Puzzle index={n} outer={false}/> */}
          </div>)
        }
        {
          isCorrect &&
          <Result/>
        }
      </div>
    </div>
  )
}
