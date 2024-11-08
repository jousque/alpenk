const transactionService = require('../services/transactionService');

exports.createTransaction = async (req, res) => {
  try {
    const transaction = await transactionService.createTransaction(req.body);
    res.status(201).json({ message: 'İşlem oluşturuldu', transaction });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTransactionsByCustomer = async (req, res) => {
  try {
    const transactions = await transactionService.getTransactionsByCustomer(req.params.customerId);
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getAllTransactions();
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTransaction = async (req, res) => {
    try {
      const transaction = await transactionService.updateTransaction(req.params.id, req.body);
      if (!transaction) {
        return res.status(404).json({ error: 'İşlem bulunamadı' });
      }
      res.json({ message: 'İşlem güncellendi', transaction });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
  
exports.deleteTransaction = async (req, res) => {
    try {
      const transaction = await transactionService.deleteTransaction(req.params.id);
      if (!transaction) {
        return res.status(404).json({ error: 'İşlem bulunamadı' });
      }
      res.json({ message: 'İşlem silindi' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
  