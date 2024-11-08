const { body } = require('express-validator');

exports.createItemValidation = [
  body('name').notEmpty().withMessage('Ürün adı gerekli'),
  body('quantity').isNumeric().withMessage('Miktar sayısal olmalı'),
  body('costPrice').isNumeric().withMessage('Maliyet fiyatı sayısal olmalı'),
  body('salePrice').isNumeric().withMessage('Satış fiyatı sayısal olmalı'),
];

exports.updateItemValidation = [
  body('name').optional().notEmpty().withMessage('Ürün adı boş olamaz'),
  body('quantity').optional().isNumeric().withMessage('Miktar sayısal olmalı'),
  body('costPrice').optional().isNumeric().withMessage('Maliyet fiyatı sayısal olmalı'),
  body('salePrice').optional().isNumeric().withMessage('Satış fiyatı sayısal olmalı'),
];
