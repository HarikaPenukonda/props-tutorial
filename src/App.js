import React from "react"
import ContactCard from "./props/ContactCard"

/*
    
*/

export default function App (){
    return(
        <div className="contacts">
            <ContactCard 
                img="./images/cat1.jpeg"
                name="Mr. Whiskerson"
                />
            <ContactCard/>
            <ContactCard/>
            <ContactCard/>
        </div>
        

    )
}