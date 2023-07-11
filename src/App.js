import React from "react"
import ContactCard from "./props/ContactCard"

/*
    Challenge: Add all the rest of the data to the Contact card instances
*/

export default function App (){
    return(
        <div className="contacts">
            <ContactCard 
                img="./images/cat1.jpeg"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
                />
            <ContactCard
                img="./images/cat2.jpeg"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <ContactCard
                img="./images/cat3.jpeg"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <ContactCard
                img="./images/cat4.jpeg"
                name="Pumpkin"
                phone="(212) 555-1234"
                email="pumpkin@gmail.com"
            />
        </div>
        

    )
}