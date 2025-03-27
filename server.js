require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const corsOptions = {
  origin: ['http://localhost:5500','https://your-frontend-domain.com'],
  methods:['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders:['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
if (process.env.NODE_ENV ==='production') {
  app.use(express.static('client/build'));

  app.get('*',(req, res)=> {
    res.sendFile(path.resolve(__dirname, 'clent', 'build', 'index.html'));
  });
}