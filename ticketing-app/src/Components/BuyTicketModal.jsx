import React, { useState } from "react";
import "./BuyTicketModal.css";

const BuyTicketModal = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tickets: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      eventId: event.id,
      eventTitle: event.title,
      firstName: formData.firstName,
      lastName: formData.lastName,
      tickets: parseInt(formData.tickets),
      totalPrice: event.price * formData.tickets,
    };

    fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Ticket added to cart successfully!");
        onClose();
      })
      .catch((err) => console.error("Error adding to cart:", err));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Buy Ticket: {event.title}</h2>

        <form onSubmit={handleSubmit} className="modal-form">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="modal-input"
            required
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="modal-input"
            required
          />
          <input
            type="number"
            name="tickets"
            min="1"
            value={formData.tickets}
            onChange={handleChange}
            className="modal-input"
            required
          />
          <p className="modal-total">
            Total: <span>USD {event.price * formData.tickets}</span>
          </p>

          <div className="modal-buttons">
            <button type="submit" className="confirm-btn">
              Confirm Purchase
            </button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyTicketModal;
