import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import BuyTicketModal from "../Components/BuyTicketModal";
import "./ExploreEvents.css";

function ExploreEvents() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const API_URL = "http://localhost:3001/events";
  const CART_URL = "http://localhost:3001/cart";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleBuyTicket = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handleConfirmPurchase = (formData) => {
    const ticketData = {
      ...formData,
      eventId: selectedEvent.id,
      title: selectedEvent.title,
      date: selectedEvent.date,
      location: selectedEvent.location,
      image: selectedEvent.image,
      price: selectedEvent.price,
    };

    fetch(CART_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticketData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Ticket successfully added to cart!");
        closeModal();
      })
      .catch((err) => console.error("Error adding ticket to cart:", err));
  };

  const categories = ["All", ...new Set(events.map((event) => event.category))].sort();

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="events-section" id="events">
      <div className="header-filter-bar">
        <h1 className="events-title">Current Events</h1>

        <div className="filter-controls">
          <input
            type="text"
            placeholder="Search events..."
            className="event-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="category-select-input"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {events.length === 0 ? (
        <p className="events-loading">...Loading Events</p>
      ) : (
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onBuyTicket={() => handleBuyTicket(event)}
            />
          ))}
        </div>
      )}

      {events.length > 0 && filteredEvents.length === 0 && (
        <p className="events-loading">No events found matching your criteria.</p>
      )}

      {selectedEvent && (
        <BuyTicketModal
          event={selectedEvent}
          onClose={closeModal}
          onConfirm={handleConfirmPurchase}
        />
      )}
    </section>
  );
}

export default ExploreEvents;
