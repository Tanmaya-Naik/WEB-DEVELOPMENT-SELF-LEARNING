// function addnum(num1,num2){
//     const sum=num1+num2;
//     console.log(sum);
// }

// addnum(14,18);

//AGAR 100 NUMBER KA SUM CALCLUATE KARNA HO ISI NICHE K FUNCTION SE TOH THODI 100 NUM1,NUM2 LIKHENGE TOH KYA KARENGE

//USE KARENGE REST OPERATOR KA ...  jo ki jo b number aa rahe hain unka ek array bana deta hai
                //  function addnum(...num){
                //     let sum=0;

                //     for(let i of num){
                //         sum+=i;
                //     }

                //     console.log(sum);
                // }

                // addnum(14,23,12,4,2,1,254,5);


//DIFFERENCE BETWEEN SPREAD OPERATOR ... AND REST OPERATOR IS THAT

// SPREAD OPERTOR EXPLAND THE GIVEN ARRAY AND TREAT ONE AS INDIVIDUAL WE CAN MERGE THE ELEMENTS OF TWO DIFFERNT ARRAY USING SPREAD OPERATOR

// REST OPERATOR CREATE A ARRAY FROM THE GIVEN NUMBER 

                // const arr1=[1,2,34];
                // const arr12=[17,62,34];

                // const ans=[...arr1,...arr12];
                // console.log(ans);


//DIFFENT WAY TO CREATE FUNCTION

// const addnum=function(num1,num2){
//     return num1+num2;
// }

// console.log(addnum(44,10))

//DIFFERNCE BETWEEN ABOVE AND ITS ABOVE IN THIS TYPE OF FUNCTION WE CAN CALL FUNCTION FROM ANYWHERE BUT IN THE ERLIER ONE WE CAN NOT
 











                                        //ARROW FUNCTION 
    // const addnum=(num1,num2)=>{
    //     const sum=num1+num2;
    //     console.log(sum);
    // }
    // addnum(1,2);

    
    // const addnum2=(num1,num2)=>{
    //     return num1+num2;
    // }
    // console.log(addnum2(1,2));

    //this is same as above addnum2

                                // const addnum2=(num1,num2)=> num1+num2; //AGAR HAM CHAHTE HAIN KI HAMARA FUNCTION IN DO ARGUMENT KO LEKE KUCH KARE OR SIRF OR SIRF RETURN KARE TOH HAM ISS TYPE OF FUNCTION LIKH SAKTE HAIN WITHOUT {} AND RETURN 



                                // //aur ek jalwa dekhoge kya baby toh chalo
                                // const multiplynum= num => num*num  // if we have single parameter then we dont need () this also
                                
                                // console.log(addnum2(1,2));  
                                // console.log(multiplynum(3));  

    

    //write a function to return object

    // const greeting = () => {
    //     let user={
    //         name:"Tanu",
    //         age:20
    //     }
    //     return user;
    // }

    //BOTH ARE SAME BOTH RETURN OBJECT
    const greeting = () => {
        return {
            name:"Tanu",
            age:20
        }
    }

    console.log(greeting());  //when compiler see { it assume that something is going to return but we write this so to return object we have to user (and wrtie the object inside this) }



    //LAST TYPE OF FUNCTION IN JAVASCRIPT IS IMMIDIETLY INVOKE FUNCTION IIFE


    (function greet(){
        console.log("hello");
    })()  //=> this () immidetly call this function

    //we want ki this call automatically