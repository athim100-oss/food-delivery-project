const express = require("express");
const router = express.Router();
const {createOrder,getAllOrders,getUserOrders,getOneOrder,updateOrderStatus,cancelOrder,deleteOrder,} = require("../Controller/OrderController");

// Create order
router.post("/", createOrder);
// Get all orders - admin
router.get("/", getAllOrders);
// Get logged user's orders
router.get("/user/:userId", getUserOrders);
// Get one order
router.get("/:id", getOneOrder);
// Update status
router.patch("/:id/status", updateOrderStatus);
// Cancel order
router.patch("/:id/cancel", cancelOrder);
// Delete order
router.delete("/:id", deleteOrder);
module.exports = router;