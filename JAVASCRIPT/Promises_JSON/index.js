console.log("Hello i am start");



                                 //when request is gone it is set as promise is pending then github server out of two option do one thing fullfilled promise or reject so there are 3 state pending reject resolve(fullfill)
                                // const p1=fetch("https://api.github.com/users");
                                 // console.log(p1);

                                 //read promise only when it get fullfill or reject

                                // const p2= p1.then((response)=>{
                                //     return response.json();
                                // })
                                 //data what we are request is given on byte form so we have to make it javascript object so .json()   --> now it shows promise pending because .json() is also a async operation so we have to treat as promise

                                 //promise tell in future i get reject or fullfill sure but only after then u print me
                                // p2.then((response)=>{
                                //     console.log(response);
                                // })


console.log("Hello i am end");



//LETS DO PROMISE CHAINING

fetch("https://api.github.com/users")
.then((resposne)=>{
    return resposne.json();
})
.then((data)=>{
    // console.log(data);

    const parent=document.getElementById("first");
    

    for(let i=0;i<data.length;i++){

        const image=document.createElement('img');
     image.src=data[i].avatar_url;
    image.style.height="40px";
    image.style.width="40px";

      parent.append(image);

    }
   

  
    //JSON: JAVASCRIPT OBJECT NATION EK ESA FORMAT HAI KO KISI BHI LANGUAGE SAMAJH SAKTI HAI
    //if we send json to all the language then they can understand this format and they can share data with each other 
})
