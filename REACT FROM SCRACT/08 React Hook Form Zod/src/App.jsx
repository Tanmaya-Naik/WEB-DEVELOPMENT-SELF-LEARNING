import { useState } from 'react'



function App() {
 
      const [name,setName] = useState('');
      const [age,setAge] = useState('');
      const [password,setPass] = useState('');

      function handleSubmit(e){
        e.preventDefault();

        console.log(name);
        console.log(age);
        console.log(password);
      }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} ></input>
      </div>
      <div>
        <input type="number" value={age} min={10} max={60} onChange={(e)=>setAge(e.target.value)} ></input>
      </div>
      <div>
        <input type="password" name='password' autoComplete='on' value={password} onChange={(e)=>setPass(e.target.value)} ></input>
      </div>
      
      <button>Submit</button>
    </form>
      
    </>
  )
}

export default App



//AS U KNOW IF WE WRITE THIS WAY THEN IN EVERY VALUE INSIDE THE FORM CAUSE THE APP COMPONENT RE RENDER WHICH IS VERY VERY VEYR BAD 
//AND WE HAVE TO PUT MANY TIME OF CONSTRAINTS ALSO FOR AGE LIKE MIN ANF MAX AND PASS LIKE CONTAIN ALPHABET SPECIAL SYMBOL

//SO FROM THIS PROBLEM THE REACT HOOK FORM HELP USS 