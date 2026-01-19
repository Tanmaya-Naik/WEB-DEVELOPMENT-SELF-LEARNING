                                        //scope and closure ,HOF

                                        // let a = 10
                                        // const b=20

                                        // console.log(a);

                                        //inside if we create a let variable then we can not access it outside the function and if else while statement


                                        //3 type of scope

                                        //Global---> accessible to everyone
                                        //functional---accessible oly to that function
                                        //block level scope --> accessible oly to that block

                                        let a=10
                                        const b=20;
                                        var e=90




                                        //var only gives resepect to global and functional level but not to block level we can access it outside block

    //CLOSURES

// function createCounter(){
//     let count=0
//     function increment(){
//         count++;
//         return count
//     }

//     return increment;   // we are returning oor referencing this increment function 

// }

// const HR=createCounter();
// // console.log(HR)  //we can call HR to invoke call createcounter
// console.log(HR())
// console.log(HR())
// console.log(HR())
// console.log(HR())


//se we cant access let outside the functional scope so how it is giving the value of count 
//and also we have refence of increament then how to access count which is inside outer scope

//ITS ONLY BECAUSE OF CLOSURE AND ITS NOT A BUG REMEMBER

// -----> CLOSURE MEANS A FUNCTION WHICH REMEMBER VARIABLE FROM ITS OUTER SCOPE EVEN AFTER THE OUTER FUNCTION HAS FINISHED EXECUTING
//THIS IS THE MOST IMPORTANT CONCEPT OF JS








//USE CASE OF CLOSURE
//BANK BALANCE

let user={
    balance:600,
    deposit:function (amount){
        if(typeof amount=="number" && amount>0){
            this.balance+=amount;
            return this.balance;
        }
    },
    withdraw:function (amount){
        if(typeof amount=="number" && amount>0){
            this.balance-=amount;
            return this.balance;
        }
    },
    getbalance:function (amount){
        return this.balance;
    }
}

console.log(user.deposit(700));



// Scope and closure , HOF
// Global_> Accessible to everyone
// functional -> accesible only to that function
// Block level scope-> accesible only to that Block

// let a = 10;
// const b = 20;



// if(true){
//     let d = 30;
    
// }

 

// function greet(){

//     let c = 30;
//    var e = 90;
// }

// // console.log(c);
// console.log(e);
// greet();


// let global = 30;


// function greet(){
     
//     let global = 40;
   

//     function meet(){
//         let global = 10;
//         console.log(global);
//     }
    
//     meet();
// }

// greet();


// function createCounter(){
    
//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;
// }

// // console.log(count);

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// let balance = 500;




// // // balance+="Rohit";
// // balance-=500;
// // console.log(balance);

// let balance = 500;
// // private

// let user = {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
// }

// balance="Rohit"

// user.balance="Rohit";
// console.log(user.getBalance());
// console.log(user.deposit("2sa00"));
// console.log(user.deposit(500));

// method ko access(function)
// balance: usko directly access na


// function createBankAccount(){

//     let balance = 500;
    
//     return {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
//     }

 
// }





// const customer = createBankAccount();
// console.log(customer.withdraw(200));


// Higher order function


function double(value){

    return function execute(num){
        return num*value;
    }
    
}

const n = double(20)(5);
console.log(n);