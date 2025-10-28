import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import ExploreEvents from "./Sections/ExploreEvents";
import Cart from "./Sections/Cart";
import MyTickets from "./Sections/MyTickets";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import About from "./Sections/About";
import CallbackRequest from "./Components/CallbackRequest"; 
import "./App.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <Navbar loggedInUser={loggedInUser} />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<ExploreEvents />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={<Login setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/cart" element={<Cart loggedInUser={loggedInUser} />} />
          <Route
            path="/my-tickets"
            element={
              loggedInUser ? (
                <MyTickets customerEmail={loggedInUser.email} />
              ) : (
                <div className="no-tickets-message">
                  Please log in to view your tickets.
                </div>
              )
            }
          />
        </Routes>
      </div>

     
      <CallbackRequest />
    </Router>
  );
}

export default App;
