import React from "react";
import ReactDOM  from "react-dom";

function App (){
    // const firstName = "Joe"
    // const lastName = "Alwyn"
    /*
        Challenge: finish off the h1 below so it says
        "Hello Joe Alwyn"
    */
   //const date = new Date()
    return(
        <h1>It is currently about {new Date().getHours()} o' clock</h1>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))