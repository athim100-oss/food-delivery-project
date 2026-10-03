import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FoodCard from "./FoodCard";
import "../css/FoodMenu.css";

export default function FoodList() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  const cartKey = user ? `orders_${user._id}` : null;
  const orders = user ? JSON.parse(localStorage.getItem(cartKey)) || [] : [];

  async function getFoods() {
    try {
      const response = await axios.get("http://localhost:5000/Food");
      console.log("Food:", response.data);
      const data = Array.isArray(response.data) ? response.data : [];
      setFoods(data);
    } catch (error) {
      console.log("Food Error:", error.response?.data || error.message);
    }
  }
  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className="container">
      {/* VIEW ORDER DETAILS */}

      {orders.length > 0 && (
        <div className="text-center my-4">
          <button className="btn btn-dark" onClick={() => navigate("/Order")}>
            View Order Details ({orders.length})
          </button>
        </div>
      )}
      {/* FOOD LIST */}

      {foods.length === 0 ? (
        <p className="text-center">No food available</p>
      ) : (
        foods.map((food) => (
          <FoodCard
            key={food._id}
            data={{
              foodId: food._id,
              img: food.image,
              title: food.foodname,
              rate: food.price,
              text: food.description,
            }}
          />
        ))
      )}
    </div>
  );
}
