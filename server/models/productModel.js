const mongoose = require("mongoose");

var productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: ture,
    },
    description: {
      required: ture,
      type: String,
    },
    productimage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "category",
      required: ture,
    },
    owner: {
      type: mongoose.Schema.Type.ObjectID,
      ref: "user",
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
