// function handleclick(){
//     const element=document.getElementById("first");
//     element.textContent="Tanu boy is changed now";
// }

// const element=document.getElementById("first");
// element.onclick=function handle(){
//     element.textContent="Tanu boy is changed now";
// }


//if we want to do multiple task to a perticular element then if we create more than one function onclick with the elemne then the last function overwrite other one so we have to use addEventlistener which act as a  method of the element select and take two argument one click and a callback function

// const element=document.getElementById("first");

// element.addEventListener('dblclick',()=>{
//     element.textContent="Tanu boy is changed now";
// })

// element.addEventListener('click',()=>{
//     element.style.backgroundColor="brown";
// })

//as this is a method its not get overwrite


// const child1=document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent="I am clicked and i am child no 1";
//     child1.style.color="black";
// })
// const child2=document.getElementById("child2");
// child2.addEventListener('click',()=>{
//     child2.textContent="I am clicked and i am child no 2";
    
// })
// const child3=document.getElementById("child3");
// child3.addEventListener('click',()=>{
//     child3.textContent="I am clicked and i am child no 3";
    
// })
// const child4=document.getElementById("child4");
// child4.addEventListener('click',()=>{
//     child4.textContent="I am clicked and i am child no 4";
    
// })
// const child5=document.getElementById("child5");
// child5.addEventListener('click',()=>{
//     child5.textContent="I am clicked and i am child no 5";
    
// })




                    //BUBBLING
const grandparent=document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
    // console.log(e);
    console.log(e.target);
    // e.stopPropagation();
    // console.log("Me your grandparent is clicked")
},true)

// const parent=document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     console.log(e);
//\\    // console.log("Me your parent is clicked")
// },false)

// const child=document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     console.log(e);
//\\    // console.log("Me your child is clicked")
// },true)

//capture phase go to target and if true then print instanly and if it is false this will print at the bubling phase
//by default false

//addeventlister give us a object which store too many information whrer we click



