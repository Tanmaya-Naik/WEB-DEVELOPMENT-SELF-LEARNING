//CREATE A H1 ELEMENT USING JS
    // const element1=document.createElement('h1');//TAG NAME
    // element1.textContent="Hello tanu bro";//CHILDREN
    // element1.className='element';//ATTRIBUTE
    // element1.id='first';
    // element1.style.fontSize="50px";
    // element1.style.backgroundColor="red";
    // element1.style.color="white"


    // const root=document.getElementById('root');
    // root.append(element1);

    // const element2=document.createElement('h1');
    // element2.textContent="Tanu is borded";
    // element2.className='element';
    // element2.id='second';
    // element2.style.fontSize="30px";
    // element2.style.backgroundColor="aqua";
    // element2.style.color="black";

    // root.append(element2);

    //AGAR MAI KAHU TOH ESE 50 ELEMENT MUJHE BANANA HAI TOH KYA APP 50 BAR LIKHOGE NEHI NAA SO
    //AGER HAM A FUNCTION LIKH DE CREATE ELEMENT KAR K JO KI HAME CREATE KAR K DEDE HAM SIRF DATA CHANGE KARE 
    
    
    // const element1=document.createElement('h1');//TAG NAME
    // element1.textContent="Hello tanu bro";//CHILDREN
    // element1.className='element';//ATTRIBUTE
    // element1.id='first';







    /*
    attribute={
    classname:"element",
    id:"first",
    style:{
    fontsize:30,
    backgroundcolor:black,
    color:white
    }
}


    element={
    tag:'h1,
    textcontent:jaafkjka,
    classname:'element;
    id:first,
    style:  HERE STYLE IS DISPLAY BY USING A OBJECT PROPERTY assign so
    {
    fontsize:30,
    backgroundcolor:black,
    color:white
    }
}
    */


//SO NOW WE SUCCESSFULLY ABLE TO CREATE A REUSABLE FUNCTION WHCIH CREATE ELEMENT AND PUSH COLOR 
   
    const React = {
    createElement:function (tag, attributes, children){
                const element=document.createElement(tag);
                element.textContent=children;

                //attribute store as object so iterate over it bcz maybe too many attribute present
                for(const key in attributes){
                    if(key==='style'){
                        Object.assign(element.style,attributes.style)
                    }
                    else{
                        element[key]=attributes[key];

                    }
                    
                }

                return element;


            }

    }


    



//NOW LETS LEARN WHAT IS REACT DOM
const ReactDOM = {
    render: function (child, parent){
        parent.append(child)

    }
}

  const element1=React.createElement("h1", {className: "element", id:"first", style:{fontSize:"30px", backgroundColor:"orange", color:"white"}}, "Hello Mr Tanmaya");

  const element2=React.createElement("h3", {className: "element", id:"second",style:{color:"red"}}, "Hello ahfauihfahj");
  
  console.log(element1);
  const root=document.getElementById('root');
  ReactDOM.render(element1,root);
//   ReactDOM.render(element2,root);

