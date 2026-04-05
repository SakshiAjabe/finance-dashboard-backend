const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index: true
  },

  amount: { type: Number, required: true },

  type: {
    type: String,
    enum: ["income", "expense"],
    required: true
  },

  category: { type: String, required: true, index: true },

  date: { type: Date, default: Date.now, index: true },

  notes: String
}, { timestamps: true });

module.exports = mongoose.model("Record", recordSchema);