const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (userData) => {
  const { username, password } = userData;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('Kullanıcı zaten mevcut');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  return await user.save();
};

exports.login = async (userData) => {
  const { username, password } = userData;
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Kullanıcı bulunamadı');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Şifre hatalı');
  }
  const token = jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  return { token, user };
};
exports.getUserById = async (userId) => {
  return await User.findById(userId).select('-password');
};

exports.updateUser = async (userId, updateData) => {
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }
  return await User.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');
};

exports.deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};