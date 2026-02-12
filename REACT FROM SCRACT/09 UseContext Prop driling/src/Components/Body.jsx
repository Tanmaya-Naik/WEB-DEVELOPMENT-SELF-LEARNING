import { useContext, useState } from "react";
// import { CounterContext } from "../App";
// import Counter from "./Counter";
import Product from "./Product";

function Body(){

    // const {counter, setCounter} =useContext(CounterContext)

    const [items, setItems] = useState([
        {id:1, name:"Milk", price:1509},
        {id:2, name:"creatine", price:1050},
        {id:3, name:"dahi", price:150},
        {id:4, name:"protein", price:14000},
        {id:5, name:"condom", price:1500},
        {id:6, name:"butter", price:4150},

    ])


    return (
    <>
    <h1>I am Body component</h1>
    {/* <Counter counter={counter} setCounter={setCounter}/> */}
    <div style={{display:"flex", gap:"50px"}}>
        {
            items.map((item)=><Product key={item.id} item={item}/>)
        }
    </div>
    </>
    )

}

export default Body;


//THIS PROCESS OF LIFTING THE STATE TO THE MAIN COMMON PARENT IS CALLED STATE LIFTING
//AND THE PROCESS OF SENDING THE PROP THROUGH EVERY CHILD COMPONENT IS CALLED PROP DRILING



//AND THE PROBLEM OCCURS BECAUSE OF PASSING THE PROP TO EVERY CHILD WHO DONT NEED IT ALSO RE RENDER WHENEVER THE VALUE OF STATE IS CHANGE
//SO TO REMOVE THE UNNESSARY RE RENDER BCZ OF PROP DRILING IS REMOVE MY USING USECONTEXT PROP

//USE CONTEXT HOOK---> THIS CREATE CONTEXT FOR US 
// IT IS PRODUCER AND A CONSUMER IS CREATED IT SAYS I AM CREATING A STATE COUNT AND STATE VARIABLE JISE ISE USE KAR NA HAI USE USE KAR LENA USING USECONTEXT

//IT HELP US FROM PROP DRILING CONSUMER RECIVE AND CONSUME THE PRODUCT CREATED BY USE CONTEXT