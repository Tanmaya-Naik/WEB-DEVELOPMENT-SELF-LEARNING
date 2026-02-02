

function Food({foods}){

    return (
        <>
          <ul>
             {foods.map(food => <li key={food}>{food}</li>)}
          </ul>
        </>
    )

}

export default Food;


//LETS LEARN ABOUT REACT FIBRE-->_-->--->
    /*

    dekho hamesha ek state chang ehone pe function rerender hota hai toh as js is single threaded so it build again all the tree and element 
    and user ager tree build hone k time koi aur cheeze karna chahega toh ui nehi reponse karega toh hame lag feel hoga ui main


    IS TIME REACT FIBRE ATA HAI JO KI TREE JO BUILD HO RAHA HAI INSTANTLY PAUSE KAR SAKTA HAI ITNA POWER HAI USKE PASSS 

    LEKIN YE POSSIBLE KESA HUA LETS UNDERSTAND THIS BRO   RECURSION RECURSION SO THIS IS THE USE OF DSA HAHA U KNOW NA 
    
    BUT TO BUILD THIS TREE AND STOP ALSO WE THINK LETS CREATE THIS TREE USING WHILE LOOP 

     */