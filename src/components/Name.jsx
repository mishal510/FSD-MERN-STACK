import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const name = () => {
    var[name,setName]=useState("maazi")
    var[a,seta]=useState()

        
     
    const inputhandler=(e)=>{
         console.log(e.target.value)
         setName(e.target.value)
    }
         function buttonhandler() {
        seta(name)
    }
    
  return (
    <div>
         <h1>Welcome {a} </h1>
         <TextField label='Enter Name' variant='outlined' onChange={inputhandler}/><br /><br />
         <Button variant='contained'onClick={inputhandler}>ADD</Button>
    </div>
  )
}

export default name