const { body } = require('express-validator');

exports.createTransactionValidation = [
  body('customerId').notEmpty().withMessage('Müşteri ID gerekli'),
  body('type').isIn(['sale', 'payment']).withMessage('Geçersiz işlem tipi'),
  body('amount').isNumeric().withMessage('Tutar sayısal olmalı'),
];

exports.updateTransactionValidation = [
    body('type').optional().isIn(['sale', 'payment']).withMessage('Geçersiz işlem tipi'),
    body('amount').optional().isNumeric().withMessage('Tutar sayısal olmalı'),
    // Diğer alanlar için validasyonlar ekleyebilirsiniz
  ];