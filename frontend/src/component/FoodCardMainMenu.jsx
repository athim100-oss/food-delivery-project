import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/FoodCardMenu.css";
import "../css/FoodMenu.css";
import Card from "../component/FoodCard";
import img1 from "../images/menu-01.jpg";
import img2 from "../images/menu-02.jpg";
import img3 from "../images/menu-03.jpg";
import img4 from "../images/menu-04.jpg";
import img5 from "../images/menu-05.jpg";
import img6 from "../images/menu-06.jpg";
import img7 from "../images/menu-07.jpg";
import img8 from "../images/menu-08.jpg";

export default function FoodCardMainMenu() {
  const [dbFoods, setDbFoods] = useState([]);

  // GET FOOD FROM MONGODB

  useEffect(() => {
    async function getFoods() {
      try {
        const response = await axios.get("http://localhost:5000/Food");
        console.log("MongoDB Food:", response.data);
        if (Array.isArray(response.data)) {
          setDbFoods(response.data);
        } else {
          setDbFoods([]);
        }
      } catch (error) {
        console.log("Food fetch error:", error);
      }
    }
    getFoods();
  }, []);

  // YOUR ORIGINAL 8 CARDS

  const foods = [
    {
      img: img1,
      title: "Paneer",
      text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    },
    {
      img: img2,
      title: "Sweet Potato",
      text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    },
    {
      img: img3,
      title: "Sbaduna Tikki",
      text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    },
    {
      img: img4,
      title: "Pizza",
      text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    },
    {
      img: img5,
      title: "Bacon",
      text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    },
    {
      img: img6,
      title: "Chicken",
      text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    },
    {
      img: img7,
      title: "Blooming",
      text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    },
    {
      img: img8,
      title: "Sweet",
      text: "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    },
  ];

  // ADD MONGODB PRICE + ID
  const finalFoods = foods.map((food) => {
    const mongoFood = dbFoods.find((item) => {
      const mongoName = item.foodname?.trim().toLowerCase();
      const designName = food.title?.trim().toLowerCase();
      return mongoName === designName;
    });
    return {
      img: food.img,
      title: food.title,
      text: food.text,

      // MONGODB PRICE
      rate: mongoFood ? Number(mongoFood.price) : 0,
      // MONGODB FOOD ID
      foodId: mongoFood ? mongoFood._id : null,
    };
  });

  // UI

  return (
    <div>
      <section className="food-section">
        {finalFoods.map((food, index) => (
          <div className="first-card-row" key={food.foodId || index}>
            <Card data={food} />
          </div>
        ))}
      </section>
    </div>
  );
}
