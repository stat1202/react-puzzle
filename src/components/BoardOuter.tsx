import Puzzle from './Puzzle'
import { useSwitchPuzzle } from '../hooks/useSwitchPuzzle'

// const src = `${process.env.PUBLIC_URL}/images`
export default function BoardOuter() {

  const random_index = new Set<number>()
  
  while(random_index.size < 9){
    random_index.add(Math.ceil(Math.random()*9))
  }

  
  const { dragStart, dragOver, dropEvent, isCorrect} = useSwitchPuzzle()

  return (
    <div className={`flex w-96 flex-wrap justify-between items-center mx-10`}>
      {
        Array.from(random_index).map( (n,i) =>
          <div className='bg-neutral-700 w-28 h-28 my-2 flex items-center justify-center' draggable="true" onDragStart={isCorrect ? (e)=> {e.preventDefault()} : dragStart } onDragOver={dragOver} onDrop={dropEvent} id={`outer-${i+1}`} key={i+1}>
            <Puzzle index={n} outer={true}/>
          </div>)
      }
    </div>
  )
}
