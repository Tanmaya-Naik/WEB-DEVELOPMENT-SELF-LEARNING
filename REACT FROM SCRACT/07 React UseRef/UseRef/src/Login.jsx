import { useState } from "react";
import { useRef } from "react";


function Login(){
    
    // const [email,setEmail]= useState("");
    // const [password,setPassword] = useState("");  //THIS CREATE TOO MANY RE RENDER


    const emailRef = useRef()
    const passRef = useRef(null);

    console.log("render");

    function handleSubmit(){
        e.preventDefault();
        

        console.log(emailRef);
        console.log(passRef);

    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef} ></input>
            <input type="password" ref={passRef} ></input>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Login;