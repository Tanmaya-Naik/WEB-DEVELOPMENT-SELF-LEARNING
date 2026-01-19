const result= document.getElementById('result');

setInterval(()=>{
    const currdate=Date.now();

const olympictime=new Date(2028,6,14).getTime();

let timer=olympictime-currdate;

const day=Math.floor((timer)/(1000*60*60*24));
timer%=1000*60*60*24;
const hr=Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;
const min=Math.floor((timer)/(1000*60));
timer%=1000*60;
const sec=Math.floor((timer)/(1000));
timer%=1000;

result.textContent=`${day} Days  ${hr} Hour ${min}  Minute: ${sec} Sec: `;


},1000);
