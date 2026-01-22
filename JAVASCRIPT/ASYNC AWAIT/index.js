                            //ASYNC AWAIT

                            //async function always return a promise
                            // async function greet(){
                            //     return "Hello Tanmaya";

                                //equivalent to
                            //     return new Promise((resolve,reject)=>{
                            //         reject("Hello tanu baby");
                            //     })

                            //}

                            // const response=greet();


                            // response.then((data)=>{
                            //     console.log(data);
                            // })
                            // .catch((err)=>{
                            //     console.log(err.message);
                            // })



    // const response = await fetch("https://api.github.com/users");
     //if we write await then this program is frezzed here and only and only and only after completeing this line like if this line resolve completly then only javascript go to next line
     // AS A GOOD DEVELOPER WE NEVER WANT KI OUR PROGRAM GET FREEZED SO BECAUSE OF THIS ALL THE CODE THAT IS NOT DEPENDENT ON THIS LINE OF CODE IS ALSO STUCK WHICH IS NOT GOOD
    // const data=await response.json();

    // console.log(data);



    // console.log("ramu kaka i am and i am run first then awiaat according to js");



    async function github(){
        const res= await fetch("https://api.github.com/users");
        const data=await res.json();

        console.log(data);

        
    }

    github();
    console.log("Hello are u surprised")  