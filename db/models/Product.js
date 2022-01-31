const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  color: { type: String },
  quantity: { type: Number },
  price: { type: Number },
});
module.exports = mongoose.model("Product", ProductSchema);
