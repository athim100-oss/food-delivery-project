const Food = require("../Model/FoodModel");

// ADD FOOD
async function addFood(req, res) {
  try {
    const food = new Food(req.body);
    const savedFood = await food.save();
    res.status(201).json({
      message: "Food added successfully",
      food: savedFood,
    });
  } catch (error) {
    res.status(500).json({
      message: "Food adding failed",
      error: error.message,
    });
  }
}

// GET ALL FOOD
async function getFood(req, res) {
  try {
    const food = await Food.find();
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({
      message: "Food fetching failed",
      error: error.message,
    });
  }
}

// GET ONE FOOD

async function getOneFood(req, res) {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({
      message: "Food fetching failed",
      error: error.message,
    });
  }
}
// DELETE FOOD
async function deleteFood(req, res) {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);

    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }
    res.status(200).json({
      message: "Food deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Food deletion failed",
      error: error.message,
    });
  }
}

// UPDATE FOOD
async function editFood(req, res) {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }
    res.status(200).json({
      message: "Food updated successfully",
      food: food,
    });
  } catch (error) {
    res.status(500).json({
      message: "Food update failed",
      error: error.message,
    });
  }
}

// CHANGE AVAILABILITY
async function updateFoodAvailability(req, res) {
  try {
    const food = await Food.findByIdAndUpdate(
      req.params.id,
      { available: req.body.available },
      { new: true },
    );
    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }
    res.status(200).json({
      message: "Availability updated",
      food: food,
    });
  } catch (error) {
    res.status(500).json({
      message: "Availability update failed",
      error: error.message,
    });
  }
}
module.exports = {
  addFood,
  getFood,
  getOneFood,
  deleteFood,
  editFood,
  updateFoodAvailability,
};
