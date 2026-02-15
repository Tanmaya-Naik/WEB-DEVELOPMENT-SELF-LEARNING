import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route} from "react-router-dom"


import Home from './Components/Home'
import Contact from './Components/Contact'
import Community from './Components/Community'
import Detail from './Components/Detail'
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Contact' element={<Contact></Contact>}></Route>
      <Route path='/Community' element={<Community></Community>}></Route>
      <Route path='/Detail' element={<Detail></Detail>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
