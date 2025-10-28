import React, { useState } from "react";
import "./BuyTicketModal.css";

function BuyTicketModal({ event, onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ticketCount, setTicketCount] = useState(1);

  const handlePurchase = () => {
    const newTicket = {
      eventId: event.id,
      title: event.title,
      firstName,
      lastName,
      ticketCount,
      totalPrice: ticketCount * event.price,
    };

    fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTicket),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add to cart");
        alert("Ticket added to cart!");
        onClose();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Buy Ticket - {event.title}</h2>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Number of Tickets:</label>
        <input
          type="number"
          min="1"
          value={ticketCount}
          onChange={(e) => setTicketCount(Number(e.target.value))}
        />
        <p>Total: USD {ticketCount * event.price}</p>
        <div className="modal-actions">
          <button onClick={handlePurchase}>Confirm</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default BuyTicketModal;
