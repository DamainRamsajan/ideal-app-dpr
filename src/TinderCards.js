import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:'Buju Banton',
            url: './Assets/images/Buju.jpg',
        },

        {
            name:'Rabia',
            url: './Assets/images/Rabia.jpg',
        },

        {
            name:'Damian',
            url: './Assets/images/Damian.jpg',
        },

        {
            name:'Bob Marley',
            url: './Assets/images/Bob.jpg',
        }

       
    ]); 
    const swiped = (direction, nameToDelete) => {
        console.log ("removing " + nameToDelete);
        
    };

    const outOfFrame = (name) => {
        console.log(name + " left the bomboclat screen");

    };

    return (
        <div className ="tinderCards">
           
            <div className ="tinderCards__cardContainer">
            {people.map((person) => (
             <TinderCard
                className ="swipe"
                key = {person.name}
                preventSwipe = {["up", "down"]}
                onSwipe = {(dir) => swiped(dir, person.name)}
                onCardLeftScreen = {() => outOfFrame (person.name)}
             
             >
                 <div
                    style = {{ backgroundImage : `url(${person.url})`}}
                    className = "card"
                    >
                         <h3>{person.name}</h3>

                 </div>

             </TinderCard>
             )) } 
            </div>                   
        </div>
    )
}

export default TinderCards
