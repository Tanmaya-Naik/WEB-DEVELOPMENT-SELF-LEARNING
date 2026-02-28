import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThemeWrap from './Componenets/Theme';
import CharCount from './Componenets/CharCount';
import Multiform from './Componenets/MultiForm';
import Debounce from './Componenets/Debounce';
import Autofocus from './Componenets/AutoFocus';
import StopWatch from './Componenets/Stopwatch';
import ExpensiveCalculation from './Componenets/Expensive_calculation';
import Parent from './Componenets/Child_rerender';

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  return (
    <>
    {/* <ThemeWrap dark={dark}>
      <button onClick={()=>setDark(prev=>!prev)}>Toggle Theme</button>

      <h1>Hello Tanu bro</h1>
      <h2>i Am your shubhrata</h2>
      <CharCount/>
      <Multiform/>
    </ThemeWrap> */}
    {/* <Debounce></Debounce>
    <Autofocus></Autofocus>
    <StopWatch></StopWatch> */}

    {/* <ExpensiveCalculation></ExpensiveCalculation> */}
    <Parent></Parent>
    </>
  )
}

export default App;
