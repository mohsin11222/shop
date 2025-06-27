const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');

const OrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  category: String,
  createdAt: { type: Date, default: Date.now }
});

router.post('/', async (req, res) => {
  const order = await Order.create(req.body);
  res.json({ success: true, orderId: order._id });
});

module.exports = router;
