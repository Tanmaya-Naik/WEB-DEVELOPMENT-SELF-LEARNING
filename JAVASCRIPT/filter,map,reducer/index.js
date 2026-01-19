//forEach, Filter, reducer, map, set

                                    // const arr=[10,2,3,true,"Tanu"]

                                    // arr.forEach((number,index,arr) => {
                                    //     console.log(number,index,arr);
                                    // })  //forEach is a method or function of arr   IT CAN TAKE 3 ARGUMENT BUT LAST 2 ARE OPTINALL



//FILTER
//ORIGINAL ARRAY SE FILTER ITEM KA ARRAY CREATE KARTA HAI

// const arr=[12,3,44,22,456,54]

// const newarr=arr.filter((number)=> {
//    return number>50
// });
// console.log(newarr)


//ARRAY IS A OBJECT SO LETS CREATE A OWN METHOD

//SO WE KNOW THAT ARRAY IS A OBJECT SO ALSO 
// WE KNOW THAT OBJECT CONTAIN SOME FUNCTION LIKE DEPOSIT:FUNCTION WITHDRAW() DEPOSITE IS A FUNCTION NA OF OBJECT OBJ LETS SAY SO SAME FILTER IS A FUNCTION OR METHOD OF OBJECT ARR WHICH TAKE ANOTHER FUNCTION WHICH IS CALLBACK FUNCTION AS AN ARGUMENT

const arr=[12,3,44,22,456,54]

arr.filtering=function (compare){
    const ans=[]
    for(let num of this){
        if(compare(num)){
            ans.push(num)
        }
    }

    return ans;
}

const newArr=arr.filtering((num)=> num>25)
console.log(newArr)

//Now we create a custom method AND IF WE WANT TO GENREALIZE THE FUNCTION FLITERING WHICH WE CREATE OUR OWN THEN WE HAVE TO DO THIS ARRAY.PROTOTYPE.FILTERING

//TASK
//IMPLEMENT OWN SORTING 
//IMPLEMENT OWN MAP MEHOD



//REDUCER ITERATES IN ALL THE VALUE OF MAP AND RETURN A SUM OR RETURN A CUMULATIVE VALUE

 