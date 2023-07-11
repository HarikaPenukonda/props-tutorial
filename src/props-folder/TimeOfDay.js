import React from "react"

export default function Time(){

    const date = new Date()
    const hours = date.getHours()
    let timeOfDate
    if (hours<12){
        timeOfDate = "Morning"
    }
    else if (hours>=12 && hours<=17){
        timeOfDate = "Afternoon"
    }
    else{
        timeOfDate = "Night"
    }
    return(
        <h1>Good {timeOfDate}!</h1>
    )


}
