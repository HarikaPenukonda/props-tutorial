import React from "react"
import phoneicon from "./images/phone.png"
import envicon from "./images/envelope.png"


/*
    Challenge :
    - Create a ContactCard.js component in another file
    - Move one of the Contact Card divs below into that file
    - import and render 4 instances of that contact card
        - Think ahead: what's the problem with doing it this way?

    Challenge :
        - Fix the code below to use the `props`
        object values in place of the hardcoded values below

    Challenge: fix the bug, now that we have destructed the props object
*/

export default function ContactCard({img, name, mobile, email}){
    return(
       <div className="contact--card">
            <img src={img}
                alt="Mr.Whiskerson"
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phoneicon}
                    alt="phone-icon" 
                    width="15px"/>
                <p>{mobile}</p>
            </div>
            <div className="info-group">
                <img src={envicon}
                     alt="email-icon"
                     width="20px"/>
                <p>{email}</p>
            </div>
       </div>
    )
}