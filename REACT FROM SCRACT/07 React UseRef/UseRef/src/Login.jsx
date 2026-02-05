import { useState } from "react";
import { useRef } from "react";


function Login(){
    
    // const [email,setEmail]= useState("");
    // const [password,setPassword] = useState("");  //THIS CREATE TOO MANY RE RENDER

    //give the power of this form to browser and read the data using useRef

    const emailRef = useRef(null);
    const passRef = useRef(null);   //by doing this these two refer to the email and password box directly inthe real Dom tree


    console.log("render");

    function handleSubmit(e){
        e.preventDefault();
        

        console.log(emailRef.current);
        console.log(passRef.current.value);

    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef} ></input>
            <input type="password" name="password" autoComplete="on" ref={passRef} ></input>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Login;