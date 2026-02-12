import { useState,createContext } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

// export const CounterContext = createContext();

export const CartContext = createContext();


//LETS LEARN ABOUT CREATECONTEXT AND USECONTEXT HOOK WORK 
function App() {

  //we lift he state count from the counter component to this 
  // const [counter,setCounter]= useState(0);

  const [cartItem, setcartItem] = useState(0);
  

  return (
    <>
     {/* <CounterContext value={{counter,setCounter}}>   here we wrap up the component which can access the value of context so all the component inside it can access it */}

     <CartContext value={{cartItem, setcartItem}}>
     <Header/>
     <Body/>
     <Footer/>
     </CartContext>
     {/* </CounterContext> */}
    </>
  )
}

export default App;
