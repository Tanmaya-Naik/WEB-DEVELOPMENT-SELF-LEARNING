import Food from "./Food";
import { useState } from "react";

function List(){
    const [foodItems,setFood] = useState(["Apple","orange","Banana"]);


    function handleclick(){
        setFood(["Mango",...foodItems]);
    }

    return (
        <> 
        <button onClick={handleclick}>Increament</button>
        <Food foods={foodItems}></Food>
        </>
    )

}

export default List;