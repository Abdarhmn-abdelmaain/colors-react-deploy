import React, { useState } from 'react'

export default function App() {
  const [colors ,setColors] = useState([])

  const handle = () =>{
    const oldColor = [...colors]
    oldColor.push('#' + Math.trunc(Math.random() * 10000))
    setColors(oldColor)
  }
  return (
    <div className='mum'>
      <header className='text-center text-primary col-12'><h2>Welcome to the world of colors</h2></header>
      <button className=' text-danger bg-black col-4 fs-5' onClick={handle}>Add color</button>
      {colors.map((el,index) => {return(
        <button key={index} style={{backgroundColor:el}}>{el}</button>
      )})}

    </div>
  )
}


