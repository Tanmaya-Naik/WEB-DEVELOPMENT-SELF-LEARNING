import { Outlet } from "react-router-dom"


export default function About(){

    return (
        <>
        <nav>
            <Link to={"/About"}>About us</Link>
            <Link to={"Customer"}>Customer</Link>
            <Link to={"Service"}>Service</Link>
        </nav>
        <h1>hello bro welcome to About page</h1>
         <Outlet></Outlet>  {/* OUTLET HELPS US TO KNOW THAT WHICH IS GOING TO DISPLAY OUT OF OTHER COMPONENT PRESENT IN THE NESTED ROUTER */}
        </>
    )

}

