import { useState } from 'react';
import { useRef } from 'react';


//LETS CREATE A STOPWATCH: start, stop, reset

function App() {
      const [time,setTime] = useState(0);
      // let intervalId=null;  //hamesha null ja raha hai isiliye stop nehi ho raha so hame is previous intervalId ko hold kar k rakhna hai jo ki ham useRef k help se kar sakte hain 

      const intervalIdRef = useRef(null);  //learn what happend under the hood see last comment

      function handleStart(){

        if(intervalIdRef.current != null){
          return;
        }
         
        intervalIdRef.current = setInterval(()=>{
            setTime(time=>time+1)
        },1000);
      }

      function handleStop(){
        clearInterval(intervalIdRef.current);
        intervalIdRef.current=0;

      }

      function handleReset(){
        clearInterval(intervalIdRef.current);
        setTime(0);
      }

      return (
        <>
        <h1>StopWatch: {time}</h1>
        <div>
          <button onClick={handleStart}>Start: </button>
          <button onClick={handleStop}>End:</button>
          <button onClick={handleReset}>REset:</button>
        </div>
        </>
      )
  
}

export default App;


//USEREF EK OBJECT CREATE KARTA HAI JIS K ANDER EK PROPERTY HAI CURRENT WHICH IS INITLIAZE AS NULL
//when it re render the value inside useRef do not change but it does not get reassign in re render 
//ham current ko change kar sakte  hain lekin useRef sirf sirf sirf sirf ek baar hi create hota hai jitne baar hi re render ho

//EDGE CASE IF USER CLICK ON THE START MULTIPLE TIME THEN WHAT HAPPEND
//YES MULTIPLE TIMER START SIMULTANEOUSLY AND OUR WORKING TIMER CRAASH