import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Name from './components/name'
import Counter from './components/Counter'
import Selected from './components/Selected'
import { Select } from '@mui/material'
import User from './components/User'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
         <Route path='/N' element={<Name/>}/>
         <Route path='/m' element={<Counter/>}/>
         <Route path='/colour'element={<select/>}/>
         <Route path='/user'element={<User/>}/>
         <Route path='/P'element={<Product/>}/>
      </Routes>
    </>  
  )
}

export default App
