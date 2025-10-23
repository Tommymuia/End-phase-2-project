import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onBuyTicket }) => {
  return (
    <div className="event-card">
        
        {event.image && (
            <img 
                src={event.image} 
                alt={event.title} 
                className="event-image" 
            />
        )}
        
        <div className="event-details">
            <h3>{event.title}</h3>
            <p>Date: {event.date || 'To Be Determined'}</p>
            <p>Location: {event.location || 'Online'}</p>
            <p>Price: ${event.price || 'Free'}</p>
        </div>
        
        <button 
            className="buy-button" 
            onClick={() => onBuyTicket(event)}
        >
            Buy Ticket
        </button>
    </div>
  );
};

export default EventCard;