import { useEffect, useState } from "react";


function Debounce(){

    const [inputdata, Setinputdata] = useState('');

    useEffect(()=>{
        const timerid = setTimeout(()=>{
            if(inputdata){
                console.log("input data is not chnage in the 500ms so your api is ready to call: ",inputdata);
            }
        },2500)

        return ()=>{
            clearTimeout(timerid);
        }
    },[inputdata]);


    const handleChange = (e)=>{
        Setinputdata(e.target.value);
    }

    return (
        <>
        <input type="text" value={inputdata} onChange={handleChange} placeholder="write here something" />
        </>
    )
}

export default Debounce;
