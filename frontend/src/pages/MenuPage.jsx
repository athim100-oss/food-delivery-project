import React from "react";

import FoodCardMainMenu from "../component/FoodCardMainMenu";
import FoodMenu from "../component/FoodMenu";
import OrderDetailsButton from "../component/OrderDetailsButton";

import "../css/FoodMenu.css";

export default function MenuPage() {
  return (
    <div>

      <div className="heading">

        <h1>
          Menu
        </h1>

        <h4>
          <span>Home</span>
          {" / "}
          <span>pages</span>
          {" / "}
          Menu
        </h4>

      </div>

      <FoodMenu />

      {/* MongoDB Food */}
      <FoodCardMainMenu />

      {/* User Cart Button */}
      <OrderDetailsButton />

    </div>
  );
}
