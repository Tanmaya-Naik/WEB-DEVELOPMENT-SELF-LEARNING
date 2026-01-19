                            // const arr=[1,962,563,2511,12344,882,77,55,44,88];
                            // //IN JAVASCRIPT SORTING WORKS CHARACTER BY CHARERCTER SO SEE THE VALUE OF 1 IN ASCII VALUE ITS COME FIRST THEN FOR 1123 IS CHECK BY CHAR CHAR 
                            // //WE KNOW WE CAN STORE ANYTHING INSIDE JAVASCRIPT ARRAY SO IT DID NOT NOT ONLY INT IS THER OR STRING 
                            // const arr2=["Tanu",123,"Subhu",true];
                            // // arr.sort();
                            // // arr2.sort();

                            // // console.log(arr2);



                            // //WE CAN DO NORMAL SORTING BY using a function

                            // arr.sort((a,b) => a-b)   //compare 2 value like 10,40 then subtract then if it got negative value then sorted then 40,30 then got positive result then swap 
                            // arr2.sort((a,b) => b-a)   //compare 2 value like 10,40 then subtract then if it got negative value then sorted then 40,30 then got positive result then swap 

                            // console.log(arr);
                            // console.log(arr2);



    const arr=[1,962,563,[2511,[12344,882],77],55,44,88];
    console.log(arr[3][1][1]);  //return 882
    //ITS VERY CONFUSING  so we use flat function

    const a=arr.flat(Infinity);
    console.log(a);
    

    //WHY JAVASCRIPT ARRAY IS NOT TRUE ARRAY
    