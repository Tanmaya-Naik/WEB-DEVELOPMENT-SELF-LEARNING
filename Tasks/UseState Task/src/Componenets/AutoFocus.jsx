import { useEffect, useRef } from "react";


function Autofocus(){

    const inputBox = useRef(null);

    function handleclick(e){
        inputBox.current.focus();
    }

    return (
        <>
        <input type="text" ref={inputBox}  />
        <button  onClick={handleclick}>Focus</button>
        </>
    )

    // const inputBox = useRef(null);

    // useEffect(()=>{
    //     inputBox.current.focus();
    // },[]);

    // return (
    //     <>
    //     <input type="text" ref={inputBox} placeholder="Auto focus here" />
    //     </>
    // )


}

export default Autofocus;