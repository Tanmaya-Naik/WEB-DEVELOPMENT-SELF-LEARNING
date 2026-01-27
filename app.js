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


    function createElement(tag, attributes, children){
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

    const element1=createElement("h1", {className: "element", id:"first", style:{fontSize:"30px", backgroundColor:"orange", color:"white"}}, "Hello Mr Tanmaya");
    root.append(element1);

    const element2=createElement("h3", {className: "element", id:"second"}, "Hello ahfauihfahj");
    root.append(element2);

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
   