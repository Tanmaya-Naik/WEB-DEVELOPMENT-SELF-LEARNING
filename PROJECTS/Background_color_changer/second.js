

const parent=document.getElementById('parent');

parent.addEventListener('click',(e)=>{
    const target=e.target;

    const body=document.querySelector('body');
    body.style.backgroundColor=target.id;
})