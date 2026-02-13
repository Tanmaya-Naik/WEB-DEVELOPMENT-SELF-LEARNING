import { useState } from "react";


function ThemeWrap({dark,children}){

    return (
        <div
        style={
            {
                backgroundColor: dark ? "black" : "white",
                  color: dark ? "white" : "black",
                    height: "100vh"
            }
        }>
            {children}
        </div>
    )
}


export default ThemeWrap;