const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middleware/authMiddleware');
const { createCustomerValidation, updateCustomerValidation } = require('../validators/customerValidator');
const { validate } = require('../middleware/validationMiddleware');

router.post('/', authMiddleware, createCustomerValidation, validate, customerController.createCustomer);
router.get('/', authMiddleware, customerController.getAllCustomers);
router.get('/:id', authMiddleware, customerController.getCustomerById);
router.put('/:id', authMiddleware, updateCustomerValidation, validate, customerController.updateCustomer);
router.delete('/:id', authMiddleware, customerController.deleteCustomer);

module.exports = router;
