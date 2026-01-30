//LETS CREATE COUNTER BUTTON-->  
/*
HOOKS ARE NOTHING BUT POWERFUL FUNCTION
 */

import { useState } from "react";

export default function App(){
     
  let [count, setCount]= useState(0);   //--> THIS GIVES US A ARRAY WHICH CONTAIN THE VAL AND FUNCTION


  function increaseNum(){
    count++;
    setCount(count);
  }


    // function increaseNum(){
    //   count++;
       // const para=document.querySelector('p');
      // para.textContent=`Counter: ${count}`;   TO REMOVE THIS MANUAL WORK WE USE HOOK
    // }

    return (
      <>
      <p>Counter: {count}</p>
      <button onClick={increaseNum}>Increase</button>
      </>
    )
}


//if we just write a function and increase counter then it is not shown in the ui why
