const { body } = require('express-validator');

exports.createCustomerValidation = [
  body('name').notEmpty().withMessage('Müşteri adı gerekli'),
];

exports.updateCustomerValidation = [
    body('name').optional().notEmpty().withMessage('Müşteri adı boş olamaz'),
    // Diğer alanlar için validasyonlar ekleyebilirsiniz
  ];