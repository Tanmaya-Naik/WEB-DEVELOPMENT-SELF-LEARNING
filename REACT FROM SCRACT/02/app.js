// const element = React.createElement('h1',{id:'title', style:{color:'red'}}, "Hello tanu bro");

// const element2 = React.createElement('div',null,
//      React.createElement('h1',null,"hello"),
//     React.createElement('h3',null,"hi"));


//lets write same as html in js   SO FROM THE JSX IS BORN JAVASCRIPT XML: LOOK LIKE HTML

// const element= (
//     <div>
//         <h1>
//             Hello bro
//         </h1>
//         <h2>
//             hello buddy
//         </h2>
//     </div>
// );



//WE CAN NOT WRITE MORE THAN ONE INDEPENDENT HTML ELEMENT WE HAVE TO WRITE ALL THE HTML INSIDE A PARENT ELELMENT


//1-REACT ELEMENT

// const element3= (
//     <div>

//     </div>
// )


//2- REACT COMPONENT   --> FIRST LETTER START WITH CAPITAL LETTER BECAUSE REACT CAN DISTINGUIS BETWEEN ACTUAL HTML TAG AND REACT JSX TAG

//sirf ek function hai jo jsx return kar k dega BUT COMPONENT KA FIRST ELEMENT CAPITAL HONA CHAHIYE

        // function App(name){
        //     return (
        //         <h1> Hello coder army {name}</h1>   //use that {to print any js expression inside jsx }   so uske ander 10+10 karoge toh 20 print hoga
        //     )
        // }

// const a=App();  HERE WE CAN SIMPLY RETURN a to get the result in the UI simple  <App/> is same as App()

//js ka any expression ap likh sakte hain wo text ho ya element inside {}

//Number, string,  ARRAY B DAL SAKTE HAIN  LEKIN LEKIN LEKIN
//true false b lik sakte hain kuch output nehi dikhega null undefined b dal sakte hain
//JS OBJECT KO NEHI DIKHA SAKTE THIS GIVE ERROR 


// const age=12;
// const element = <h1>Hello bro tanu your age is {age>10?"adult":'kid'} </h1>
// const element2 = <h1>Hello bro tanu your age is {<h2>Hi bro same to u</h2>} </h1>


 //real world case
// const islogin=false;
// const element3= <h2>Hello Mr and miss Naik {islogin?<h2>You are logged in congrats </h2>:<h2> You are not logged in sorry</h2>}</h2>

// const course=["C++","Java","html","REact"];
// const element5= (
// <ul>
//     {course.map(it=><li>{it}</li>)}
//     </ul>
// )


// const ab={backgroundColor:"orange"}
// const element=<h1 id="title" className="first" style={ab}></h1>  //style we have to give as object

function  App2(props){
    return (
        <h1>Hello tanu baby {props.name} {props.age}</h1>
    )
}
const element= <App2 name={"Rahit"} age={30}/> 
                        //PROPSS PROPS PROPS PROPS
//--> this name={"Rahit"} age={30} store in an object like this
// {
//     name:"Rohit",
//     age:30
// }   AND THE ACCESS OF THIS OBJECT IS GIVEN TO U   USI KO KAHTE HAIN PROPS  this is also know as property agrument 



const root = ReactDOM.createRoot(document.getElementById('root'));

//<App/> is same as App()
// root.render(App("Tanu"));

root.render(element);

