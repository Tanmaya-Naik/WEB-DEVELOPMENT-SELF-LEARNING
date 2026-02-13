import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThemeWrap from './Componenets/Theme';
import CharCount from './Componenets/CharCount';

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  return (
    <>
    <ThemeWrap dark={dark}>
      <button onClick={()=>setDark(prev=>!prev)}>Toggle Theme</button>

      <h1>Hello Tanu bro</h1>
      <h2>i Am your shubhrata</h2>
      <CharCount/>
    </ThemeWrap>
    </>
  )
}

export default App;
