const customerService = require('../services/customerService');

exports.createCustomer = async (req, res) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json({ message: 'Müşteri oluşturuldu', customer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await customerService.getCustomerById(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: 'Müşteri bulunamadı' });
    }
    res.json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.json(customers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.updateCustomer = async (req, res) => {
    try {
      const customer = await customerService.updateCustomer(req.params.id, req.body);
      if (!customer) {
        return res.status(404).json({ error: 'Müşteri bulunamadı' });
      }
      res.json({ message: 'Müşteri güncellendi', customer });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
  
exports.deleteCustomer = async (req, res) => {
    try {
      const customer = await customerService.deleteCustomer(req.params.id);
      if (!customer) {
        return res.status(404).json({ error: 'Müşteri bulunamadı' });
      }
      res.json({ message: 'Müşteri silindi' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};