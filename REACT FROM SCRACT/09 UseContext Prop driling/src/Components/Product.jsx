import { useState,useContext } from "react";

import { CartContext } from "../App";

function Product({item}){

    const [addTocart,setAddtocart] = useState(false);
    
    const {cartItem, setcartItem} = useContext(CartContext);

    return (
        <>
        <div>
            <h1>Name: {item.name}</h1>
            <h2>Price: {item.price}</h2>
            {
                addTocart ? <button onClick={()=>{setAddtocart(false), setcartItem(cartItem=>cartItem-1)}}>Remove</button> : <button onClick={()=> {setAddtocart(true), setcartItem(cartItem=>cartItem+1)}}>Add</button>
            }
        </div>
        </>
    )
}

export default Product;