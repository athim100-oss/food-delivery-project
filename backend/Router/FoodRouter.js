const express = require("express");
const router = express.Router();
const {addFood,getFood,getOneFood,deleteFood,editFood,updateFoodAvailability,} = require("../Controller/FoodController");

// Add food
router.post("/",addFood);
// Get all food
router.get("/",getFood);
// Get one food
router.get("/:id",getOneFood);
// Delete food
router.delete("/:id",deleteFood);
// Update food
router.put("/:id",editFood);
// Update availability
router.patch("/:id/availability",updateFoodAvailability);

module.exports = router;