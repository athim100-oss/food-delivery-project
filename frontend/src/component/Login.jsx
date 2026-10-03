import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/User/login", {
        email,
        password,
      });

      const user = response.data.user;
      if (!user || !user._id) {
        alert("Invalid user data");
        return;
      }
      // Save logged user
      localStorage.setItem("loggedUser", JSON.stringify(user));
      console.log("Logged User:", user);

      // USER SPECIFIC CART
      const cartKey = `orders_${user._id}`;
      let oldOrders = JSON.parse(localStorage.getItem(cartKey)) || [];

      // PENDING FOOD
      const pendingFood = localStorage.getItem("pendingFood");
      if (pendingFood) {
        const food = JSON.parse(pendingFood);
        const existingIndex = oldOrders.findIndex(
          (item) => item.foodId === food.foodId,
        );
        if (existingIndex !== -1) {
          oldOrders[existingIndex].quantity += 1;
        } else {
          oldOrders.push({
            ...food,
            quantity: food.quantity || 1,
          });
        }

        localStorage.setItem(cartKey, JSON.stringify(oldOrders));
        localStorage.removeItem("pendingFood");
      }
      // ADMIN / USER
      if (user.role === "admin") {
        navigate("/Admin");
      } else {
        navigate("/Menu");
      }
    } catch (error) {
      console.log("Login Error:", error.response?.data || error.message);

      alert(error.response?.data?.message || "Login failed");
    }
  }
  return (
    <div className="body">
      <div className="signup-container">
        <div className="signup-header">
          <h2>Login</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
