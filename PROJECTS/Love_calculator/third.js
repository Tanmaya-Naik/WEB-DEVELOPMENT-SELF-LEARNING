const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Boy=document.getElementById("Boy");
    const girl=document.getElementById("Girl");

    const l1=Boy.value.length;
    const l2=girl.value.length;

    const result=100*10;

    const love=document.getElementById("love");
    love.textContent=`Sorry subham and bhabi : ${result}`;
})