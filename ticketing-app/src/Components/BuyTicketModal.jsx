import React, { useState } from "react";
import "./BuyTicketModal.css";

function BuyTicketModal({ event, onClose, onConfirm }) {
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
    onConfirm(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <h2 className="modal-title">Buy Ticket</h2>
        <p className="modal-event-name">{event.title}</p>
        <p className="modal-event-details">
          {event.date} — {event.location}
        </p>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Number of Tickets:
            <input
              type="number"
              name="tickets"
              min="1"
              value={formData.tickets}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="confirm-button">
            Confirm Purchase
          </button>
        </form>
      </div>
    </div>
  );
}

export default BuyTicketModal;
