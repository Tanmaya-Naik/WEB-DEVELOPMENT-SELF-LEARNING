                        // const newElemetn=document.createElement("h2");

                        // newElemetn.textContent="hello tanmaya";
                        // newElemetn.id="first";

                        // const get=document.getElementById("ramu");

                        // get.after(newElemetn);

                        // const new2=document.createElement('h3');
                        // new2.textContent="subhu sange katha lag";
                        // new2.id="tho";
                        // // new2.className="thoro";   //classname because class keyword is already reseved
                        // // new2.className+=" holi";

                        // //assin class like this

                        // new2.classList.add("don");
                        // new2.classList.add("john");
                        // console.log(new2.getAttribute("class"));
                        // get.before(new2);

                        // const list=document.createElement("li");
                        // list.textContent="Milk";
                        // const list2=document.createElement("li")
                        // list2.textContent="Paneer";
                        // const list3=document.createElement("li")
                        // list3.textContent="Cake";
                        // const list4=document.createElement("li")
                        // list4.textContent="cookies";

                        // const ull=document.getElementById("listing");

                        // ull.append(list);
                        // ull.append(list2)
                        // ull.prepend(list3) //if we want to append it first


                         //select milk

                        // list.after(list4)

                        // console.log(ull);


    //BACKEND SE ARRAY AAEGA TUMHE ISKO UL K ANDER UI MAI SHOW KARNA HAI

    const arr=["Milk","Halwa", "Paneer", "tofu", "Tea" ];

    const ull=document.getElementById("listing");
    const fragment=document.createDocumentFragment();

    for(let food of arr){
        const list=document.createElement("li");
        list.textContent=food;
        fragment.append(list);

        
    }

    ull.append(fragment);


    //YE OPTIMISED METHOD NEHI HAI UI K LIYE BAHAT GANDA HAI
    //1000 BAR UI KO CHANGE KAR RAHE HO

    //so yaha fregment ka kam ata hai

    //PROBLEM STATEMENT DO ALL THE THING WITH UR OWN THINKING



    //DELETE KESE KAREN

    const s1=document.getElementById("kaka");
    s1.remove();