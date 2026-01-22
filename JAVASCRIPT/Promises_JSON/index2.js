 //JSON: JAVASCRIPT OBJECT NATION EK ESA FORMAT HAI KO KISI BHI LANGUAGE SAMAJH SAKTI HAI
    //if we send json to all the language then they can understand this format and they can share data with each other 

// const j1={
//     name:"Tanu",
//     age:20,
//     address:"gmh",
//     c:undefined  //it will remove in the jsonFORMAT
// }
// console.log(j1);

// const jsonFormat=JSON.stringify(j1);  //convert javascript object to JSON format 

// console.log(jsonFormat)



const actualJSONLOOK= `{
    "name": "Tanu",
    "age": 20,
    "address": "gmh"
}`;

//convert this to javascript object

const jsOBJECT=JSON.parse(actualJSONLOOK);  //convertJSON format to javascript object

