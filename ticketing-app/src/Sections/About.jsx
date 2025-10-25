import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>About Tickify</h1>
        <p>
          Tickify is your ultimate platform for discovering and booking tickets
          to exciting events near you. Whether it’s concerts, conferences,
          workshops or local meetups, Tickify  makes the experience seamless
          and hassle-free.
        </p>

        <div className="about-features">
          <div className="feature-card">
            <h3>Discover Events</h3>
            <p>Browse a wide range of Events happening around you.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Booking</h3>
            <p>Purchase tickets quickly and securely with just a few clicks.</p>
          </div>
          <div className="feature-card">
            <h3>My Tickets</h3>
            <p>Keep track of all your purchased tickets in one place.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Payments</h3>
            <p>Pay safely through integrated payment options you can trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
