async function github(){
    const res = await fetch("https://api.github.com/users");

    const data = await res.json();

    const parent=document.getElementById("first")
    for(let user of data){

        const element= document.createElement("div");
        element.classList.add("user");

        const image= document.createElement("img");
        image.src = user.avatar_url;


        const username=document.createElement('h2');
        username.textContent=user.login;

        const anchor=document.createElement('a');
        anchor.href=user.html_url;
        anchor.textContent="Visit profile";

        element.append(image,username,anchor);
        parent.append(element);
    }

}

github();