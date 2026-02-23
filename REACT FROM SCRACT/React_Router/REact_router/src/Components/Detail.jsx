import { Link } from "react-router-dom"


export default function Detail(){

    return (
        <>
         <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/Contact"}>Contact</Link>
      <Link to={"/Community"}>Community</Link>
      <Link to={"/Detail"}>Detail</Link>
      <Link to={"/About"}>About us</Link>
    </nav>
        <h1>hello bro welcome to Detail page</h1>
        </>
    )

}