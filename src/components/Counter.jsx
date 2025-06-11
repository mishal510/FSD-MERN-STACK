import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[m,setm]=useState(0)

    const increament=() =>{
        setm(m+1)
    }
   const decreament=() =>{
    setm(m-1)
   } 
  return (
    <div>
    <h2>count is {m}</h2>
    <Button variant="contained"onClick={increament}>ADD</Button>
    <Button variant='contained'onClick={decreament}>sub</Button>
    </div>
  )
}

export default Counter