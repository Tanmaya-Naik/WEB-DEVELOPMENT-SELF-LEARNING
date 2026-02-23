import { useEffect } from "react";
import { useState } from "react";
import {useParams} from "react-router-dom"

function Github(){

    const {name} = useParams();
    const [profile, setProfile] = useState("");
    console.log(name);

    async function fetchuser(){
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();
        setProfile(data);
    }
    useEffect(()=>{
        fetchuser();
    },[])
    return (
        <>
        <h1>Hello bro i am github please check everything is fine or not</h1>
        {/*  Display the github user data */}
        <div>
            <h2>{profile.login}</h2>
            <img src={profile.avatar_url} alt="Profile pic" />
        </div>
        </>
    )
}


export default Github;

