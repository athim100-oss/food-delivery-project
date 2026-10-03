import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderDetailsButton() {
  const navigate = useNavigate();
  const [orderCount, setOrderCount] = useState(0);
  // GET CART COUNT
  function loadCart() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user) {
      setOrderCount(0);
      return;
    }
    const cartKey = `orders_${user._id}`;
    const orders = JSON.parse(localStorage.getItem(cartKey)) || [];
    setOrderCount(orders.length);
  }
  // LOAD + LISTEN FOR CART UPDATE
  useEffect(() => {
    loadCart();
    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  // NO ORDERS
  if (orderCount === 0) {
    return null;
  }
  // BUTTON
  return (
    <div className="text-center my-4">
      <button className="orderdetails" onClick={() => navigate("/Order")}>
        View Order Details ({orderCount})
      </button>
    </div>
  );
}
