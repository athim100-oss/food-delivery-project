import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/FoodCardMenu.css";
export default function FoodCard({ data }) {
  const navigate = useNavigate();
  const { img, title, rate, text, foodId } = data || {};

  // ORDER BUTTON
  function handleOrder() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));

    // USER LOGIN CHECK
    if (!user) {
      localStorage.setItem(
        "pendingFood",
        JSON.stringify({
          foodId,
          img,
          title,
          rate: Number(rate),
          text,
          quantity: 1,
        }),
      );
      navigate("/login");
      return;
    }

    // FOOD ID CHECK
    if (!foodId) {
      alert("Food ID not found");
      return;
    }

    // USER SPECIFIC CART
    const cartKey = `orders_${user._id}`;
    const oldOrders = JSON.parse(localStorage.getItem(cartKey)) || [];

    // CHECK FOOD ALREADY EXISTS
    const existingIndex = oldOrders.findIndex((item) => item.foodId === foodId);

    // IF FOOD ALREADY EXISTS
    if (existingIndex !== -1) {
      oldOrders[existingIndex].quantity += 1;
    }

    // NEW FOOD
    else {
      oldOrders.push({
        foodId: foodId,
        img: img,
        title: title,
        rate: Number(rate),
        text: text,
        quantity: 1,
      });
    }
    // SAVE CART
    localStorage.setItem(cartKey, JSON.stringify(oldOrders));
    // IMPORTANT
    // VIEW ORDER BUTTON UPDATE
    window.dispatchEvent(new Event("cartUpdated"));
    alert(`${title} added to order`);
  }
  // UI
  return (
    <div className="container-fluid food-card">
      <img src={img} alt={title} />
      <div className="food-content">
        <div className="food-header">
          <h3>{title}</h3>
          <div className="d-flex gap-3">
            <span>₹{Number(rate)}</span>
            <button onClick={handleOrder}>Order</button>
          </div>
        </div>
        <hr />
        <p>{text}</p>
      </div>
    </div>
  );
}
