const mongoose = require("mongoose");

const todoItemSchema = mongoose.Schema(
  {
    task: { type: String, required: true },
    date: { type: Date, required: true },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true, // This is the correct syntax for enabling timestamps
  }
);

module.exports = mongoose.model("TodoItem", todoItemSchema);
