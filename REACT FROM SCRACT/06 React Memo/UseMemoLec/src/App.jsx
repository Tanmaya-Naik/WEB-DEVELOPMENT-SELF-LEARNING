import { useCallback, useState } from 'react'
import Sum from './Sum'
import { useMemo } from 'react';

import Post from './Post';

function App() {
  const [count, setCount] = useState(0);
  const [number,setNumber]= useState(10000);



  // function CheckPrime(){
  //   let total=0;
  //   if(number>1){
  //     total++;
  //   }

  //   for(let i=3;i<=number;i++){
  //     total++;
  //     for(let j=2;j<i;j++){
  //       if(i%j==0){
  //         total--;
  //         break;
  //       }
  //     }
      
  //   }

  //   return total;
  // }



  //LETS LEARN ABOUT USEMEMO

    const prime=useMemo(()=>{
        let total=0;
        if(number>1){
          total++;
        }

        for(let i=3;i<=number;i++){
          total++;
          for(let j=2;j<i;j++){
            if(i%j==0){
              total--;
              break;
            }
          }
          
        }

        return total;
  },[number])


  //LETS LEARN ABOUT USECALLBACK HOOK    -->--->-->--> USEMEMO HOOK EK VALUE KO REMEMBER KAR TA HAI AND USECALLBACK HOOK EK FUNCTION KO ACROSS THE CODE REMEMBER KARTA HAI HUI NA BAAT SAMSAJH
  
  const handleClick = useCallback(()=>{
           console.log("Hello ji Handel Click", count)
  },[count]);

  const obj = useMemo(()=>{
    return {name:"Tanu",age:30};
  },[])
  
  console.log("App render");

  return (
    <>
       <h1>Counter: {count} </h1>
       <button onClick={()=> setCount(count+1)}>Increment</button>
       
       <h1>ur current number: {number} </h1>
       <button onClick={()=> setNumber(number+1)}>Increment the numberr val</button>
       <h3>Total Prime Number: {prime}</h3>
       <button onClick={handleClick}>Click</button>
       <Sum number={number}></Sum>
       <Post value={obj}></Post>
    </>
  ) 
}

export default App


//THERE IS A ERROR THAT IN EACH RE RENDER ALL OUR CHILDREN GOT CREATED AGAIN EVEN THE CHILDREN WHO ARE NOT REQUIRED TO CREATE AGAIN ARE ALSO CREATING AGIAN 
//SO TO REMOVE THAT PROBLEM WEE USE USEMEMO

//2nd problem --->
