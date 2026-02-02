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


//KEY KO KABHI INDEX MAT DENA SAMJHE toh compare karne k time problem ata 
//key ager kuch b nehi denge toh react vertual dom position k basis pe check karega


//ADVANTAGE OF KEY LETS SEE GO TO ager key nehi denge toh ager kabhi new element add karenge toh 
//value mismatch hoga kyun ki react key ko ek element k sath bind kar dega so hame problme nehi hoga


//IMPORTANT IMPORTANT IMPORTANT ---> AGER HAM KHUD SE KEY PROVIDE NEHI KARENGE TOH REACT KHUD SE INDEX KO HI KEY ASSUME KAR K BIND KAR DETA HAI
//IMPORTANT IMPORTANT IMPORTANT ---> AGER HAM KHUD SE KEY PROVIDE NEHI KARENGE TOH REACT KHUD SE INDEX KO HI KEY ASSUME KAR K BIND KAR DETA HAI
//IMPORTANT IMPORTANT IMPORTANT ---> AGER HAM KHUD SE KEY PROVIDE NEHI KARENGE TOH REACT KHUD SE INDEX KO HI KEY ASSUME KAR K BIND KAR DETA HAI   
//ISLIYE HAMESHA NAME KO HI KEY BANA DO


//AND STATE ALSO ATTACHED TO KEY 
//AND STATE ALSO ATTACHED TO KEY 
//AND STATE ALSO ATTACHED TO KEY 