import React from "react";
import phone from "../images/phone.png"
import email from "../images/email.jpeg"
import cat1 from "../images/cat1.jpeg"

/*
    Challenge :
    - Create a ContactCard.js component in another file
    - Move one of the Contact Card divs below into that file
    - import and render 4 instances of that contact card
        - Think ahead: what's the problem with doing it this way?
*/

export default function ContactCard(){
    return(
       <div className="contact--card">
            <img src={cat1}
                alt="Mr.Whiskerson"
            />
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src={phone} width="15px"/>
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={email} width="20px"/>
                <p>mr.whiskaz@catnap.meow</p>
            </div>
       </div>
    )
}