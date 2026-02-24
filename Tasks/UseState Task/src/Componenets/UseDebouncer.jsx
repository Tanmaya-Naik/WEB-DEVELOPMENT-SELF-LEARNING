import { useEffect, useState } from "react";



export default function UseDebouncer(value, delay){
   const [debounceValue, setDebounceValue] = useState('');

   useEffect(()=>{
    const timerid = setTimeout(()=>{
        setDebounceValue(value);
    },delay)

    return ()=>{
        clearTimeout(timerid);
    }
   },[value,delay])

   return debounceValue;
}