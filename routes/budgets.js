const express = require('express')
const Budget =  require('../models/Budget.js')

const router = express.Router();

// Get budgets for a month
router.get('/:month', async (req, res) => {
  try {
    const budgets = await Budget.find({ month: req.params.month });
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching budgets' });
  }
});

// Set or update a budget
router.post('/', async (req, res) => {
  try {
    const { category, amount, month } = req.body;
    const existing = await Budget.findOne({ category, month });
    if (existing) {
      existing.amount = amount;
      await existing.save();
      res.json(existing);
    } else {
      const budget = new Budget({ category, amount, month });
      await budget.save();
      res.json(budget);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error saving budget' });
  }
});

module.exports =  router;
