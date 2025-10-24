import React, { useEffect, useState } from "react";
import "./MyTickets.css";

function MyTickets({ customerEmail }) {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!customerEmail) {
      console.log("No customerEmail provided");
      setLoading(false);
      return;
    }

    console.log("Fetching tickets for:", customerEmail);

    fetch(`http://localhost:3001/purchases?customerEmail=${customerEmail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setTickets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tickets:", err);
        setLoading(false);
      });
  }, [customerEmail]);

  if (loading) {
    return (
      <div className="tickets-container">
        <h1>My Tickets</h1>
        <p>Loading your tickets...</p>
      </div>
    );
  }

  return (
    <div className="tickets-container">
      <h1>My Tickets</h1>
      {tickets.length === 0 ? (
        <p>You have no tickets yet.</p>
      ) : (
        <ul className="tickets-list">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="ticket-item">
              <h3>{ticket.title}</h3>
              <p>
                {ticket.ticketCount} ticket(s) for {ticket.firstName} {ticket.lastName}
              </p>
              <p>Total: KES {ticket.totalPrice}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyTickets;
