const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authMiddleware = require('../middleware/authMiddleware');
const { createItemValidation, updateItemValidation } = require('../validators/itemValidator');
const { validate } = require('../middleware/validationMiddleware');

router.post('/', authMiddleware, createItemValidation, validate, itemController.createItem);
router.get('/', authMiddleware, itemController.getAllItems);
router.get('/:id', authMiddleware, itemController.getItemById);
router.put('/:id', authMiddleware, updateItemValidation, validate, itemController.updateItem);
router.delete('/:id', authMiddleware, itemController.deleteItem);

module.exports = router;
