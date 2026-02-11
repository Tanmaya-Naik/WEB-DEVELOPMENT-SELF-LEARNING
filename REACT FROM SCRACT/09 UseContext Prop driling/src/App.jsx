import { useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

function App() {

  //we lift he state count from the counter component to this 
  const [counter,setCounter]= useState(0);
  

  return (
    <>
     <Header counter={counter}/>
     <Body counter={counter} setCounter={setCounter}/>
     <Footer/>
    </>
  )
}

export default App
