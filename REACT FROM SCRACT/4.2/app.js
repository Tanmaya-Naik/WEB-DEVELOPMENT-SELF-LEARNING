let count=0;

const para=document.createElement('p');
para.textContent=`counter: ${count}` ;

const button=document.createElement('button');
button.textContent="Increase";

const paretn=document.getElementById('root');
paretn.append(para,button);

button.addEventListener('click',()=>{
    count++;
    para.textContent=`counter: ${count}` ;
    
})