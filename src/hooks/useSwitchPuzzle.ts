import { DragEvent, useState } from "react"

export const useSwitchPuzzle = () => {
  const [isCorrect, setIsCorrect] = useState(false)

  const dragStart = (e:DragEvent):void => {
    const target = e.target as HTMLImageElement
    const id:string = target.id

    if( id.includes('img')){
      e.dataTransfer.setData('id', id)
      e.dataTransfer.setDragImage(target , 50, 50) 
    }
  }

  const dragOver = (e:any):void => {
    e.preventDefault()
  }

  const dropEvent = (e:DragEvent):void => {
    // setState(1)
    e.preventDefault()
    const target = e.target as HTMLImageElement
    const id:string = target.id
    const dragStartId = e.dataTransfer.getData('id')
    const dragStartElement = document.getElementById(dragStartId) as HTMLElement

    if(dragStartId.includes('img')){
      const answer:number[] = [1,2,3,4,5,6,7,8,9]
      // 보드 또는 보드 밖 빈칸일 경우
      if( !id.includes('img') ){
        target.appendChild(dragStartElement)
      }
      else{
        // 이미지 바꾸기
        // console.log('outer or board')
        const dropElement = document.getElementById(id)?.parentElement as HTMLElement
        
        dragStartElement.parentElement?.appendChild(target)
        dropElement.appendChild(dragStartElement)
      }

      // 정답 측정
      const puzzleBoard = document.getElementById('puzzle-board') as HTMLDivElement
      const user_answer:number[] = []
      for( let i = 0; i<puzzleBoard.children.length; i++){
        if( puzzleBoard.childNodes[i].hasChildNodes() ){
          const first_id:string | undefined = puzzleBoard.children[i].firstElementChild?.id.split('-')[1]
          
          user_answer.push(Number(first_id))
        }
      }
      answer.every( (v, i) => v === user_answer[i]) && setIsCorrect(true)
    }
    
  }

  return {dragStart, dragOver, dropEvent, isCorrect}
}