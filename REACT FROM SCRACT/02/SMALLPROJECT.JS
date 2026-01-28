function Header({name}){
    return (
        <h1>{name} Welcome to India Railways </h1>
    )
}

function Main({user})
{
    return (
        <>
        <h2 style={{backgroundColor:"orange"}}>
            Hii {user.name} 
        </h2>
        <h3>
            {user.age>18?"You are eligible to apply for railway job":"you are not eligible to apply for railway"}
        </h3>
        <p>Your city is {user.address} </p>
        </>
    )
}

function Footer(){
    return (
        <h3>Thanks for visiting our website</h3>
    )
}
function App(){
    return (
        <>
        <Header name="Tanu"></Header>
        <Main user={{name:"Tanu", age:30, address:"kolkata"}}></Main>
        <Footer></Footer>
        </>
    )

}



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)