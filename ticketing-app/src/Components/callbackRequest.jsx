import React, { useEffect, useState } from "react";

function CallbackRequest() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [showPopUp, setShowPopUp] = useState(false);

  // show popup after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3001/callbackRequests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Thank you! We’ll call you back soon.");
      setShowPopUp(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!showPopUp) return null;

  return (
    <div className="pop-up-overlay">
      <div className="pop-up-container">
        <button className="close-btn" onClick={() => setShowPopUp(false)}>×</button>
        <h2>Request a Callback</h2>
        <form onSubmit={handleSubmit}>
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

export default CallbackRequest;
