import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>Signup page</h1><br />
        <TextField label="Email id"variant="outlined" /><br /><br />
        <TextField label="password"variant="outlined" /><br /><br />
        <Button variant="outlined">Next</Button><br /><br /><br />
    </div>
  )
}

export default Signup