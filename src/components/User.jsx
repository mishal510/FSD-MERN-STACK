import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const User = () => {
    var[user,setUser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res.data)
        setUser(res.data)
    })
  return (
    <div>
<TableContainer>
    <Table>
        <TableHead>
          <TableRow>
             <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
            {user.map((val)=>{
                 return(
           <TableRow>
            <TableCell>{val.name}</TableCell>
            <TableCell>{val.email}</TableCell>
            <TableCell>{val.address.city}</TableCell>
         </TableRow>
        )
        })}
     </TableBody>
    </Table>
</TableContainer>

    </div>
  )
}

export default User