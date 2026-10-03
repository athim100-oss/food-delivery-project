import React from "react";
import "../css/FoodMenu.css";

export default function FoodMenu() {
  return (
    <div>
      <section className="menu-section">
        <div className="menu-label">Our Menu</div>

        <h1 className="menu-title">Most Popular Food in the World</h1>
        <div className="menu-buttons">
          <button className="active">Starter</button>
          <button>Main Course</button>
          <button>Drinks</button>
          <button>Offer</button>
          <button>Our Special</button>
        </div>
      </section>
    </div>
  );
}
