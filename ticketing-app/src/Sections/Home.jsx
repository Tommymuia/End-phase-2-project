import React, { useEffect } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Welcome to Tickify</h1>
        <p>Book, manage, and explore your favorite events with ease and confidence.</p>
        <a href="/events" className="explore-btn">Explore Events</a>
      </div>
    </section>
  );
}

export default Home;
