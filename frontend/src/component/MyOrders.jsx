import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/MyOrders.css";

export default function MyOrders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  // GET MY ORDERS
  useEffect(() => {
    async function getMyOrders() {
      try {
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
        const response = await axios.get(
          `http://localhost:5000/Order/user/${user._id}`,
        );
        setOrders(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log("My Orders Error:", error.response?.data || error.message);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    }
    getMyOrders();
  }, [navigate]);

  // LOADING
  if (loading) {
    return (
      <div className="my-orders-container">
        <h3>Loading...</h3>
      </div>
    );
  }

  // UI
  return (
    <div className="my-orders-container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <div>
          <p>No orders found.</p>
          <button className="order-btn" onClick={() => navigate("/Menu")}>
            Go To Menu
          </button>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="my-orders-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Order ID</th>
                <th>Food ID</th>
                <th>Food</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Address</th>
                <th>Status</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order._id}</td>
                  <td>{order.foodId?._id || "-"}</td>
                  <td>{order.foodId?.foodname || "Food"}</td>
                  <td>{order.quantity}</td>
                  <td>₹{order.foodId?.price || 0}</td>
                  <td>₹{order.totalAmount || 0}</td>
                  <td>{order.deliveryAddress || "-"}</td>
                  <td>{order.status || "pending"}</td>
                  <td>
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
