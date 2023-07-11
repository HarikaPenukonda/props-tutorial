import React from "react"
import ContactCard from "./ContactCard"
import cat1 from "./images/cat1.jpeg"
import cat2 from "./images/cat2.jpeg"
import cat3 from "./images/cat3.jpeg"
import cat4 from "./images/cat4.jpeg"

/*
    Challenge: Add all the rest of the data to the Contact card instances
*/

export default function App (){
    return(
        <div className="contacts">
            <ContactCard 
                img={cat1}
                name="Mr. Whiskerson"
                mobile="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
                />
            <ContactCard
                img={cat2}
                name="Fluffykins"
                mobile="(212) 555-2345"
                email="fluff@me.com"
            />
            <ContactCard
                img={cat3}
                name="Felix"
                mobile="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <ContactCard
                img={cat4}
                name="Pumpkin"
                mobile="(212) 555-1234"
                email="pumpkin@gmail.com"
            />
        </div>
        

    )
}