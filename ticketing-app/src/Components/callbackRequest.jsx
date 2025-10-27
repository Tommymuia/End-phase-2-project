import React, { useState } from "react";

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
});
const [showPopUp, setShowPopUp] = useState(false);

function callbackRequest() {
  return (
    <div className="pop-up-overlay">
      <div className="pop-up-container">
        <button>Close</button>
        <h2>Request a Callback</h2>
        <form onSubmit={handleChange}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Request Callback</button>
        </form>
      </div>
    </div>
  );
}
