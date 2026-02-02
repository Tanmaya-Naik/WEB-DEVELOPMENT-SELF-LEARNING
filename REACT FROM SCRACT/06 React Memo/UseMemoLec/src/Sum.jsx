import React from "react";


const Sum = React.memo(({number}) => {


    console.log("sum render");  //run once bcz it check props also if props change then only get re render 
    
    function calculateSum(){
        
        let sum=0;
        for(let i=0;i<=1000;i++){
            sum+=i;
        }

        return sum;
    }

    const totalsum=calculateSum();

    return (
        <>
        <h1>This is math class by tanmaya</h1>
        <h2>Sum: {totalsum}</h2>
        </>
    )


})

//now sum is not depended on parent app
//it memories this code and check am i depended so why i re render again


export default Sum;

