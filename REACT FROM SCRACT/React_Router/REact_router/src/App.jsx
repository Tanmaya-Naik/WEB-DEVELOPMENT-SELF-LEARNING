import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

import Home from './Components/Home'
import Contact from './Components/Contact'
import Community from './Components/Community'
import Detail from './Components/Detail'
import About from './Components/About'
import Zero from './Components/Zero'
import Customer from './Components/Customer'
import Service from './Components/Service'

function App() {
  
  return (
    <BrowserRouter>
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/Contact"}>Contact</Link>
      <Link to={"/Community"}>Community</Link>
      <Link to={"/Detail"}>Detail</Link>
      <Link to={"/About"}>About us</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Contact' element={<Contact></Contact>}></Route>
      <Route path='/Community' element={<Community></Community>}></Route>
      <Route path='/Detail' element={<Detail></Detail>}></Route>
      <Route path='/About' element={<About></About>}>
      <Route index element={<Zero></Zero>}></Route>

      <Route path='Customer' element={<Customer></Customer>}></Route>
      <Route path='Service' element={<Service></Service>}></Route>
      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
