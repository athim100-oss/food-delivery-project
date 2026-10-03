const Order = require("../Model/OrderModel");
const Food = require("../Model/FoodModel");
const User = require("../Model/UserModel");

// CREATE ORDER
async function createOrder(req, res) {
  try {
    const { userId, foodId, quantity, deliveryAddress } = req.body;
    if (!userId || !foodId || !quantity || !deliveryAddress) {
      return res.status(400).json({
        message: "All order details are required",
      });
    }

    // Find user
    const userData = await User.findById(userId);
    if (!userData) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Find food
    const foodData = await Food.findById(foodId);

    if (!foodData) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    // Check availability
    if (!foodData.available) {
      return res.status(400).json({
        message: "Food is not available",
      });
    }

    // Quantity
    const orderQuantity = Number(quantity);
    if (orderQuantity < 1) {
      return res.status(400).json({
        message: "Quantity must be at least 1",
      });
    }

    // Calculate total
    const totalAmount = Number(foodData.price) * orderQuantity;

    // Create order
    const order = new Order({
      userId: userId,
      foodId: foodId,
      quantity: orderQuantity,
      totalAmount: totalAmount,
      deliveryAddress: deliveryAddress,
    });
    const savedOrder = await order.save();
    // Populate response
    const populatedOrder = await Order.findById(savedOrder._id)
      .populate("userId")
      .populate("foodId");
    res.status(201).json({
      message: "Order placed successfully",
      order: populatedOrder,
    });
  } catch (error) {
    console.log("Create Order Error:", error);
    res.status(500).json({
      message: "Order failed",
      error: error.message,
    });
  }
}

// GET ALL ORDERS - ADMIN
async function getAllOrders(req, res) {
  try {
    const orders = await Order.find()
      .populate("userId")
      .populate("foodId")
      .sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.log("Get All Orders Error:", error);
    res.status(500).json({
      message: "Failed to get orders",
      error: error.message,
    });
  }
}

// GET USER ORDERS
async function getUserOrders(req, res) {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ userId: userId })
      .populate("foodId")
      .populate("userId")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    console.log("Get User Orders Error:", error);
    res.status(500).json({
      message: "Failed to get user orders",
      error: error.message,
    });
  }
}

// GET ONE ORDER
async function getOneOrder(req, res) {
  try {
    const order = await Order.findById(req.params.id)
      .populate("userId")
      .populate("foodId");
    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get order",
      error: error.message,
    });
  }
}
// UPDATE ORDER STATUS
async function updateOrderStatus(req, res) {
  try {
    const allowedStatuses = [
      "pending",
      "Confirmed",
      "preparing",
      "out for delivery",
      "delivered",
      "cancelled",
    ];
    const { status } = req.body;
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid order status",
      });
    }
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: status },
      { new: true },
    )
      .populate("userId")
      .populate("foodId");
    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    res.status(200).json({
      message: "Status updated",
      order: order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Status update failed",
      error: error.message,
    });
  }
}

// CANCEL ORDER
async function cancelOrder(req, res) {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "cancelled" },
      { new: true },
    );
    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    res.status(200).json({
      message: "Order cancelled",
      order: order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Cancel failed",
      error: error.message,
    });
  }
}
// DELETE ORDER - ADMIN
async function deleteOrder(req, res) {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete order failed",
      error: error.message,
    });
  }
}
module.exports = {
  createOrder,
  getAllOrders,
  getUserOrders,
  getOneOrder,
  updateOrderStatus,
  cancelOrder,
  deleteOrder,
};
