// models/Budget.js
const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['Food', 'Transport', 'Shopping', 'Bills', 'Entertainment', 'Health', 'Other'],
  },
  amount: {
    type: Number,
    required: true,
  },
  month: {
    type: String, // e.g. "2025-05"
    required: true,
  }
});

module.exports =  mongoose.model('Budget', BudgetSchema);
