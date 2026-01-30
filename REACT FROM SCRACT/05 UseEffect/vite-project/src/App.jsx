import { useEffect } from "react";
import { useState } from "react";



function App(){

  const [user,setUsers]=useState([]);
  const [name,setName]=useState("");

  useEffect(()=>{
    async function Githubprofile() {
    
    const response = await fetch("https://api.github.com/users");
    const data= await response.json();
    setUsers(data);
    
  }

  Githubprofile();

  },[])   //pehle baki ka kam karo then useeffect k andar k kam which is side ka kam is execute after everything get complete
//empty array means only ek bar at last run hoga rerender k time useeffect wala kam run nehi hoga samajhe na bro
  // async function Githubprofile() {
    
  //   const response = await fetch("https://api.github.com/users");
  //   const data= await response.json();
  //   setUsers(data);
    
  // }

  // Githubprofile();


  function handleChange(e){
    setName(e.target.value.toUpperCase());
  }
  return (
    <> 
     <h1>Github Users Project</h1>
     <input type="text" value={name} onChange={handleChange} />
     <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"10px"}}>
      {
          user.map(user=>(
            <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login} />

      ))
      }
     </div>
    </>
  )

}

export default App;


//WHAT IS DEPENDENCY ARRAY FUTURE MAIN ESA SITUATION WHERE WE HAVE TO RUN THE USEEFFECT CODE MULTIPLE TIME THEN WE HAVE TO USE THAT DEPENDECNY ARRAY