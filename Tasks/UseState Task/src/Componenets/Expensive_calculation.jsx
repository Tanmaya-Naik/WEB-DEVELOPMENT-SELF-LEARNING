import { useMemo } from "react";
import { useState } from "react";


const numbers = Array.from({length:10000}, () => {
    return  Math.floor(Math.random()*100000)
});


export default function ExpensiveCalculation(){

    const [search, setSearch] = useState("");

    const [count, setCount] =useState(0);

    //expensive op
    

    const filterSort =useMemo(()=>{
        console.time("filter sort starts");

        const result = numbers.filter((num)=> num.toString().includes(search))
    .sort((a,b) => a-b);

    console.timeEnd("filter sort starts");

    return result;

    },[search]) 



    return (
        <div>
            <h2>Expensive claclulation optimizzation</h2>

            <input type="text"
            placeholder="Searchc number..."
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
             />

             <button onClick={()=> setCount(count => count+1)}>Re-render {count}</button>

             <ul>{filterSort.slice(0,20).map((num,index)=>(
                <li key={index}>{num}</li>
             ))}
             </ul>
        </div>

    );

}