const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');
const { createTransactionValidation, updateTransactionValidation  } = require('../validators/transactionValidator');
const { validate } = require('../middleware/validationMiddleware');

router.post('/', authMiddleware, createTransactionValidation, validate, transactionController.createTransaction);
router.get('/', authMiddleware, transactionController.getAllTransactions);
router.get('/customer/:customerId', authMiddleware, transactionController.getTransactionsByCustomer);
router.put('/:id', authMiddleware, updateTransactionValidation, validate, transactionController.updateTransaction);
router.delete('/:id', authMiddleware, transactionController.deleteTransaction);

module.exports = router;
