const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Order = require('./models/order'); // ✅ Fixed capital O
const orderRoutes = require('./routes/orderRoutes'); // ✅ Routes

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/order', orderRoutes); // ✅ POST route

mongoose.connect('mongodb://mongo:27017/shopdb')
  .then(() => console.log('Mongo Connected'))
  .catch(err => console.error(err));

// ✅ GET route for all orders
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error('🔥 Error fetching orders:', err.message);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

app.listen(4000, '0.0.0.0', () => console.log('Backend running on port 4000'));
