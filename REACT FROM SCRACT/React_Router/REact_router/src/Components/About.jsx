import { Outlet } from "react-router-dom"


export default function About(){

    return (
        <>
        <h1>hello bro welcome to About page</h1>
         <Outlet></Outlet>  {/* OUTLET HELPS US TO KNOW THAT WHICH IS GOING TO DISPLAY OUT OF OTHER COMPONENT PRESENT IN THE NESTED ROUTER */}
        </>
    )

}

