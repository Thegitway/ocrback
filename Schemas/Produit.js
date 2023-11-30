const mongoose = require("mongoose");

const Product = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
  inStock: { type: Boolean },
});

module.exports = mongoose.model("Product", Product, "Product");
