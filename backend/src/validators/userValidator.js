const { body } = require('express-validator');

exports.registerValidation = [
  body('username').notEmpty().withMessage('Kullanıcı adı gerekli'),
  body('password').isLength({ min: 6 }).withMessage('Şifre en az 6 karakter olmalı'),
];

exports.loginValidation = [
  body('username').notEmpty().withMessage('Kullanıcı adı gerekli'),
  body('password').notEmpty().withMessage('Şifre gerekli'),
];

exports.updateUserValidation = [
    body('username').optional().notEmpty().withMessage('Kullanıcı adı boş olamaz'),
    body('password').optional().isLength({ min: 6 }).withMessage('Şifre en az 6 karakter olmalı'),
  ];