import React from "react"

const Post = React.memo(({value})=>{

    console.log("Post render");

    return (

        
        <>
        <h1>Your name is {value.name} the don and my age is {value.age}</h1>
        </>
    )
});

export default Post;

//You may see one problem on the console of ur browser that this post component rendere every time sum and value increase click why why why 
//this post is not dependent on anyone na technically then why
//BECAUSE WE ARE PASSING OBJECT AS PROPS THEN IN THE TREE LIKE VIRTUAL DOM AND ORIGINAL DOM COMPARE IT SEE A OBJECT SOOO WHAWT
//BRO I ALREADY TOLD THAT NON PRIMITIVE CHECK ON BASE ON REFERNCE SO BOTH ARE DIFFERNT IN MEMORY UNDERSTAND SO WE USE 
//USEMEMO HOOK IT REMEMBER OUR VLAUE OR OBJECT 