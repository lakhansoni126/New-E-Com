const mongoose = require("mongoose");

var categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: ture,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
