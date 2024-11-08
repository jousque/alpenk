const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['sale', 'payment'], required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  amount: { type: Number, required: true },
});

module.exports = mongoose.model('Transaction', transactionSchema);
