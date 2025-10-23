import React from "react";

function EventCard ({event}) {
    return ( 
        <div className = "event-card">
            <img src ={event.image} alt={event.title} className="event-image"/>
            <h2>{event.title}</h2>
            <p>{event.date} | {event.location}</p>
            <p>Category : {event.category}</p>
            <p>Price : ${event.price}</p>
            








        </div>




    )
}