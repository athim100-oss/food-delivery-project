import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Order.css";

export default function Order() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  // LOAD USER CART
  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (!loggedUser) {
      navigate("/login");
      return;
    }
    const user = JSON.parse(loggedUser);
    if (!user?._id) {
      navigate("/login");
      return;
    }
    const cartKey = `orders_${user._id}`;
    const savedOrders = JSON.parse(localStorage.getItem(cartKey)) || [];
    setOrders(savedOrders);

    // Previous address
    const savedAddress = localStorage.getItem(`deliveryAddress_${user._id}`);
    if (savedAddress) {
      setAddress(savedAddress);
    }
  }, [navigate]);

  // INCREASE
  function increaseQuantity(index) {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user) return;
    const updatedOrders = [...orders];
    updatedOrders[index].quantity += 1;
    setOrders(updatedOrders);
    const cartKey = `orders_${user._id}`;
    localStorage.setItem(cartKey, JSON.stringify(updatedOrders));
  }
  // DECREASE
  function decreaseQuantity(index) {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user) return;
    const updatedOrders = [...orders];
    if (updatedOrders[index].quantity > 1) {
      updatedOrders[index].quantity -= 1;
    }
    setOrders(updatedOrders);
    const cartKey = `orders_${user._id}`;
    localStorage.setItem(cartKey, JSON.stringify(updatedOrders));
  }
  // REMOVE
  function removeOrder(index) {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user) return;
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    const cartKey = `orders_${user._id}`;
    localStorage.setItem(cartKey, JSON.stringify(updatedOrders));
  }

  // GRAND TOTAL
  const grandTotal = orders.reduce((total, item) => {
    return total + Number(item.rate) * Number(item.quantity);
  }, 0);

  // PLACE ORDER
  async function placeOrder() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user) {
      navigate("/login");
      return;
    }
    if (!user._id) {
      alert("User ID not found");
      return;
    }
    if (orders.length === 0) {
      alert("Please add food to order");
      return;
    }
    if (!address.trim()) {
      alert("Please enter delivery address");
      return;
    }
    setLoading(true);
    try {
      // Save address temporarily
      localStorage.setItem(`deliveryAddress_${user._id}`, address);

      // SEND EVERY FOOD TO BACKEND
      for (const item of orders) {
        await axios.post("http://localhost:5000/Order", {
          userId: user._id,
          foodId: item.foodId,
          quantity: Number(item.quantity),
          deliveryAddress: address.trim(),
        });
      }

      // CLEAR CART
      const cartKey = `orders_${user._id}`;
      localStorage.removeItem(cartKey);
      localStorage.removeItem(`deliveryAddress_${user._id}`);
      setOrders([]);
      alert("Order placed successfully");

      // USER ORDERS PAGE
      navigate("/MyOrders");
    } catch (error) {
      console.log("Place Order Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Order failed");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="order-container">
      <h2>Order Details</h2>
      {orders.length === 0 ? (
        <div className="empty-order">
          <p>No food added to order.</p>
          <button className="order-btn" onClick={() => navigate("/Menu")}>
            Go To Menu
          </button>
        </div>
      ) : (
        <>
          {/* ORDER TABLE */}
          <div className="table-responsive">
            <table className="order-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Food Name</th>
                  <th>Food ID</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr key={item.foodId}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.foodId}</td>
                    <td>₹{item.rate}</td>
                    <td>
                      <button
                        className="quantity-btn"
                        onClick={() => decreaseQuantity(index)}
                      >
                        -
                      </button>
                      <span className="quantity-number">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => increaseQuantity(index)}
                      >
                        +
                      </button>
                    </td>
                    <td>₹{Number(item.rate) * Number(item.quantity)}</td>
                    <td>
                      <button
                        className="delete-order-btn"
                        onClick={() => removeOrder(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ADDRESS */}
          <div className="address-section">
            <label>Delivery Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your delivery address"
              rows="4"
            />
          </div>

          {/* TOTAL */}
          <div className="order-total">
            <h3>Grand Total: ₹{grandTotal}</h3>
            <button
              className="order-btn place-btn"
              onClick={placeOrder}
              disabled={loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
