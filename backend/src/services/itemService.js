const Item = require('../models/Item');

exports.createItem = async (itemData) => {
  const item = new Item(itemData);
  return await item.save();
};

exports.getItemById = async (itemId) => {
  return await Item.findById(itemId);
};

exports.updateItem = async (itemId, updateData) => {
  return await Item.findByIdAndUpdate(itemId, updateData, { new: true });
};

exports.deleteItem = async (itemId) => {
  return await Item.findByIdAndDelete(itemId);
};

exports.getAllItems = async () => {
  return await Item.find();
};
