type Props = {
  index:number,
  outer: boolean
}
const src = `${process.env.PUBLIC_URL}/images`

export default function Puzzle( {index, outer}:Props ) {
  // console.log(index)
  // const refPuzzle = useRef(null)
  return (
    <img src={`${src}/deer_${index}.jpg`} alt={`img-${index}`} key={index}
    className={`w-28 h-28 animate-scale-up`} id={`img-${index}`}/>
  )
}

