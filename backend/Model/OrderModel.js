const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    foodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    deliveryAddress: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "Confirmed",
        "preparing",
        "out for delivery",
        "delivered",
        "cancelled",
      ],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
