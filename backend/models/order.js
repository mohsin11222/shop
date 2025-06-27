const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  product: String,
}, { timestamps: true });

// ✅ Check if model already exists before creating new one
module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);
