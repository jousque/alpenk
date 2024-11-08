const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const { registerValidation, loginValidation, updateUserValidation } = require('../validators/userValidator');
const { validate } = require('../middleware/validationMiddleware');

router.post('/register', registerValidation, validate, userController.register);
router.post('/login', loginValidation, validate, userController.login);
router.get('/:id', authMiddleware, userController.getUserById);
router.put('/:id', authMiddleware, updateUserValidation, validate, userController.updateUser);
router.delete('/:id', authMiddleware, userController.deleteUser);


module.exports = router;
