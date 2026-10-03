import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/userdashboard.css";

function UserLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  // GET LOGGED USER
  useEffect(() => {
    async function loadUserData() {
      try {
        const loggedUser = localStorage.getItem("loggedUser");
        if (!loggedUser) {
          navigate("/login");
          return;
        }
        const userData = JSON.parse(loggedUser);
        if (!userData?._id) {
          navigate("/login");
          return;
        }
        setUser(userData);

        // GET USER ORDERS

        const response = await axios.get(
          `http://localhost:5000/Order/user/${userData._id}`,
        );
        setOrders(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log(
          "User Dashboard Error:",
          error.response?.data || error.message,
        );
        setOrders([]);
      } finally {
        setLoading(false);
      }
    }
    loadUserData();
  }, [navigate]);

  // LOGOUT
  function logout() {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  }
  // LOADING
  if (loading) {
    return (
      <div className="user-dashboard">
        <h2>Loading...</h2>
      </div>
    );
  }

  // USER NOT FOUND
  if (!user) {
    return null;
  }

  // TOTAL ORDERS
  const totalOrders = orders.length;

  // TOTAL AMOUNT
  const totalAmount = orders.reduce(
    (total, order) => total + Number(order.totalAmount || 0),
    0,
  );

  // UI
  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>

      {/* USER INFORMATION */}
      <div className="user-info">
        <h2>My Information</h2>
        <p>
          <strong>User ID:</strong> {user._id}
        </p>
        <p>
          <strong>Name:</strong> {user.fullname}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {user.phonenumber}
        </p>
      </div>
      {/* ORDER SUMMARY */}
      <div className="order-summary">
        <h2>My Order Summary</h2>
        <p>
          <strong>Total Orders:</strong> {totalOrders}
        </p>
        <p>
          <strong>Total Amount:</strong> ₹{totalAmount}
        </p>
      </div>

      {/* VIEW ORDERS */}
      <button onClick={() => navigate("/MyOrders")}>View My Orders</button>

      {/* menu */}
      <button onClick={() => navigate("/Menu")}>Go To Menu</button>

      {/* LOGOUT */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserLogin;
