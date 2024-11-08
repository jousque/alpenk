const Customer = require('../models/Customer');

exports.createCustomer = async (customerData) => {
  const existingCustomer = await Customer.findOne({ name: customerData.name });
  if (existingCustomer) {
    throw new Error('Bu müşteri zaten mevcut');
  }
  const customer = new Customer(customerData);
  return await customer.save();
};

exports.getCustomerById = async (customerId) => {
  return await Customer.findById(customerId).populate({
    path: 'transactions',
    populate: {
      path: 'items',
    },
  });
};

exports.updateCustomerBalance = async (customerId, amount) => {
  const customer = await Customer.findById(customerId);
  customer.balance += amount;
  return await customer.save();
};

exports.getAllCustomers = async () => {
  return await Customer.find().populate('transactions');
};

exports.updateCustomer = async (customerId, updateData) => {
    return await Customer.findByIdAndUpdate(customerId, updateData, { new: true });
};
  
exports.deleteCustomer = async (customerId) => {
    return await Customer.findByIdAndDelete(customerId);
};