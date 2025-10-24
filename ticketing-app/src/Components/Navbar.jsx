import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ loggedInUser }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/cart")
      .then((res) => res.json())
      .then((data) => setCartCount(data.length))
      .catch(() => setCartCount(0));
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">Tickify</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/my-tickets">My Tickets</Link></li>
      </ul>

      <div className="navbar-actions">
        <Link to="/cart" className="cart-btn">
          🛒 <span className="cart-count">{cartCount}</span>
        </Link>

        {loggedInUser ? (
          <span className="user-name">{loggedInUser.firstName}</span>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}

        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
