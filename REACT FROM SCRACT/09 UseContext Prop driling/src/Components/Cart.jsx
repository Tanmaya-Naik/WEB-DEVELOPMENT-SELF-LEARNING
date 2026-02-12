import { useContext } from "react"
import { CartContext } from "../App"

function Cart(){


    const {cartItem} = useContext(CartContext);
    return (
        <>
        <h1>Total items in CArt: {cartItem}</h1>
        </>
    )
}

export default Cart;