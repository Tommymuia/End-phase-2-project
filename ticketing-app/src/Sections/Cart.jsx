import React, { useEffect, useState } from "react";
import "./Cart.css";

function Cart({ loggedInUser }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    fetch("http://localhost:3001/cart")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleRemove = (id) => {
    fetch(`http://localhost:3001/cart/${id}`, { method: "DELETE" })
      .then(() => fetchCartItems())
      .catch((err) => console.error(err));
  };

  const handleCheckout = async () => {
    if (!loggedInUser) {
      alert("Please log in to complete checkout.");
      return;
    }

    try {
      for (const item of cartItems) {
        const ticketWithCustomer = {
          ...item,
          customerEmail: loggedInUser.email,
        };

        await fetch("http://localhost:3001/purchases", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ticketWithCustomer),
        });

        await fetch(`http://localhost:3001/cart/${item.id}`, {
          method: "DELETE",
        });
      }

      alert("Checkout successful! Your tickets are now in My Tickets.");
      fetchCartItems();
    } catch (err) {
      console.error("Checkout failed:", err);
    }
  };

  if (loading) return <p>Loading cart...</p>;

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <h3>{item.title}</h3>
                <p>
                  {item.ticketCount} ticket(s) for {item.firstName}{" "}
                  {item.lastName}
                </p>
                <p>Total: KES {item.totalPrice}</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
