import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h3>Myapp</h3> &nbsp;
                <Link to="/Login">
                <Button variant='contained' color='secondary'>Login</Button>
                </Link>&nbsp;
                <Link to="/signup">
                <Button variant='contained' color='secondary'>Signup</Button>&nbsp; 
                </Link>&nbsp;
                <Link to="/N">
                <Button variant='contained' color='secondary'>Name</Button>&nbsp; 
                </Link>&nbsp;
                <Link to="/m">
                <Button variant='contained' color='secondary'>Counter</Button>&nbsp; 
                </Link>&nbsp;
                <Link to="/colour">
                <Button variant='contained' color='secondary'>select</Button>&nbsp; 
                </Link>&nbsp;
                <Link to="/user">
                <Button variant='contained' color='secondary'>User</Button>&nbsp; 
                </Link>&nbsp;
                <Link to="/P">
                <Button variant='contained' color='secondary'>Product</Button>&nbsp; 
                </Link>&nbsp;


            </Toolbar>
        </AppBar>
        <br /><br /><br />

    </div>
  )
}

export default Navbar