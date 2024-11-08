require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./src/utils/logger');
const helmet = require('helmet');

const userRouter = require('./src/routers/userRouter');
const customerRouter = require('./src/routers/customerRouter');
const transactionRouter = require('./src/routers/transactionRouter');
const itemRouter = require('./src/routers/itemRouter');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Sunucu hatası' });
});

// Routers
app.use('/api/users', userRouter);
app.use('/api/customers', customerRouter);
app.use('/api/transactions', transactionRouter);
app.use('/api/items', itemRouter);

// Ana Sayfa
app.get('/', (req, res) => {
  res.send('Admin Panel API Çalışıyor');
});

app.use(helmet());

// MongoDB Bağlantısı
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('MongoDB bağlantısı başarılı');
  // Sunucuyu Başlatma
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
  });
})
.catch((err) => {
  console.error('MongoDB bağlantı hatası:', err);
});

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});
