import { useState } from "react";



function CharCount(){

    const [inputchar, SetInputchar] = useState("");

    let sz=inputchar.trim().length;
    

    return (
        <>
        <input type="text" value={inputchar} onChange={(e)=>SetInputchar(e.target.value)}/>
        <p>Character count: {sz}</p>
            <button disabled={sz === 0}>Submit</button>
        </>
    )
}

export default CharCount;