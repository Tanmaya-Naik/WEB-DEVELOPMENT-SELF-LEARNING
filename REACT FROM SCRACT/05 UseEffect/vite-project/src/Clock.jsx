import { useEffect, useState } from "react";


function Clock(){

    const [time,setTime] = useState(new Date().toLocaleTimeString());
    const [show,setShow] = useState(true);

    useEffect(()=>{
        if(!show){
            return;
        }

        const setIntervalId = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);

        return ()=>{
            clearInterval(setIntervalId);
        }
    },[show])  //USEEFFECT HOOK ONLY RETURN EITHER OF THESE TWO 1- IT RETURN NOTHIGN OR 2- IT RETURN A CALLBACK


    return ( 
        <>
        <button onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
        {show && <h1>Current Time: {time}</h1>}
        </>
    )
}

export default Clock;




//JO PRIMITIVE DATATYPE HAIN WO VALUE K BASE MAIN COMPARE HONGE OR JO NON PRIMITIVE HAIN WO REFERENCE K BASE MAIN COMPARE HONGE LIKE OBJECT ARRAY 

//LETS LEARN KEY 

/*
Key: children(Dynamic child)
key:unique(index number mat dena)


*/


function List(){
    const [foodItems,setFood] = useState(["Apple","orange","Banana"]);
}