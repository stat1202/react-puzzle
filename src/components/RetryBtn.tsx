import React from 'react'

export default function RetryBtn() {
  return (
    <button className='bg-blue-600 px-20 py-2 text-white rounded-sm my-10 font-semibold 
    duration-300 hover:bg-blue-800 hover:scale-105' onClick={()=> window.location.reload()}>Retry</button>
  )
}
