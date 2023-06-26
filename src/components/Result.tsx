import React, { useEffect, useState } from 'react'

export default function Result() {
  let [timer, setTimer] = useState(false)

  useEffect(() => {
    setTimeout( () => {setTimer(true)}, 1000)
  })
  return (
    <React.Fragment>
      {
      timer &&
      <h1 className={`w-full bg-black/70 text-white absolute top-1/2 -translate-y-1/2 text-center text-4xl font-bold animate-spread-center`}>
        Congratulation!
      </h1>
      }
    </React.Fragment>
  )
}
