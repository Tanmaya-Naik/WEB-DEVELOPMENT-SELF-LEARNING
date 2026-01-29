export default function App(){
    return (
        <h1>Hello tanu bro</h1>
    )
};


export function Tanu(){
    return (
        <h1>MAIN HOON TAN THE DON</h1>

    )
}
export function Subhu({name}){
    return (

        <h1 style={{color:'red'}}>
            MAIN HOON {name} THE DON
            </h1>
    )
}

//A FILE CAN ONLY HAVE ONLY ONE DEFAULT EXPORT REST ARE NAMED EXPORT