//THERE ARE 3 WAYS TO WRITE STRING USING "" '' AND LAST ONE WHICH IS MOST POPULAR AND WIDLY USE BACKTICK ``

//IF WE WRITE WITH BACKTICKE WE CAN ACCESS EACH WORD LENGTH AND USING ${}  WE PRINT ANOTHER STRING IN THE MIDDLE


const str1="Hello TAnmaya";
const str2='Hello Tanu';
let love='subhu';
const str3=`Hello Tanmya ${love}
 how are u`

 console.log(str1,str2,str3);

 console.log(str3.length);
 console.log(str3[4]);

 //to uppercase and lowercase  which create new string and make all uppercase
 const b=str3.toUpperCase();
 console.log(b) 



 //find a index by string 
 console.log(b.indexOf('SUBHU'))