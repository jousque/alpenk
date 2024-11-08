const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  costPrice: { type: Number, required: true },
  salePrice: { type: Number, required: true },
  transaction: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
});

module.exports = mongoose.model('Item', itemSchema);
