import React, { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const API_URL = "http://localhost:3001/cart";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  const handleRemove = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setCartItems(cartItems.filter((item) => item.id !== id)))
      .catch((err) => console.error("Error removing item:", err));
  };

  return (
    <section className="cart-section">
      <h1>Your Tickets</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty </p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.title} />
              <div className="cart-info">
                <h3>{item.title}</h3>
                <p>
                  <strong>Date:</strong> {item.date}
                </p>
                <p>
                  <strong>Location:</strong> {item.location}
                </p>
                <p>
                  <strong>Tickets:</strong> {item.tickets}
                </p>
                <p>
                  <strong>Buyer:</strong> {item.firstName} {item.lastName}
                </p>
                <p>
                  <strong>Total:</strong> KES {item.price * item.tickets}
                </p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Cart;
