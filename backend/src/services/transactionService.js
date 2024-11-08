const Transaction = require('../models/Transaction');
const Customer = require('../models/Customer');
const Item = require('../models/Item');

exports.createTransaction = async (transactionData) => {
  const { customerId, type, items, amount } = transactionData;

  // Yeni işlem oluştur
  const transaction = new Transaction({
    customer: customerId,
    type,
    amount,
  });

  // Eğer işlem bir satış ise, ürünleri ekle
  if (type === 'sale' && items && items.length > 0) {
    const itemIds = [];
    for (const itemData of items) {
      const item = new Item({
        ...itemData,
        transaction: transaction._id,
      });
      await item.save();
      itemIds.push(item._id);
    }
    transaction.items = itemIds;
  }

  await transaction.save();

  // Müşteri bakiyesini güncelle
  const customer = await Customer.findById(customerId);
  if (type === 'sale') {
    customer.balance += amount;
  } else if (type === 'payment') {
    customer.balance -= amount;
  }
  customer.transactions.push(transaction._id);
  await customer.save();

  return transaction;
};

exports.getTransactionsByCustomer = async (customerId) => {
  return await Transaction.find({ customer: customerId }).populate('items');
};

exports.getAllTransactions = async () => {
  return await Transaction.find().populate('items');
};

exports.updateTransaction = async (transactionId, updateData) => {
    // İşlem güncelleme mantığı
    return await Transaction.findByIdAndUpdate(transactionId, updateData, { new: true });
};
  
exports.deleteTransaction = async (transactionId) => {
    // İşlem silme mantığı
    return await Transaction.findByIdAndDelete(transactionId);
};