const mongoose = require("mongoose");
// create Schema
const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["User", "admin"],
      default: "User",
    },
  },
  { timestamps: true },
);
//create model
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
